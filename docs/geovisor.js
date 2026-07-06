var map = L.map('map', { zoomControl: false }).setView([11.08, -74.05], 7);
L.control.zoom({ position: 'bottomright' }).addTo(map);

var mapaBaseDefiniciones = {
  "Satélite Híbrido": {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    urlEsriLabels: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    thumb: "https://pub-57e2d6782dd6483194a2084ca392d4ce.r2.dev/Esri_Hybrid_Map.png"
  },
  "Satélite Esri": {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    thumb: "https://pub-57e2d6782dd6483194a2084ca392d4ce.r2.dev/Esri_Satellite_Map.png"
  },
  "Esri World Street Map": {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    thumb: "https://pub-57e2d6782dd6483194a2084ca392d4ce.r2.dev/Esri_World_Street_Map.png"
  },
  "Google Maps": {
    url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    thumb: "https://pub-57e2d6782dd6483194a2084ca392d4ce.r2.dev/Google_Maps.png"
  },
  "Google Satélite": {
    url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    thumb: "https://pub-57e2d6782dd6483194a2084ca392d4ce.r2.dev/Esri_Satellite_Map.png"
  }
};

var esriHibridoLayer = L.tileLayer(mapaBaseDefiniciones["Satélite Híbrido"].url);
var esriLabelsLayer = L.tileLayer(mapaBaseDefiniciones["Satélite Híbrido"].urlEsriLabels);
var capaBaseInstanciada = L.layerGroup([esriHibridoLayer, esriLabelsLayer]).addTo(map);
var mapaBaseActualNombre = "Satélite Híbrido";

var capasDibujo = L.featureGroup().addTo(map);
var herramientaActiva = null;
var dibujandoObjeto = null;
var puntosMedicion = [];
var tooltipMedicion = null;
var puntosRuta = []; 
var estaDibujandoLasso = false;


var capasWMSActivas = {};
var wmsBaseUrl = "https://geoserver.coast-wind.org/geoserver/coast_wind_data/wms";

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

function construirGaleriaMapasBase() {
  var grid = document.getElementById('basemapGridContainer');
  if(!grid) return;
  grid.innerHTML = "";
  
  Object.keys(mapaBaseDefiniciones).forEach(nombre => {
    var esActivo = nombre === mapaBaseActualNombre;
    var card = document.createElement('div');
    card.className = `basemap-card ${esActivo ? 'active' : ''}`;
    card.id = `bm-${nombre.replace(/ /g, "-")}`;
    card.onclick = function() { cambiarMapaBaseAdvanced(nombre); };
    
    card.innerHTML = `
      <div class="h-14 w-full rounded bg-slate-200 overflow-hidden relative border border-slate-200 mb-1">
        <img src="${mapaBaseDefiniciones[nombre].thumb}" class="w-full h-full object-cover" alt="${nombre}">
      </div>
      <span class="text-[10px] font-bold text-center text-slate-700 truncate block w-full">${nombre}</span>
    `;
    grid.appendChild(card);
  });
}

function cambiarMapaBaseAdvanced(nombre) {
  if (capaBaseInstanciada) map.removeLayer(capaBaseInstanciada);
  
  var slider = document.getElementById("opacity-slider");
  var opacidadActual = slider ? slider.value / 100 : 1;
  
  if (nombre === "Satélite Híbrido") {
    var l1 = L.tileLayer(mapaBaseDefiniciones[nombre].url, { opacity: opacidadActual });
    var l2 = L.tileLayer(mapaBaseDefiniciones[nombre].urlEsriLabels, { opacity: opacidadActual });
    capaBaseInstanciada = L.layerGroup([l1, l2]).addTo(map);
  } else {
    capaBaseInstanciada = L.tileLayer(mapaBaseDefiniciones[nombre].url, { opacity: opacidadActual }).addTo(map);
  }
  
  mapaBaseActualNombre = nombre;
  var selector = document.getElementById("selector-basemap");
  if(selector) selector.value = nombre;

  Object.keys(mapaBaseDefiniciones).forEach(n => {
    var el = document.getElementById(`bm-${n.replace(/ /g, "-")}`);
    if(el) el.className = n === nombre ? "basemap-card active" : "basemap-card";
  });
}

