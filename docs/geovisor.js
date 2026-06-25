var map = L.map('map', { zoomControl: false }).setView([11.08, -74.05], 7);
L.control.zoom({ position: 'bottomright' }).addTo(map);

// Definición de Mapas Base Disponibles
var mapasBase = {
  "Esri Satelital": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
  "Google Híbrido": L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'),
  "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};

// Carga Inicial del Mapa Base por Defecto
mapasBase["Esri Satelital"].addTo(map);
var mapaBaseActivo = mapasBase["Esri Satelital"];

// Diccionario para almacenar las instancias de capas cargadas
var capasWMSActivas = {};
var wmsBaseUrl = "https://geoserver.coast-wind.org/geoserver/coast_wind_data/wms";

// Catálogo Estricto - Nombres de Capas idénticos a los archivos físicos .tif (Sin emojis ni textos largos)
var capasProyecto = [
  { id: "1_env_interest_suma_geotiff", nombre: "1_env_interest_suma_geotiff", grupo: "Síntesis" },
  { id: "MANGLARES_DE_COLOMBIA_grilla_raster", nombre: "MANGLARES_DE_COLOMBIA_grilla_raster", grupo: "Ecosistemas" },
  { id: "Distribución_de_Pastos_Marinos_grilla_raster", nombre: "Distribución_de_Pastos_Marinos_grilla_raster", grupo: "Ecosistemas" },
  { id: "Unidades_de_las_Áreas_Coralinas_(Poligonos)_grilla_raster", nombre: "Unidades_de_las_Áreas_Coralinas_(Poligonos)_grilla_raster", grupo: "Ecosistemas" },
  { id: "fondvegalgascarnosas_fondvegalgascarnosas_grilla_raster", nombre: "fondvegalgascarnosas_fondvegalgascarnosas_grilla_raster", grupo: "Ecosistemas" },
  { id: "Fondos_Duros%3A_Algas_Calcareas_grilla_raster", nombre: "Fondos_Duros%3A_Algas_Calcareas_grilla_raster", grupo: "Ecosistemas" },
  { id: "AlimentacionTortugas_shp_grilla_raster", nombre: "AlimentacionTortugas_shp_grilla_raster", grupo: "Fauna" },
  { id: "Playas_de_Anidacion_de_Tortugas_grilla_raster", nombre: "Playas_de_Anidacion_de_Tortugas_grilla_raster", grupo: "Fauna" },
  { id: "DesoveNodrizaStrombusg_grilla_raster", nombre: "DesoveNodrizaStrombusg_grilla_raster", grupo: "Fauna" },
  { id: "CongregacionPeces_grilla_raster", nombre: "CongregacionPeces_grilla_raster", grupo: "Fauna" },
  { id: "PresenciaMamiferosMarinos_grilla_raster", nombre: "PresenciaMamiferosMarinos_grilla_raster", grupo: "Fauna" },
  { id: "Congregacion_de_Aves_Marinas_grilla_raster", nombre: "Congregacion_de_Aves_Marinas_grilla_raster", grupo: "Fauna" },
  { id: "Congregacion_de_Aves_Playeras_grilla_raster", nombre: "Congregacion_de_Aves_Playeras_grilla_raster", grupo: "Fauna" },
  { id: "Playas_Caribe_grilla_raster", nombre: "Playas_Caribe_grilla_raster", grupo: "Geomorfología" },
  { id: "Playones_grilla_raster", nombre: "Playones_grilla_raster", grupo: "Geomorfología" },
  { id: "Playones_Salinos_grilla_raster", nombre: "Playones_Salinos_grilla_raster", grupo: "Geomorfología" },
  { id: "Acantilados_grilla_raster", nombre: "Acantilados_grilla_raster", grupo: "Geomorfología" },
  { id: "Humedales_Costeros_Caribe_100K_grilla_raster", nombre: "Humedales_Costeros_Caribe_100K_grilla_raster", grupo: "Geomorfología" },
  { id: "Lagunas_Costeras_grilla_raster", nombre: "Lagunas_Costeras_grilla_raster", grupo: "Geomorfología" },
  { id: "Estuarios_grilla_raster", nombre: "Estuarios_grilla_raster", grupo: "Geomorfología" },
  { id: "Panganales_grilla_raster", nombre: "Panganales_grilla_raster", grupo: "Geomorfología" },
  { id: "playonesfluviomarinos_playonesfluviomarinos_grilla_raster", nombre: "playonesfluviomarinos_playonesfluviomarinos_grilla_raster", grupo: "Geomorfología" },
  { id: "ASB_Caribe_shape_grilla_raster", nombre: "ASB_Caribe_shape_grilla_raster", grupo: "Gestión" },
  { id: "runap_-_Registro_Unico_Nacional_AP_grilla_raster", nombre: "runap_-_Registro_Unico_Nacional_AP_grilla_raster", grupo: "Gestión" },
  { id: "Sitios_Prioritarios_Conservación_Caribe_grilla_raster", nombre: "Sitios_Prioritarios_Conservación_Caribe_grilla_raster", grupo: "Gestión" },
  { id: "Surgencia_grilla_raster", nombre: "Surgencia_grilla_raster", grupo: "Gestión" }
];

// Generación Dinámica del Menú por Grupos
function inicializarMenu() {
  var contenedor = document.getElementById('contenedor-capas');
  var grupos = {};

  capasProyecto.forEach(capa => {
    if (!grupos[capa.grupo]) grupos[capa.grupo] = [];
    grupos[capa.grupo].push(capa);
  });

  for (var nomGrupo in grupos) {
    var tituloGrupo = document.createElement('h3');
    tituloGrupo.className = "text-[10px] font-bold text-slate-500 mt-4 mb-2 border-b border-slate-100 pb-1 uppercase tracking-wider flex items-center justify-between";
    tituloGrupo.innerHTML = `<span>${nomGrupo}</span> <i class="fas fa-chevron-down text-[8px]"></i>`;
    contenedor.appendChild(tituloGrupo);

    grupos[nomGrupo].forEach(capa => {
      var item = document.createElement('div');
      item.className = "layer-item";
      item.id = "item-" + capa.id;

      item.innerHTML = `
    <label class="flex items-center gap-2 cursor-pointer flex-1 text-[11px] font-sans font-medium text-slate-700 tracking-tight break-all">
      <input type="checkbox" id="chk-${capa.id}" class="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 shrink-0" onchange="toggleCapa('${capa.id}', '${capa.nombre}')">
      <span>${capa.nombre}</span>
    </label>
    `;
    contenedor.appendChild(item);
    });
  }
}

// Encendido y Apagado Simultáneo
function toggleCapa(layerName, tituloAmigable) {
  var checkBox = document.getElementById("chk-" + layerName);
  var containerItem = document.getElementById("item-" + layerName);

  if (checkBox.checked) {
    containerItem.classList.add('active');
    
    capasWMSActivas[layerName] = L.tileLayer.wms(wmsBaseUrl, {
      layers: 'coast_wind_data:' + layerName,
      format: 'image/png',
      transparent: true,
      version: '1.1.0',
      srs: 'EPSG:4326',
      styles: ''
    }).addTo(map);

  } else {
    containerItem.classList.remove('active');
    if (capasWMSActivas[layerName]) {
      map.removeLayer(capasWMSActivas[layerName]);
      delete capasWMSActivas[layerName];
    }
  }
  
  actualizarPanelInformacion();
}

// Generador de Leyenda e Información Cruda para Auditoría con Widget de Descargas Dinámicas
function actualizarPanelInformacion() {
  var panelTexto = document.getElementById('panel-texto');
  var panelDescargas = document.getElementById('panel-descargas');
  var activas = Object.keys(capasWMSActivas);

  if (!panelDescargas) return;

  if (activas.length === 0) {
    if (panelTexto) panelTexto.innerHTML = '<p class="text-slate-400 italic text-[11px]">No hay capas activas en el mapa.</p>';
    panelDescargas.innerHTML = '<p class="text-slate-400 italic text-[11px] text-center mt-4">Active una capa para habilitar los enlaces de descarga.</p>';
    return;
  }

  // 1. Renderizar Leyendas WMS en el Panel Inferior Izquierdo
  if (panelTexto) {
    panelTexto.innerHTML = '<div class="space-y-4 max-h-[180px] overflow-y-auto pr-1"></div>';
    var listaContenedor = panelTexto.querySelector('div');

    activas.forEach(idCapa => {
      var urlLeyenda = `${wmsBaseUrl}?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&LAYER=coast_wind_data:${idCapa}&legend_options=fontName:Inter;fontSize:10;fontColor:0x475569`;

      var bloqueCapa = document.createElement('div');
      bloqueCapa.className = "border-b border-slate-100 pb-2 last:border-none";
      bloqueCapa.innerHTML = `
        <p class="font-mono text-[10px] font-bold text-slate-800 break-all mb-1.5 flex items-center gap-1">
           ID: ${idCapa}
        </p>
        <div class="mt-1 bg-slate-50 p-1.5 rounded border border-slate-100 inline-block">
          <img src="${urlLeyenda}" alt="Leyenda de GeoServer" onerror="this.style.display='none'" class="max-w-full">
        </div>
      `;
      listaContenedor.appendChild(bloqueCapa);
    });
  }

  // 2. Inyectar los botones de descarga real en el panel derecho (GeoTIFF y KML)
  panelDescargas.innerHTML = '<div class="space-y-3 max-h-[300px] overflow-y-auto pr-1"></div>';
  var contenedorDescargasItem = panelDescargas.querySelector('div');

  activas.forEach(idCapa => {
    // URL estándar para descargar el GeoTIFF original completo
    var urlDescargaRaster = `${wmsBaseUrl}?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetMap&LAYERS=coast_wind_data:${idCapa}&FORMAT=image/geotiff&SRS=EPSG:4326&BBOX=9.0,-77.0,14.0,-71.0&WIDTH=1200&HEIGHT=1000`;
    
    // URL estándar para descargar la capa en formato KML de Google Earth (Basado en tu ruta de GeoServer)
    var urlDescargaKML = `https://geoserver.coast-wind.org/geoserver/coast_wind_data/wms/kml?layers=coast_wind_data:${idCapa}`;

    var itemDescarga = document.createElement('div');
    itemDescarga.className = "bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-sans text-[10px] flex flex-col gap-1.5";
    itemDescarga.innerHTML = `
    <div class="text-slate-700 font-semibold tracking-tight break-all border-b border-slate-100 pb-1">${idCapa}</div>
    <div class="grid grid-cols-2 gap-1.5">
        <a href="${urlDescargaRaster}" target="_blank" download class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-center py-1 rounded border border-emerald-200 font-sans font-semibold text-[10px] tracking-tight no-underline transition-colors flex items-center justify-center gap-1">
        <i class="fa-solid fa-file-raster text-[9px]"></i> GeoTIFF
        </a>
        <a href="${urlDescargaKML}" target="_blank" class="bg-amber-50 hover:bg-amber-100 text-amber-700 text-center py-1 rounded border border-amber-200 font-sans font-semibold text-[10px] tracking-tight no-underline transition-colors flex items-center justify-center gap-1">
        <i class="fa-solid fa-earth-americas text-[9px]"></i> KML (Earth)
        </a>
    </div>
    `;
    panelDescargas.appendChild(itemDescarga);
  });
}

// Interoperabilidad de Mapas Base
function cambiarMapaBase() {
  var selector = document.getElementById("selector-basemap");
  var opacidadActual = mapaBaseActivo.options.opacity || 1;
  
  map.removeLayer(mapaBaseActivo);
  mapaBaseActivo = mapasBase[selector.value];
  mapaBaseActivo.addTo(map);
  
  mapaBaseActivo.setOpacity(opacidadActual);
}

// Control de Transparencia/Opacidad
function ajustarOpacidadBase() {
  var slider = document.getElementById("opacity-slider");
  var valorOpacidad = slider.value / 100;
  mapaBaseActivo.setOpacity(valorOpacidad);
}

// Disparador Inicial
window.onload = function() {
  inicializarMenu();
  document.getElementById("opacity-slider").addEventListener("input", ajustarOpacidadBase);
  actualizarPanelInformacion();
};