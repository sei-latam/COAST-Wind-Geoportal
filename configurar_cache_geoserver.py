#!/usr/bin/env python3
"""
Configura GeoWebCache para TODAS las capas del espacio de trabajo coast_wind_data
y (opcionalmente) siembra la caché, una capa a la vez.

Qué hace en cada capa:
  - Crea la capa de caché si no existe.
  - Deja solo el formato image/png (quita jpeg, gif, etc.).
  - Pone "Expirar el cache del cliente" en 86400 s (1 día).
  - Se asegura de que el gridset EPSG:900913 (el que usa Leaflet) esté activo.
  - Opcional: quita el gridset EPSG:4326 (QUITAR_EPSG4326).

Uso (solo necesita Python 3, sin librerías extra):
  python configurar_cache_geoserver.py --simular     -> muestra qué cambiaría, no toca nada
  python configurar_cache_geoserver.py               -> aplica la configuración
  python configurar_cache_geoserver.py --sembrar     -> aplica la configuración y siembra z5 a z10
  python configurar_cache_geoserver.py --solo-sembrar

La contraseña de admin se pide por teclado; no queda guardada en ningún lado.
"""
import argparse
import base64
import getpass
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

# ------------------------------------------------------------------ configuración
GEOSERVER = "https://geoserver.coast-wind.org/geoserver"
WORKSPACE = "coast_wind_data"
USUARIO = "admin"

FORMATO = "image/png"
EXPIRAR_CLIENTE_SEG = 86400       # 1 día de caché en el navegador
GRIDSET = "EPSG:900913"           # el que usa Leaflet
QUITAR_EPSG4326 = False           # True = elimina el gridset EPSG:4326 (el visor no lo usa)

ZOOM_INICIO = 5
ZOOM_FIN = 10                     # se pre-generan z5–z10; los zooms mayores se guardan solos cuando alguien los visita
HILOS_SIEMBRA = 1                 # VM de 2 vCPU: no subir de 2

# Capas que el geovisor NO usa: el script no las toca (ni configuración ni siembra)
EXCLUIR = {
    "coast_wind_data:grilla_joint_EPSG4326_conv",        # grilla anterior de 1 GB
    "coast_wind_data:Environmental Sensitivity Index",   # comentada en geovisor.js
    "coast_wind_data:Volcanes de lodo SGC 2023",         # comentada en geovisor.js
}
# ---------------------------------------------------------------------------------

AUTH = None


def peticion(metodo, ruta, cuerpo=None, tipo="application/xml"):
    url = GEOSERVER + ruta
    datos = cuerpo.encode("utf-8") if isinstance(cuerpo, str) else cuerpo
    req = urllib.request.Request(url, data=datos, method=metodo)
    req.add_header("Authorization", AUTH)
    if datos is not None:
        req.add_header("Content-Type", tipo)
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", "replace")


def capa_url(nombre):
    return urllib.parse.quote(nombre, safe=":")


def listar_capas():
    st, txt = peticion("GET", f"/rest/workspaces/{WORKSPACE}/layers.json")
    if st == 401:
        sys.exit("Usuario o contraseña incorrectos (401).")
    if st != 200:
        sys.exit(f"No se pudo listar las capas ({st}): {txt[:300]}")
    capas = json.loads(txt).get("layers") or {}
    lista = capas.get("layer", []) if isinstance(capas, dict) else []
    if isinstance(lista, dict):
        lista = [lista]
    return sorted(f"{WORKSPACE}:{c['name']}" for c in lista)


def xml_nueva_capa(nombre):
    return f"""<GeoServerLayer>
  <enabled>true</enabled>
  <inMemoryCached>true</inMemoryCached>
  <name>{nombre}</name>
  <mimeFormats><string>{FORMATO}</string></mimeFormats>
  <gridSubsets><gridSubset><gridSetName>{GRIDSET}</gridSetName></gridSubset></gridSubsets>
  <metaWidthHeight><int>4</int><int>4</int></metaWidthHeight>
  <expireCache>0</expireCache>
  <expireClients>{EXPIRAR_CLIENTE_SEG}</expireClients>
  <gutter>0</gutter>
</GeoServerLayer>"""