function cambiarMapaBaseRapido(nombre) {
  cambiarMapaBaseAdvanced(nombre);
}

function ajustarOpacidadBase() {
  var slider = document.getElementById("opacity-slider");
  if(!slider) return;
  var valor = slider.value / 100;
  if(capaBaseInstanciada.setOpacity) {
    capaBaseInstanciada.setOpacity(valor);
  } else {
    capaBaseInstanciada.eachLayer(function(layer) { if(layer.setOpacity) layer.setOpacity(valor); });
  }
}

function toggleWidget(idPanel) {
  var paneles = ['panelBasemaps', 'panelDibujo'];
  paneles.forEach(p => { if(p !== idPanel) document.getElementById(p).classList.add('hidden'); });
  document.getElementById(idPanel).classList.toggle('hidden');
}

function desactivarModosMapa() {
  map.off('click');
  map.off('mousedown');
  map.off('mousemove');
  map.off('mouseup');
  map.dragging.enable();
  herramientaActiva = null;
  document.getElementById('statusDibujo').innerText = "Ninguna herramienta activa";
}

function activarHerramientaDibujo(tipo) {
  desactivarModosMapa(); 
  herramientaActiva = tipo;
  
  var btnActivo = document.getElementById(`btn-draw-${tipo}`);
  if(btnActivo) btnActivo.classList.add('bg-blue-100', 'text-blue-700', 'border-blue-200');

  var statusMap = {
    'point': 'Haga clic para situar un PUNTO',
    'polyline': 'Clics sucesivos para POLILÍNEA. Doble clic para terminar',
    'lasso': 'Mantenga presionado el clic y arrastre (MANO ALZADA)',
    'circle': 'Clic sostenido y arrastre para CÍRCULO',
    'rectangle': 'Clic sostenido y arrastre para RECTÁNGULO',
    'measure': 'Clics sucesivos para MEDIR. Doble clic para terminar'
  };
  document.getElementById('statusDibujo').innerText = `Modo: ${statusMap[tipo]}`;

  if (tipo === 'point') {
    map.on('click', function(e) { L.marker(e.latlng).addTo(capasDibujo); desactivarModosMapa(); });
  } 
  else if (tipo === 'polyline') {
    puntosRuta = [];
    dibujandoObjeto = L.polyline([], {color: '#2563eb', weight: 3}).addTo(map);
    
    map.on('click', function(e) {
      puntosRuta.push(e.latlng);
      dibujandoObjeto.setLatLngs(puntosRuta);
    });
    map.on('mousemove', function(e) {
      if(puntosRuta.length > 0) {
        var temp = [...puntosRuta, e.latlng];
        dibujandoObjeto.setLatLngs(temp);
      }
    });
    map.on('dblclick', function() {
      dibujandoObjeto.addTo(capasDibujo);
      dibujandoObjeto = null;
      puntosRuta = [];
      desactivarModosMapa();
    });
  }
  else if (tipo === 'lasso') {
    puntosRuta = [];
    map.on('mousedown', function(e) {
      estaDibujandoLasso = true;
      map.dragging.disable(); 
      puntosRuta = [e.latlng];
      dibujandoObjeto = L.polyline(puntosRuta, {color: '#9333ea', weight: 3, lineCap: 'round'}).addTo(map);
    });
    map.on('mousemove', function(e) {
      if(estaDibujandoLasso && dibujandoObjeto) {
        puntosRuta.push(e.latlng);
        dibujandoObjeto.setLatLngs(puntosRuta);
      }
    });
    map.on('mouseup', function() {
      if(estaDibujandoLasso && dibujandoObjeto) {
        if(puntosRuta.length > 2) {
          dibujandoObjeto.addTo(capasDibujo);
        } else {
          map.removeLayer(dibujandoObjeto);
        }
        dibujandoObjeto = null;
        puntosRuta = [];
        estaDibujandoLasso = false;
        desactivarModosMapa();
      }
    });
  }
  else if (tipo === 'circle') {
    map.on('mousedown', function(e) {
      map.dragging.disable(); var centro = e.latlng;
      dibujandoObjeto = L.circle(centro, {radius: 1, color: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.3}).addTo(map);
      map.on('mousemove', function(ev) { dibujandoObjeto.setRadius(centro.distanceTo(ev.latlng)); });
      map.on('mouseup', function() { dibujandoObjeto.addTo(capasDibujo); dibujandoObjeto = null; desactivarModosMapa(); });
    });
  } 
  else if (tipo === 'rectangle') {
    map.on('mousedown', function(e) {
      map.dragging.disable(); var p1 = e.latlng;
      dibujandoObjeto = L.rectangle([p1, p1], {color: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.3}).addTo(map);
      map.on('mousemove', function(ev) { dibujandoObjeto.setBounds([p1, ev.latlng]); });
      map.on('mouseup', function() { dibujandoObjeto.addTo(capasDibujo); dibujandoObjeto = null; desactivarModosMapa(); });
    });
  } 
  else if (tipo === 'measure') {
    puntosRuta = [];
    dibujandoObjeto = L.polyline([], {color: '#ef4444', weight: 4, dashArray: '6, 6'}).addTo(map);
    tooltipMedicion = L.tooltip({permanent: true, className: 'bg-white text-red-600 p-1 rounded font-bold text-xs border border-red-200 shadow', direction: 'top'});
    
    map.on('click', function(e) {
      puntosRuta.push(e.latlng); dibujandoObjeto.setLatLngs(puntosRuta);
      var dist = calcularDistanciaRuta(puntosRuta);
      tooltipMedicion.setLatLng(e.latlng).setContent(`${dist > 1000 ? (dist/1000).toFixed(2)+' km' : dist.toFixed(0)+' m'}`).addTo(map);
    });
    map.on('mousemove', function(e) {
      if(puntosRuta.length > 0) {
        var temp = [...puntosRuta, e.latlng]; dibujandoObjeto.setLatLngs(temp);
        var dist = calcularDistanciaRuta(temp);
        tooltipMedicion.setLatLng(e.latlng).setContent(`Midiendo: ${dist > 1000 ? (dist/1000).toFixed(2)+' km' : dist.toFixed(0)+' m'}`);
      }
    });
    map.on('dblclick', function() {
      var distFinal = calcularDistanciaRuta(puntosRuta);
      L.polyline(puntosRuta, {color: '#b91c1c', weight: 3}).bindPopup(`<b>Distancia Total:</b> ${distFinal > 1000 ? (distFinal/1000).toFixed(2)+' km' : distFinal.toFixed(1)+' m'}`).addTo(capasDibujo);
      map.removeLayer(tooltipMedicion);
      desactivarModosMapa();
    });
  }
}

