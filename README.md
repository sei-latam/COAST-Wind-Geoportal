# COAST-Wind-Geoportal

**Colombian Ocean Activity and Susceptibility Tool (COAST) - Wind**

COAST-Wind es un geovisor y sitio web del Stockholm Environment Institute Latin America Center (SEI-LA). El sitio presenta el proyecto y permite explorar información geográfica de la costa Caribe colombiana mediante un visor basado en Leaflet que consume capas WMS de GeoServer. El catálogo del repositorio reúne metadatos de capas ambientales y de actividades humanas.

## Sitio

La versión publicada se encuentra en [https://coast-wind.org](https://coast-wind.org). El directorio `docs/` contiene las páginas y los recursos estáticos del sitio.

## Funcionalidades del geovisor

La interfaz de `docs/geovisor.html` y su código asociado incluyen:

- Mapa interactivo con Leaflet, selector de mapas base, control de opacidad y controles de zoom, vista inicial y ubicación.
- Panel para mostrar u ocultar capas y consultar su simbología, con controles para activar o desactivar las capas.
- Búsqueda de lugares y direcciones.
- Herramientas para dibujar puntos, archivos y geometrías, medir y limpiar los gráficos.
- Importación de archivos vectoriales `.zip` (Shapefile), `.geojson`, `.json`, `.kml` y `.topojson`.
- Interfaz en español, inglés y portugués, con tema claro y oscuro.

El archivo `json_query.json` contiene registros de capas con nombres y descripciones en español, inglés y portugués, fuentes y enlaces a metadatos cuando están disponibles. El catálogo abarca áreas protegidas, ambientes y especies marinas, rasgos costeros, pesca, infraestructura y otros usos humanos. El catálogo es metadato; no contiene los archivos raster o vectoriales de cada capa.

## Inicio local

No se incluyen `package.json`, manifiestos de dependencias del frontend ni instrucciones de pruebas automatizadas. Para servir las páginas estáticas desde una copia local del repositorio, use Python 3:

```bash
python -m http.server 8000 --directory docs
```

Abra `http://localhost:8000/` para la página principal, o directamente `http://localhost:8000/geovisor.html`, `http://localhost:8000/introduction.html` y `http://localhost:8000/contact.html`. El geovisor consulta servicios externos, entre ellos GeoServer; servir los archivos localmente no instala ni configura esos servicios.

## Datos y servicios geográficos

- `geodatabase_COAST/CreationCOASTdatabase.sql` contiene instrucciones SQL para crear una base de datos y un esquema, asignar permisos y habilitar extensiones espaciales de PostGIS.
- `geodatabase_COAST/InputPostGISdata.sql` documenta la importación de datos GIS con `shp2pgsql`, `raster2pgsql` y `psql`, además de consultas de ejemplo. Incluye rutas y parámetros específicos de un entorno; revíselos y sustitúyalos antes de reutilizarlos.
- `geodatabase_COAST/conversionGIStoWGS84.ipynb` muestra la reproyección de un Shapefile a WGS 84 (EPSG:4326) con GeoPandas.
- `GCP.markdown` reúne comandos y fragmentos de configuración para instalar GeoServer y Nginx y publicar capas en una máquina virtual. Es una guía operativa, no una configuración automatizada o lista para ejecutar sin revisión; contiene valores de ejemplo y configuraciones de servidor que deben verificarse antes de usarse.
- `configurar_cache_geoserver.py` configura GeoWebCache para las capas de un espacio de trabajo GeoServer. Admite simulación, configuración, siembra de caché y opciones de URL y zoom; solicita la contraseña por variable de entorno o por teclado.

Los scripts y documentos describen componentes de la infraestructura geográfica, pero este repositorio no incluye una instalación completa de PostgreSQL/PostGIS o GeoServer ni los datos GIS publicados en esos servicios.

## Organización de archivos

```text
.
├── .gitattributes                         # Atributos de detección de lenguaje para SQL y notebooks
├── .gitignore                              # Exclusiones de Jekyll, Wrangler, variables locales e imágenes listadas
├── .github/
│   └── ISSUE_TEMPLATE/
│       └── bug_report.md                   # Plantilla para reportar errores
├── assets/
│   └── preview.png                         # Imagen de vista previa del proyecto
├── COAST_Visualization.qgz                 # Proyecto de QGIS
├── CODE_OF_CONDUCT.md                      # Contributor Covenant, versión 2.0
├── CONTRIBUTING.md                         # Archivo breve con pautas de contribución
├── GCP.markdown                            # Notas de instalación y despliegue de GeoServer/Nginx
├── LICENSE                                 # GNU General Public License, versión 3
├── README.md                               # Descripción y guía de los archivos del repositorio
├── SECURITY.md                             # Plantilla de política de seguridad y versiones
├── configurar_cache_geoserver.py           # Configuración y siembra de caché de GeoWebCache
├── create_json.py                          # Conversión de un CSV local a JSON
├── json_query.json                         # Catálogo de metadatos geográficos
├── geodatabase_COAST/
│   ├── CreationCOASTdatabase.sql           # Creación de base de datos, esquema, roles y extensiones
│   ├── InputPostGISdata.sql                # Ejemplos de importación y consultas PostGIS
│   └── conversionGIStoWGS84.ipynb          # Reproyección de datos GIS a EPSG:4326
├── src/
│   └── components/                         # Componentes Vue de una interfaz de mapa
│       ├── LayerPanel.vue                  # Controles de capas de ejemplo
│       ├── MapView.vue                     # Mapa Leaflet y configuración WMS
│       ├── Metadata.vue                    # Visualización de fuente y fecha de ejemplo
│       └── Topbar.vue                      # Barra superior con fecha y hora de Colombia
└── docs/                                   # Sitio estático publicado y configuración de Wrangler
    ├── Body_wepage.jpg                     # Imagen
    ├── Esri_Hybrid_Map.png                  # Imagen de mapa base
    ├── Esri_Satellite_Map.png               # Imagen de mapa base
    ├── Esri_World_Street_Map.png            # Imagen de mapa base
    ├── Google_Maps.png                      # Imagen de mapa base
    ├── Google_Satellite.png                 # Imagen de mapa base
    ├── Profile1.jpg                          # Imagen de perfil
    ├── Profile2.webp                         # Imagen de perfil
    ├── Profile3.webp                         # Imagen de perfil
    ├── Profile4.webp                         # Imagen de perfil
    ├── Profile5.webp                         # Imagen de perfil
    ├── contact.html                         # Formulario de contacto
    ├── development.css                      # Estilos de la página de desarrollo
    ├── development.html                     # Página de desarrollo
    ├── development.js                       # Comportamiento de la página de desarrollo
    ├── geovisor.css                         # Estilos del geovisor
    ├── geovisor.html                        # Interfaz del geovisor
    ├── geovisor.js                          # Lógica del mapa y sus herramientas
    ├── index.css                            # Estilos de la página principal
    ├── index.html                           # Página principal y navegación
    ├── index.js                             # Idioma, tema, reloj y vistas previas
    ├── introduction.css                     # Estilos compartidos de introducción y contacto
    ├── introduction.html                    # Descripción, equipo y temas del proyecto
    ├── introduction.js                      # Idioma, tema e índice de la introducción/contacto
    ├── logo-inst1.png                       # Imagen de logo institucional
    ├── logo-inst2.png                       # Imagen de logo institucional
    ├── logo-inst3.png                       # Imagen de logo institucional
    └── wrangler.jsonc                       # Configuración de Wrangler para los recursos de docs/
```

### Componentes Vue

Los cuatro componentes de `src/components/` son un conjunto de interfaz Vue separado de las páginas HTML estáticas de `docs/`. `MapView.vue` configura capas base y tres capas WMS; `LayerPanel.vue` presenta controles de ejemplo para clima e hidrología, y `Metadata.vue` contiene metadatos de ejemplo. En el repositorio no hay manifiesto o punto de entrada que integre estos componentes con `docs/geovisor.html`.

### Archivos de soporte

- `.github/ISSUE_TEMPLATE/bug_report.md` define los campos de la plantilla para reportar errores. No hay flujos de GitHub Actions en el árbol actual.
- `create_json.py` convierte un CSV local en `json_query.json`; la ruta del CSV está escrita para un equipo local concreto y el script requiere `pandas`.
- `COAST_Visualization.qgz` es un proyecto comprimido de QGIS.
- `assets/preview.png` es el recurso gráfico de vista previa.
- `CONTRIBUTING.md` contiene únicamente un encabezado de pautas; `SECURITY.md` conserva texto de plantilla sobre versiones y reporte de vulnerabilidades.
- `.gitattributes` configura cómo GitHub clasifica archivos SQL y notebooks. `.gitignore` incluye exclusiones para archivos locales y algunas capturas que no forman parte del árbol versionado.

## Licencia y comunidad

El repositorio incluye la licencia GNU GPL v3 en `LICENSE`, el código de conducta en `CODE_OF_CONDUCT.md` y los archivos `CONTRIBUTING.md` y `SECURITY.md` descritos arriba.