def ajustar_xml(texto):
    """Devuelve (xml_modificado, lista_de_cambios)."""
    raiz = ET.fromstring(texto)
    cambios = []

    if (raiz.findtext("enabled") or "").strip() != "true":
        el = raiz.find("enabled")
        if el is None:
            el = ET.SubElement(raiz, "enabled")
        el.text = "true"
        cambios.append("caché activada")

    mf = raiz.find("mimeFormats")
    actuales = [s.text for s in mf.findall("string")] if mf is not None else []
    if actuales != [FORMATO]:
        if mf is None:
            mf = ET.SubElement(raiz, "mimeFormats")
        for s in list(mf):
            mf.remove(s)
        ET.SubElement(mf, "string").text = FORMATO
        cambios.append(f"formatos {actuales} -> [{FORMATO}]")

    ec = raiz.find("expireClients")
    if ec is None:
        ec = ET.SubElement(raiz, "expireClients")
    if (ec.text or "0").strip() != str(EXPIRAR_CLIENTE_SEG):
        cambios.append(f"expirar cliente {ec.text or 0} -> {EXPIRAR_CLIENTE_SEG}")
        ec.text = str(EXPIRAR_CLIENTE_SEG)

    gs = raiz.find("gridSubsets")
    if gs is None:
        gs = ET.SubElement(raiz, "gridSubsets")
    nombres = [g.findtext("gridSetName") for g in gs.findall("gridSubset")]
    if GRIDSET not in nombres:
        nuevo = ET.SubElement(gs, "gridSubset")
        ET.SubElement(nuevo, "gridSetName").text = GRIDSET
        cambios.append(f"gridset {GRIDSET} agregado")
    if QUITAR_EPSG4326:
        for g in gs.findall("gridSubset"):
            if g.findtext("gridSetName") == "EPSG:4326":
                gs.remove(g)
                cambios.append("gridset EPSG:4326 quitado")

    return ET.tostring(raiz, encoding="unicode"), cambios


def configurar(nombre, simular):
    ruta = f"/gwc/rest/layers/{capa_url(nombre)}.xml"
    st, txt = peticion("GET", ruta)
    if st == 404:
        if simular:
            return "se CREARÍA la capa de caché"
        st, txt = peticion("PUT", ruta, xml_nueva_capa(nombre))
        return "capa de caché CREADA" if st in (200, 201) else f"ERROR al crear ({st}): {txt[:200]}"
    if st != 200:
        return f"ERROR al leer ({st}): {txt[:200]}"

    nuevo, cambios = ajustar_xml(txt)
    if not cambios:
        return "ya estaba bien"
    if simular:
        return "cambiaría: " + "; ".join(cambios)
    st, txt = peticion("POST", ruta, nuevo)
    if st in (405, 400):          # algunas versiones solo aceptan PUT para modificar
        st, txt = peticion("PUT", ruta, nuevo)
    return ("OK: " + "; ".join(cambios)) if st in (200, 201) else f"ERROR al guardar ({st}): {txt[:200]}"


def sembrar(nombre):
    cuerpo = f"""<seedRequest>
  <name>{nombre}</name>
  <gridSetId>{GRIDSET}</gridSetId>
  <zoomStart>{ZOOM_INICIO}</zoomStart>
  <zoomStop>{ZOOM_FIN}</zoomStop>
  <format>{FORMATO}</format>
  <type>seed</type>
  <threadCount>{HILOS_SIEMBRA}</threadCount>
</seedRequest>"""
    ruta = f"/gwc/rest/seed/{capa_url(nombre)}"
    st, txt = peticion("POST", ruta + ".xml", cuerpo)
    if st not in (200, 201):
        print(f"    ERROR al sembrar ({st}): {txt[:200]}")
        return
    inicio = time.time()
    while True:                   # espera a que termine antes de pasar a la siguiente capa
        time.sleep(10)
        st, txt = peticion("GET", ruta + ".json")
        tareas = json.loads(txt).get("long-array-array", []) if st == 200 else []
        if not tareas:
            break
        hechas, total, restante = tareas[0][0], tareas[0][1], tareas[0][2]
        print(f"    {hechas}/{total} teselas, faltan ~{restante} s", end="\r")
    print(f"    sembrada en {int(time.time() - inicio)} s" + " " * 30)


def main():
    global AUTH, GEOSERVER, ZOOM_FIN
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--simular", action="store_true", help="solo muestra qué cambiaría")
    ap.add_argument("--sembrar", action="store_true", help="también siembra la caché")
    ap.add_argument("--solo-sembrar", action="store_true", help="solo siembra, no cambia la configuración")
    ap.add_argument("--zoom-fin", type=int, default=ZOOM_FIN, help=f"último zoom a sembrar (por defecto {ZOOM_FIN})")
    ap.add_argument("--url", default=GEOSERVER, help="URL de GeoServer (en la VM: http://localhost:8080/geoserver)")
    a = ap.parse_args()

    GEOSERVER = a.url.rstrip("/")
    ZOOM_FIN = a.zoom_fin
    clave = os.environ.get("GEOSERVER_PASS") or getpass.getpass(f"Contraseña de {USUARIO} en GeoServer: ")
    AUTH = "Basic " + base64.b64encode(f"{USUARIO}:{clave}".encode()).decode()

    todas = listar_capas()
    capas = [c for c in todas if c not in EXCLUIR]
    print(f"\n{len(todas)} capas en {WORKSPACE}; se trabajará con {len(capas)} "
          f"(se omiten {len(todas) - len(capas)} que el geovisor no usa)\n")

    if not a.solo_sembrar:
        for n in capas:
            print(f"- {n}: {configurar(n, a.simular)}")

    if (a.sembrar or a.solo_sembrar) and not a.simular:
        print(f"\nSembrando z{ZOOM_INICIO}–z{ZOOM_FIN} en {GRIDSET}, una capa a la vez...\n")
        for i, n in enumerate(capas, 1):
            print(f"[{i}/{len(capas)}] {n}")
            sembrar(n)
    print("\nListo.")


if __name__ == "__main__":
    main()