function calcularDistanciaRuta(puntos) { var dist = 0; for (var i = 0; i < puntos.length - 1; i++) { dist += puntos[i].distanceTo(puntos[i+1]); } return dist; }
function limpiarDibujos() { capasDibujo.clearLayers(); desactivarModosMapa(); }

var debounceTimer;
function buscarSugerencias() {
  clearTimeout(debounceTimer); var query = document.getElementById('searchInput').value.trim();
  var contenedorListado = document.getElementById('searchSuggestions');
  if (query.length < 3) { contenedorListado.innerHTML = ""; contenedorListado.classList.add('hidden'); return; }
  debounceTimer = setTimeout(async () => {
    try {
      var response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${encodeURIComponent(query)}`);
      var data = await response.json(); contenedorListado.innerHTML = "";
      if (data && data.length > 0) {
        contenedorListado.classList.remove('hidden');
        data.forEach(lugar => {
          var item = document.createElement('div'); item.className = "suggestion-item text-slate-700 font-medium border-b border-slate-100"; item.innerText = lugar.display_name;
          item.onclick = function() {
            document.getElementById('searchInput').value = lugar.display_name;
            map.setView([parseFloat(lugar.lat), parseFloat(lugar.lon)], 14);
            contenedorListado.innerHTML = ""; contenedorListado.classList.add('hidden');
          };
          contenedorListado.appendChild(item);
        });
      }
    } catch (e) { console.error(e); }
  }, 400);
}

async function ejecutarBusquedaDirecta() {
  var query = document.getElementById('searchInput').value.trim(); if (!query) return;
  try {
    var response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`);
    var data = await response.json();
    if (data && data.length > 0) { map.setView([parseFloat(data[0].lat), parseFloat(data[0].lon)], 14); }
  } catch (e) { console.error(e); }
}

function volverAlHome() { map.setView([11.08, -74.05], 7); }

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

  if (panelTexto) {
    panelTexto.innerHTML = '<div class="space-y-4 max-h-[180px] overflow-y-auto pr-1"></div>';
    var listaContenedor = panelTexto.querySelector('div');

    activas.forEach(idCapa => {
      var urlLeyenda = `${wmsBaseUrl}?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&LAYER=coast_wind_data:${idCapa}&legend_options=fontName:Inter;fontSize:10;fontColor:0x475569`;

      var bloqueCapa = document.createElement('div');
      bloqueCapa.className = "border-b border-slate-100 pb-2 last:border-none";
      bloqueCapa.innerHTML = `
        <p class="font-sans text-[10px] font-bold text-slate-800 break-all mb-1.5 flex items-center gap-1">ID: ${idCapa}</p>
        <div class="mt-1 bg-slate-50 p-1.5 rounded border border-slate-100 inline-block">
          <img src="${urlLeyenda}" alt="Leyenda" onerror="this.style.display='none'" class="max-w-full">
        </div>
      `;
      listaContenedor.appendChild(bloqueCapa);
    });
  }

  panelDescargas.innerHTML = '<div class="space-y-3 max-h-[300px] overflow-y-auto pr-1"></div>';
  var contenedorDescargasItem = panelDescargas.querySelector('div');

  activas.forEach(idCapa => {
    var urlDescargaRaster = `${wmsBaseUrl}?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetMap&LAYERS=coast_wind_data:${idCapa}&FORMAT=image/geotiff&SRS=EPSG:4326&BBOX=9.0,-77.0,14.0,-71.0&WIDTH=1200&HEIGHT=1000`;
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
    contenedorDescargasItem.appendChild(itemDescarga);
  });
}

window.onload = function() {
  inicializarMenu();
  construirGaleriaMapasBase();
  
  var slider = document.getElementById("opacity-slider");
  if(slider) slider.addEventListener("input", ajustarOpacidadBase);
  
  actualizarPanelInformacion();
};



var marcadorUbicacion = null;

function obtenerMiUbicacion() {
  if (!navigator.geolocation) {
    alert("Tu navegador no soporta la geolocalización.");
    return;
  }
  
  navigator.geolocation.getCurrentPosition(
    function(posicion) {
      var lat = posicion.coords.latitude;
      var lon = posicion.coords.longitude;
      
      map.setView([lat, lon], 14);
      
      if (marcadorUbicacion) {
        map.removeLayer(marcadorUbicacion);
      }
      
      marcadorUbicacion = L.marker([lat, lon])
        .addTo(map)
        .bindPopup("<b>Estás aquí</b>")
        .openPopup();
    },
    function(error) {
      alert("No se pudo obtener el acceso a tu ubicación: " + error.message);
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  );
}