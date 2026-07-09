var map = L.map('map', { zoomControl: false }).setView([11.08, -74.05], 7);

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
  { id: "MANGLARES_DE_COLOMBIA_grilla_raster", nombre: "Manglares", grupo: "Ecosistemas" },
  { id: "Distribución_de_Pastos_Marinos_grilla_raster", nombre: "Presencia de pastos marinos", grupo: "Ecosistemas" },
  { id: "Unidades_de_las_Áreas_Coralinas_(Poligonos)_grilla_raster", nombre: "Áreas coralinas", grupo: "Ecosistemas" },
  { id: "fondvegalgascarnosas_fondvegalgascarnosas_grilla_raster", nombre: "Fondo algas carnosas", grupo: "Ecosistemas" },
  { id: "Fondos_Duros%3A_Algas_Calcareas_grilla_raster", nombre: "Fondos duros algas calcáreas", grupo: "Ecosistemas" },
  { id: "AlimentacionTortugas_shp_grilla_raster", nombre: "Zonas de alimentación de tortugas", grupo: "Fauna" },
  { id: "Playas_de_Anidacion_de_Tortugas_grilla_raster", nombre: "Playas de anidación de tortugas", grupo: "Fauna" },
  { id: "DesoveNodrizaStrombusg_grilla_raster", nombre: "Desove de nodriza strombusg", grupo: "Fauna" },
  { id: "CongregacionPeces_grilla_raster", nombre: "Congregación de peces", grupo: "Fauna" },
  { id: "PresenciaMamiferosMarinos_grilla_raster", nombre: "Presencia de mamíferos marinos", grupo: "Fauna" },
  { id: "Congregacion_de_Aves_Marinas_grilla_raster", nombre: "Congregación de aves marinas", grupo: "Fauna" },
  { id: "Congregacion_de_Aves_Playeras_grilla_raster", nombre: "Congregación de aves playeras", grupo: "Fauna" },
  { id: "Playas_Caribe_grilla_raster", nombre: "Playas", grupo: "Geomorfología" },
  { id: "Playones_grilla_raster", nombre: "Playones", grupo: "Geomorfología" },
  { id: "Playones_Salinos_grilla_raster", nombre: "Playones salinos", grupo: "Geomorfología" },
  { id: "Acantilados_grilla_raster", nombre: "Acantilados", grupo: "Geomorfología" },
  { id: "Humedales_Costeros_Caribe_100K_grilla_raster", nombre: "Humedales Costeros", grupo: "Geomorfología" },
  { id: "Lagunas_Costeras_grilla_raster", nombre: "Lagunas Costeras", grupo: "Geomorfología" },
  { id: "Estuarios_grilla_raster", nombre: "Estuarios", grupo: "Geomorfología" },
  { id: "Panganales_grilla_raster", nombre: "Panganales", grupo: "Geomorfología" },
  { id: "playonesfluviomarinos_playonesfluviomarinos_grilla_raster", nombre: "Playones fluviomarinos", grupo: "Geomorfología" },
  { id: "ASB_Caribe_shape_grilla_raster", nombre: "Áreas significativas de biodiversidad", grupo: "Gestión" },
  { id: "runap_-_Registro_Unico_Nacional_AP_grilla_raster", nombre: "Áreas protegidas", grupo: "Gestión" },
  { id: "Sitios_Prioritarios_Conservación_Caribe_grilla_raster", nombre: "Sitios Prioritarios de Conservación", grupo: "Gestión" },
  { id: "Surgencia_grilla_raster", nombre: "Surgencia", grupo: "Gestión" }
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

function limpiarDibujos() {
  // 1. Borrar todas las capas guardadas en el FeatureGroup
  capasDibujo.clearLayers();
  
  // 2. Si se quedó un objeto a mitad de dibujo en el mapa, eliminarlo
  if (dibujandoObjeto) {
    map.removeLayer(dibujandoObjeto);
    dibujandoObjeto = null;
  }
  
  // 3. Si el tooltip de medición se quedó flotando, removerlo
  if (tooltipMedicion) {
    map.removeLayer(tooltipMedicion);
    tooltipMedicion = null;
  }
  
  // 4. Resetear arreglos de coordenadas y estados intermedios
  puntosRuta = [];
  puntosMedicion = [];
  estaDibujandoLasso = false;
  
  // 5. Apagar los listeners del mapa y restaurar la interfaz
  desactivarModosMapa();
  
  // 6. Asegurar que el mapa recupere el arrastre por si se limpió durante un trazo
  map.dragging.enable();
}

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
    // 1. Crear el título del grupo
    var tituloGrupo = document.createElement('h3');
    tituloGrupo.className = "text-[10px] font-bold text-slate-400 mt-4 mb-2 border-b border-slate-800 pb-1 tracking-wider flex items-center justify-between cursor-pointer select-none";
    tituloGrupo.innerHTML = `<span>${nomGrupo}</span> <i class="fas fa-chevron-down text-[8px] transition-transform duration-200"></i>`;
    contenedor.appendChild(tituloGrupo);

    // Al crear el subcontenedor, forzamos que inicie oculto
    var contenedorVariables = document.createElement('div');
    contenedorVariables.className = "space-y-1";
    contenedorVariables.style.display = "none"; // <-- ESTA LÍNEA asegura que inicie colapsado
    contenedor.appendChild(contenedorVariables);
    // Opcional: inicializar la flecha rotada 90 grados para simular estado cerrado
    tituloGrupo.querySelector('.fa-chevron-down').style.transform = "rotate(-90deg)";

    // 3. Configurar el evento para colapsar/expandir al hacer clic en el título
    tituloGrupo.onclick = (function(bloque, icono) {
      return function() {
        if (bloque.style.display === "none") {
          bloque.style.display = "block";
          icono.style.transform = "rotate(0deg)";
        } else {
          bloque.style.display = "none";
          icono.style.transform = "rotate(-90deg)"; // Rota la flecha indicando que está cerrado
        }
      };
    })(contenedorVariables, tituloGrupo.querySelector('.fa-chevron-down'));

    // 4. Inyectar las variables dentro de SU CONTENEDOR correspondiente (no al contenedor general)
    grupos[nomGrupo].forEach(capa => {
      var item = document.createElement('div');
      item.className = "layer-item";
      item.id = "item-" + capa.id;

      item.innerHTML = `
        <label class="flex items-center gap-2 cursor-pointer flex-1 text-[11px] font-sans font-medium text-slate-200 tracking-tight break-all">
          <input type="checkbox" id="chk-${capa.id}" class="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 shrink-0" onchange="toggleCapa('${capa.id}', '${capa.nombre}')">
          <span>${capa.nombre}</span>
        </label>
      `;
      contenedorVariables.appendChild(item); // <--- Corregido: va al bloque del grupo
    });
  }
}

function togglePanelLateral() {
  var panel = document.getElementById('panel-izquierdo');
  var icono = document.getElementById('icono-flecha-panel');
  
  if (!panel || !icono) return;

  // Alternar la clase de animación/desplazamiento
  panel.classList.toggle('panel-oculto-izq');

  // Cambiar la flecha según el estado del panel
  if (panel.classList.contains('panel-oculto-izq')) {
    icono.className = "fa-solid fa-chevron-right text-[10px]";
  } else {
    icono.className = "fa-solid fa-chevron-left text-[10px]";
  }
}



function togglePanelDerecho() {
  var panel = document.getElementById('panel-derecho');
  var icono = document.getElementById('icono-flecha-derecho');
  
  if (!panel || !icono) return;

  // Alternar la clase de desplazamiento hacia la derecha
  panel.classList.toggle('panel-oculto-der');

  // Cambiar la dirección de la flecha según el estado del panel
  if (panel.classList.contains('panel-oculto-der')) {
    icono.className = "fa-solid fa-chevron-left text-[10px]";
  } else {
    icono.className = "fa-solid fa-chevron-right text-[10px]";
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
    // CORRECCIÓN CLAVE: El BBOX ordenado exactamente con los límites de tu GeoServer (MinX, MinY, MáxX, MáxY)
    // El Width y Height mantienen una proporción similar a la extensión geográfica para evitar distorsiones del píxel.
    var bboxExacto = "-77.45093,7.88595,-70.95308,13.50104";
    
    var urlDescargaRaster = `${wmsBaseUrl}?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&LAYERS=coast_wind_data:${idCapa}&FORMAT=image/geotiff&SRS=EPSG:4326&BBOX=${bboxExacto}&WIDTH=1500&HEIGHT=1300`;
    var urlDescargaKML = `${wmsBaseUrl}?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&LAYERS=coast_wind_data:${idCapa}&FORMAT=application/vnd.google-earth.kml+xml&SRS=EPSG:4326&BBOX=${bboxExacto}&WIDTH=1024&HEIGHT=1024`;

    var itemDescarga = document.createElement('div');
    itemDescarga.className = "bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-sans text-[10px] flex flex-col gap-1.5";
    
    itemDescarga.innerHTML = `
      <div class="text-slate-700 font-semibold tracking-tight break-all border-b border-slate-100 pb-1">${idCapa}</div>
      <div class="grid grid-cols-2 gap-1.5">
        <a href="${urlDescargaRaster}" download="${idCapa}.tif" target="_blank" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-center py-1 rounded border border-emerald-200 font-sans font-semibold text-[10px] tracking-tight no-underline transition-colors flex items-center justify-center gap-1">
          <i class="fa-solid fa-file-raster text-[9px]"></i> GeoTIFF
        </a>
        <a href="${urlDescargaKML}" download="${idCapa}.kml" target="_blank" class="bg-amber-50 hover:bg-amber-100 text-amber-700 text-center py-1 rounded border border-amber-200 font-sans font-semibold text-[10px] tracking-tight no-underline transition-colors flex items-center justify-center gap-1">
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

function updateDateTime() {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    timeZone: 'America/Bogota' 
  };
  const now = new Date();
  const element = document.getElementById('topbar-datetime');
  if (element) {
    element.textContent = new Intl.DateTimeFormat('es-CO', options).format(now);
  }
}

// 2. Control de Apertura / Cierre del Sidebar de Documentación
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const icon = document.getElementById('toggle-icon');
  const title = document.getElementById('sidebar-title');
  const texts = document.querySelectorAll('.link-text');

  if (!sidebar) return;

  sidebar.classList.toggle('md:w-64');
  sidebar.classList.toggle('md:w-[76px]');
  if (icon) icon.classList.toggle('rotate-180');
  if (title) {
    title.classList.toggle('opacity-0');
    title.classList.toggle('-translate-x-4');
  }

  texts.forEach(t => {
    t.classList.toggle('opacity-0');
    t.classList.toggle('translate-x-2');
    setTimeout(() => t.classList.toggle('hidden'), 150);
  });
}

// 3. Sistema Conmutador del Tema (Dark / Light) con Persistencia
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  
  if (!body) return;

  body.classList.toggle('light-theme');

  if (body.classList.contains('light-theme')) {
    if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-500';
    localStorage.setItem('theme', 'light');
  } else {
    if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
    localStorage.setItem('theme', 'dark');
  }
}

// Función Controladora de traducción estable por cookies (Google Translate)
function changeLanguage(lang) {
  // Setea la cookie en el dominio actual y subdominios
  document.cookie = "googtrans=/es/" + lang + "; path=/; domain=" + window.location.hostname;
  document.cookie = "googtrans=/es/" + lang + "; path=/;";
  
  // Recarga para procesar la traducción limpia desde el inicio
  location.reload();
}

// 4. Inicializador de procesos unificado al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar reloj
  setInterval(updateDateTime, 1000);
  updateDateTime();

  // Escuchador para el botón de cambio de tema
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Aplicar tema guardado previamente en el navegador
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-500';
  }

// Sincronizar y escuchar cambios en el Selector de Idioma
  const langSelector = document.getElementById('lang-selector');
  if (langSelector) {
    // Comprobar si existe la cookie de Google activa para inicializar el select en el valor correcto
    const match = document.cookie.match(/(^| )googtrans=([^;]+)/);
    if (match) {
      const currentLang = match[2].split('/').pop();
      
      // Lista de todos los idiomas que agregamos para Cloudflare
      const validLangs = ['es', 'en', 'de', 'fr', 'it', 'ja', 'ko', 'pt', 'ru', 'zh-CN'];
      
      // Si el idioma de la cookie está en nuestra lista, lo sincroniza en el selector visual
      if (validLangs.includes(currentLang)) {
        langSelector.value = currentLang;
      }
    }

    // Escuchar la acción de cambio del usuario
    langSelector.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }
});