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

var wmsBaseUrl = "http://localhost:8085/geoserver/coast_wind_data/wms";
var capasWMSActivas = {};

var capasProyecto = [
  // Sintesis
  { id: "grilla_joint_EPSG4326_conv", nombre: "Cuadricula y grilla", grupo: "Cuadricula" },
  { id: "Environmental_Sensitivity_Index", nombre: "Environmental Sensitivity Index (ESI)", grupo: "Sintesis" },
  { id: "Poligono_ronda_eolica", nombre: "Polígono Ronda Eólica", grupo: "Sintesis" },
  
  // Ecosistemas
  { id: "Manglares", nombre: "Manglares", grupo: "Ecosistemas" },
  { id: "Presencia_de_pastos_marinos", nombre: "Presencia de pastos marinos", grupo: "Ecosistemas" },
  { id: "Areas_Coralinas", nombre: "Áreas coralinas", grupo: "Ecosistemas" },
  { id: "Fondo_algas_carnosas", nombre: "Fondo algas carnosas", grupo: "Ecosistemas" },
  { id: "Fondos_duros_algas_calcareas", nombre: "Fondos duros algas calcáreas", grupo: "Ecosistemas" },
  { id: "Ostras_perliferas", nombre: "Ostras perlíferas", grupo: "Ecosistemas" },

  // Fauna
  { id: "Zonas_de_alimentacion_de_tortugas", nombre: "Zonas de alimentación de tortugas", grupo: "Fauna" },
  { id: "Playas_de_anidacion_de_tortugas", nombre: "Playas de anidación de tortugas", grupo: "Fauna" },
  { id: "Desove_de_nodriza_strombusg", nombre: "Desove de nodriza strombusg", grupo: "Fauna" },
  { id: "Congregacion_de_peces", nombre: "Congregación de peces", grupo: "Fauna" },
  { id: "Presencia_de_mamiferos_marinos", nombre: "Presencia de mamíferos marinos", grupo: "Fauna" },
  { id: "Congregacion_de_aves_marinas", nombre: "Congregación de aves marinas", grupo: "Fauna" },
  { id: "Congregacion_de_aves_playeras", nombre: "Congregación de aves playeras", grupo: "Fauna" },

  // Geomorfología
  { id: "Playas", nombre: "Playas", grupo: "Geomorfología" },
  { id: "Playones", nombre: "Playones", grupo: "Geomorfología" },
  { id: "Playones_salinos", nombre: "Playones salinos", grupo: "Geomorfología" },
  { id: "Acantilados", nombre: "Acantilados", grupo: "Geomorfología" },
  { id: "Humedales_costeros", nombre: "Humedales Costeros", grupo: "Geomorfología" },
  { id: "Lagunas_costeras", nombre: "Lagunas Costeras", grupo: "Geomorfología" },
  { id: "Estuarios", nombre: "Estuarios", grupo: "Geomorfología" },
  { id: "Panganales", nombre: "Panganales", grupo: "Geomorfología" },
  { id: "Playones_fluviomarinos", nombre: "Playones fluviomarinos", grupo: "Geomorfología" },
  { id: "Volcanes_de_lodo_SGC_2023", nombre: "Volcanes de lodo", grupo: "Geomorfología" },

  // Gestión
  { id: "Areas_significativas_de_biodiversidad", nombre: "Áreas significativas de biodiversidad", grupo: "Gestión" },
  { id: "Areas_protegidas", nombre: "Áreas protegidas", grupo: "Gestión" },
  { id: "Sitios_prioritarios_de_conservacion", nombre: "Sitios Prioritarios de Conservación", grupo: "Gestión" },
  { id: "Surgencia", nombre: "Surgencia", grupo: "Gestión" }
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
  var paneles = ['panelBasemaps', 'panelDibujo', 'panel-downloads', 'panel-uploads'];
  paneles.forEach(p => { 
    var el = document.getElementById(p);
    if(el && p !== idPanel) el.classList.add('hidden'); 
  });
  var target = document.getElementById(idPanel);
  if(target) target.classList.toggle('hidden');
}

function desactivarModosMapa() {
  map.off('click');
  map.off('mousedown');
  map.off('mousemove');
  map.off('mouseup');
  map.dragging.enable();
  herramientaActiva = null;
  var statusElem = document.getElementById('statusDibujo');
  if (statusElem) statusElem.innerText = "Ninguna herramienta activa";
}




function activarHerramientaDibujo(tipo) {
  desactivarModosMapa(); 
  herramientaActiva = tipo;
  
  // Limpiar estilos de botones previos
  const botones = ['point', 'gisfile', 'lasso', 'circle', 'rectangle', 'measure'];
  botones.forEach(b => {
    var el = document.getElementById(`btn-draw-${b}`);
    if (el) el.classList.remove('bg-blue-100', 'text-blue-700', 'border-blue-200');
  });

  var btnActivo = document.getElementById(`btn-draw-${tipo}`);
  if(btnActivo) btnActivo.classList.add('bg-blue-100', 'text-blue-700', 'border-blue-200');

  var statusMap = {
    'point': 'Haga clic para situar un PUNTO',
    'gisfile': 'Archivo Vectorial Importado',
    'lasso': 'Mantenga presionado el clic y arrastre (MANO ALZADA)',
    'circle': 'Clic sostenido y arrastre para CÍRCULO',
    'rectangle': 'Clic sostenido y arrastre para RECTÁNGULO',
    'measure': 'Clics sucesivos para MEDIR. Doble clic para terminar'
  };
  var statusElem = document.getElementById('statusDibujo');
  if (statusElem) statusElem.innerText = `Modo: ${statusMap[tipo] || 'Ninguna herramienta activa'}`;

  if (tipo === 'gisfile') {
    var panelUploads = document.getElementById('panel-uploads');
    if (panelUploads && panelUploads.classList.contains('hidden')) {
      toggleWidget('panel-uploads');
    }
    if (window.capaVectorCargada) {
      var bounds = window.capaVectorCargada.getBounds();
      if (bounds.isValid()) map.fitBounds(bounds, { padding: [20, 20] });
    }
  }
  else if (tipo === 'point') {
    map.on('click', function(e) {
      var lat = e.latlng.lat;
      var lon = e.latlng.lng;

      var marcador = L.marker([lat, lon]).addTo(capasDibujo);
      marcador.bindPopup(`
        <div style="min-width: 220px; font-size: 11px;">
          <b>Punto de consulta</b><br>
          <span>Lat: ${lat.toFixed(6)} | Lon: ${lon.toFixed(6)}</span>
          <hr style="margin: 6px 0; border: 0; border-top: 1px solid #e2e8f0;">
          <span style="color: #64748b;">Consultando información en grilla...</span>
        </div>
      `).openPopup();

      consultarGrillaPorCoordenadas(lat, lon, marcador);
      desactivarModosMapa();
    });
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
      dibujandoObjeto = L.polyline(puntosRuta, {color: '#9333ea', weight: 3}).addTo(map);
    });
    map.on('mousemove', function(e) {
      if(estaDibujandoLasso && dibujandoObjeto) {
        puntosRuta.push(e.latlng);
        dibujandoObjeto.setLatLngs(puntosRuta);
      }
    });
    map.on('mouseup', function() {
      if(estaDibujandoLasso && dibujandoObjeto) {
        map.removeLayer(dibujandoObjeto);
        if(puntosRuta.length > 2) {
          var poligonoLasso = L.polygon(puntosRuta, {color: '#9333ea', fillColor: '#c084fc', fillOpacity: 0.3}).addTo(capasDibujo);
          poligonoLasso.bindPopup("<b>Área Mano Alzada</b><br><span style='color:#64748b;'>Consultando celdas...</span>").openPopup();
          
          consultarGrillaPorGeometria(poligonoLasso, poligonoLasso.getBounds(), "Consulta Mano Alzada");
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
      map.dragging.disable(); 
      var centro = e.latlng;
      dibujandoObjeto = L.circle(centro, {radius: 1, color: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.3}).addTo(map);
      
      map.on('mousemove', function(ev) { 
        if(dibujandoObjeto) dibujandoObjeto.setRadius(centro.distanceTo(ev.latlng)); 
      });
      map.on('mouseup', function() { 
        if(dibujandoObjeto) {
          var circuloFinal = dibujandoObjeto;
          circuloFinal.addTo(capasDibujo);
          circuloFinal.bindPopup("<b>Área Circular</b><br><span style='color:#64748b;'>Consultando celdas...</span>").openPopup();
          
          consultarGrillaPorGeometria(circuloFinal, circuloFinal.getBounds(), "Consulta Circular");
          dibujandoObjeto = null; 
          desactivarModosMapa(); 
        }
      });
    });
  } 
  else if (tipo === 'rectangle') {
    map.on('mousedown', function(e) {
      map.dragging.disable(); 
      var p1 = e.latlng;
      dibujandoObjeto = L.rectangle([p1, p1], {color: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.3}).addTo(map);
      
      map.on('mousemove', function(ev) { 
        if(dibujandoObjeto) dibujandoObjeto.setBounds([p1, ev.latlng]); 
      });
      map.on('mouseup', function() { 
        if(dibujandoObjeto) {
          var rectanguloFinal = dibujandoObjeto;
          rectanguloFinal.addTo(capasDibujo);
          rectanguloFinal.bindPopup("<b>Área Rectangular</b><br><span style='color:#64748b;'>Consultando celdas...</span>").openPopup();
          
          consultarGrillaPorGeometria(rectanguloFinal, rectanguloFinal.getBounds(), "Consulta Rectangular");
          dibujandoObjeto = null; 
          desactivarModosMapa(); 
        }
      });
    });
  } 
  else if (tipo === 'measure') {
    puntosRuta = [];
    dibujandoObjeto = L.polyline([], {color: '#ef4444', weight: 4, dashArray: '6, 6'}).addTo(map);
    tooltipMedicion = L.tooltip({permanent: true, className: 'bg-white text-red-600 p-1 rounded font-bold text-xs border border-red-200 shadow', direction: 'top'});
    
    map.on('click', function(e) {
      puntosRuta.push(e.latlng); 
      dibujandoObjeto.setLatLngs(puntosRuta);
      var dist = calcularDistanciaRuta(puntosRuta);
      tooltipMedicion.setLatLng(e.latlng).setContent(`${dist > 1000 ? (dist/1000).toFixed(2)+' km' : dist.toFixed(0)+' m'}`).addTo(map);
    });
    map.on('mousemove', function(e) {
      if(puntosRuta.length > 0) {
        var temp = [...puntosRuta, e.latlng]; 
        dibujandoObjeto.setLatLngs(temp);
        var dist = calcularDistanciaRuta(temp);
        tooltipMedicion.setLatLng(e.latlng).setContent(`Midiendo: ${dist > 1000 ? (dist/1000).toFixed(2)+' km' : dist.toFixed(0)+' m'}`);
      }
    });
    map.on('dblclick', function() {
      var distFinal = calcularDistanciaRuta(puntosRuta);
      L.polyline(puntosRuta, {color: '#b91c1c', weight: 3}).bindPopup(`<b>Distancia Total:</b> ${distFinal > 1000 ? (distFinal/1000).toFixed(2)+' km' : distFinal.toFixed(1)+' m'}`).addTo(capasDibujo);
      if (tooltipMedicion) map.removeLayer(tooltipMedicion);
      desactivarModosMapa();
    });
  }
}


async function consultarGrillaPorCoordenadas(lat, lon, marcador) {
  var nombreCapa = "coast_wind_data:grilla_joint_EPSG4326_conv";
  var cqlFilter = `INTERSECTS(the_geom, POINT(${lon} ${lat}))`;
  
  var wfsUrl = `http://localhost:8085/geoserver/coast_wind_data/ows?` +
    `service=WFS&version=1.0.0&request=GetFeature&` +
    `typeName=${encodeURIComponent(nombreCapa)}&` +
    `outputFormat=application/json&` +
    `cql_filter=${encodeURIComponent(cqlFilter)}`;

  try {
    var response = await fetch(wfsUrl);
    if (!response.ok) throw new Error("Error en la respuesta del servidor GeoServer");
    
    var data = await response.json();
    
    if (data.features && data.features.length > 0) {
      var atributos = data.features[0].properties;
      var infoGeo = {
        titulo: "Punto de consulta",
        htmlInfo: `Lat: ${lat.toFixed(6)} | Lon: ${lon.toFixed(6)}`,
        exportTexto: `POINT(${lon.toFixed(6)} ${lat.toFixed(6)})`
      };
      await procesarAtributosCelda(atributos, null, marcador, infoGeo);
    } else {
      marcador.getPopup().setContent(`
        <div style="min-width: 200px; font-size: 11px;">
          <b>Punto de consulta</b><br>
          <span>Lat: ${lat.toFixed(6)} | Lon: ${lon.toFixed(6)}</span>
          <hr style="margin: 6px 0; border: 0; border-top: 1px solid #e2e8f0;">
          <span style="color: #ef4444;">Sin cobertura de grilla en este punto.</span>
        </div>
      `);
    }
  } catch (error) {
    console.error("Error al consultar la grilla:", error);
    marcador.getPopup().setContent(`
      <div style="min-width: 200px; font-size: 11px;">
        <b>Punto de consulta</b><br>
        <span style="color: #ef4444;">Error al conectar con el servidor.</span>
      </div>
    `);
  }
}

async function consultarGrillaPorGeometria(capaGrafica, bounds, tituloGeometria) {
  var minLon = bounds.getWest();
  var minLat = bounds.getSouth();
  var maxLon = bounds.getEast();
  var maxLat = bounds.getNorth();

  var nombreCapa = "coast_wind_data:grilla_joint_EPSG4326_conv";
  var bboxFilter = `${minLon},${minLat},${maxLon},${maxLat},EPSG:4326`;
  
  var wfsUrl = `http://localhost:8085/geoserver/coast_wind_data/ows?` +
    `service=WFS&version=1.0.0&request=GetFeature&` +
    `typeName=${encodeURIComponent(nombreCapa)}&` +
    `outputFormat=application/json&` +
    `bbox=${encodeURIComponent(bboxFilter)}`;

  try {
    var res = await fetch(wfsUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    
    var geojson = await res.json();
    var celdas = geojson.features || [];

    if (celdas.length === 0) {
      capaGrafica.getPopup().setContent(`
        <div style="min-width: 220px; font-size: 11px;">
          <b>${tituloGeometria}</b><br>
          <span style="color: #64748b;">No se encontraron celdas de grilla en el área seleccionada.</span>
        </div>
      `);
      return;
    }

    var atributosConsolidados = {};
    celdas.forEach(feature => {
      var props = feature.properties || {};
      Object.keys(props).forEach(key => {
        if (key.toLowerCase().startsWith('data')) {
          var val = props[key];
          if (val === 1 || val === "1" || val === 1.0) {
            atributosConsolidados[key] = 1;
          } else if (!(key in atributosConsolidados)) {
            atributosConsolidados[key] = 0;
          }
        }
      });
    });

    // Construcción de la descripción geográfica para PopUp y Excel
    var verticesStr = "";
    if (typeof capaGrafica.getRadius === 'function') {
      // Círculo
      var centro = capaGrafica.getLatLng();
      var radio = capaGrafica.getRadius();
      verticesStr = `Centro: (${centro.lat.toFixed(5)}, ${centro.lng.toFixed(5)}) - Radio: ${(radio/1000).toFixed(2)} km`;
    } else if (typeof capaGrafica.getLatLngs === 'function') {
      // Rectángulo o Polígono/Mano Alzada
      var coords = capaGrafica.getLatLngs()[0] || [];
      var listaVertices = coords.map(pt => `(${pt.lat.toFixed(4)}, ${pt.lng.toFixed(4)})`);
      verticesStr = `Vértices (${coords.length}): ` + listaVertices.join(" | ");
    } else {
      verticesStr = `BBOX: [${minLat.toFixed(4)}, ${minLon.toFixed(4)}] a [${maxLat.toFixed(4)}, ${maxLon.toFixed(4)}]`;
    }

    var infoGeo = {
      titulo: tituloGeometria,
      htmlInfo: `<b>Área consultada:</b> ${celdas.length} celda(s) interceptada(s)<br><span>BBOX: SW(${minLat.toFixed(4)}, ${minLon.toFixed(4)}) - NE(${maxLat.toFixed(4)}, ${maxLon.toFixed(4)})</span>`,
      exportTexto: verticesStr
    };

    await procesarAtributosCelda(atributosConsolidados, null, capaGrafica, infoGeo);

  } catch (err) {
    console.error("Error al consultar la grilla por geometría:", err);
    capaGrafica.getPopup().setContent(`
      <div style="min-width: 220px; font-size: 11px; color: #dc2626;">
        <b>${tituloGeometria}</b><br>
        Error al conectar con el servidor.
      </div>
    `);
  }
}


// Declaración global necesaria
var diccionarioCache = null;

async function cargarDiccionarioAlertas() {
  if (diccionarioCache && diccionarioCache.length > 0) return diccionarioCache;

  try {
    var urlGitHub = 'https://raw.githubusercontent.com/sei-latam/COAST-Wind-Geoportal/main/json_query.json';
    var response = await fetch(urlGitHub);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    diccionarioCache = await response.json();
    return diccionarioCache;
  } catch (error) {
    console.error("Error al cargar el diccionario remoto de GitHub:", error);
    return [];
  }
}


// Variable global para almacenar temporalmente las alertas consultadas
window.datosExportarActuales = null;

window.descargarExcelAlertas = function() {
  if (!window.datosExportarActuales || !window.datosExportarActuales.alertas || window.datosExportarActuales.alertas.length === 0) {
    alert("No hay alertas activas en esta consulta para exportar.");
    return;
  }

  var tipoConsulta = window.datosExportarActuales.tipoConsulta || "Consulta";
  var detalleGeometria = window.datosExportarActuales.detalleGeometria || "N/A";
  var alertas = window.datosExportarActuales.alertas;

  var csvContent = "\uFEFF"; 
  csvContent += "Tipo Consulta;Geometría / Vértices;ID Variable;Nombre Alerta;Descripción;Fuente;Metadato\n";

  alertas.forEach(function(item) {
    var id = item.id_geotiff || item.dataKey || "";
    var nombre = (item.nom_alerta || item.dataKey || "").replace(/"/g, '""');
    var desc = (item.descri_alerta || "Sin descripción disponible.").replace(/"/g, '""');
    var fuente = (item.entidad_fuente || "No especificada").replace(/"/g, '""');
    var meta = (item.metadatos_capa_original || item.metadatos_xml || "N/A").replace(/"/g, '""');

    csvContent += `"${tipoConsulta}";"${detalleGeometria}";"${id}";"${nombre}";"${desc}";"${fuente}";"${meta}"\n`;
  });

  var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = url;
  link.download = `Reporte_${tipoConsulta.replace(/ /g, '_')}_${Date.now()}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

async function procesarAtributosCelda(atributos, mapaOElementos, marcador, infoGeometria = {}) {
  var alertasDetectadas = [];

  Object.keys(atributos).forEach(clave => {
    var valor = atributos[clave];
    if (clave.toLowerCase().startsWith('data') && (valor === 1 || valor === "1" || valor === 1.0)) {
      alertasDetectadas.push(clave.trim());
    }
  });

  var diccionario = await cargarDiccionarioAlertas();
  var htmlVariables = "";
  var listaExportar = [];

  if (alertasDetectadas.length > 0) {
    htmlVariables = `<div style="max-height: 240px; overflow-y: auto; margin-top: 6px; padding-right: 4px;">`;

    alertasDetectadas.forEach(dataKey => {
      var keyNormalizada = dataKey.replace(/\s+/g, '').toLowerCase();

      var infoAlerta = diccionario.find(item => {
        if (!item || !item.id_geotiff) return false;
        return item.id_geotiff.toString().replace(/\s+/g, '').toLowerCase() === keyNormalizada;
      });

      if (infoAlerta) {
        listaExportar.push({ ...infoAlerta, dataKey: dataKey });

        var fuente = (infoAlerta.entidad_fuente && infoAlerta.entidad_fuente.toString().trim() !== "") 
          ? infoAlerta.entidad_fuente.toString().trim() 
          : "No especificada";

        var rawMetadato = (infoAlerta.metadatos_capa_original && infoAlerta.metadatos_capa_original.toString().trim() !== "")
          ? infoAlerta.metadatos_capa_original.toString().trim()
          : (infoAlerta.metadatos_xml ? infoAlerta.metadatos_xml.toString().trim() : "");

        var botonMetadatoHTML = "";
        if (rawMetadato && rawMetadato.toUpperCase() !== "N/A" && rawMetadato !== "") {
          var urlMetadato = (rawMetadato.startsWith("http://") || rawMetadato.startsWith("https://")) 
            ? rawMetadato 
            : "https://" + rawMetadato;

          botonMetadatoHTML = `
            <div style="margin-top: 6px;">
              <a href="${urlMetadato}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 4px 8px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 10px; font-weight: bold; line-height: 1.2;">
                📄 Ver Metadato
              </a>
            </div>
          `;
        }

        htmlVariables += `
          <div style="margin-bottom: 8px; padding: 8px; background-color: #f8fafc; border-left: 3px solid #2563eb; border-radius: 4px; border: 1px solid #e2e8f0;">
            <div style="font-weight: bold; color: #1e3a8a; font-size: 11px;">
              ${infoAlerta.nom_alerta || dataKey} <span style="color: #64748b; font-weight: normal;">(${dataKey})</span>
            </div>
            <div style="font-size: 10px; color: #334155; margin-top: 3px; line-height: 1.3;">
              ${infoAlerta.descri_alerta || "Sin descripción disponible."}
            </div>
            <div style="font-size: 10px; color: #475569; margin-top: 5px; border-top: 1px dashed #cbd5e1; padding-top: 4px;">
              <b>Fuente:</b> ${fuente}
            </div>
            ${botonMetadatoHTML}
          </div>
        `;
      } else {
        listaExportar.push({ dataKey: dataKey, nom_alerta: dataKey, descri_alerta: "Sin descripción registrada", entidad_fuente: "N/A" });
        htmlVariables += `
          <div style="margin-bottom: 6px; padding: 6px; background-color: #f8fafc; border-left: 3px solid #94a3b8; border-radius: 3px;">
            <div style="font-weight: bold; color: #2563eb; font-size: 11px;">
              ${dataKey}
            </div>
            <div style="font-size: 10px; color: #64748b; margin-top: 2px;">
              Sin descripción registrada en el JSON.
            </div>
          </div>
        `;
      }
    });

    htmlVariables += `</div>`;
  } else {
    htmlVariables = `<p style="color: #64748b; margin: 6px 0; font-size: 11px;">No hay variables/alertas activas en esta área.</p>`;
  }

  // Guardar estructura de exportación
  window.datosExportarActuales = {
    tipoConsulta: infoGeometria.titulo || "Consulta",
    detalleGeometria: infoGeometria.exportTexto || "Coordenadas N/A",
    alertas: listaExportar
  };

  var botonExportarHTML = "";
  if (alertasDetectadas.length > 0) {
    botonExportarHTML = `
      <div style="margin-top: 10px; border-top: 1px solid #e2e8f0; padding-top: 8px; text-align: center;">
        <button onclick="window.descargarExcelAlertas()" style="width: 100%; padding: 6px 10px; background-color: #16a34a; color: #ffffff; border: none; border-radius: 4px; font-size: 11px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;">
          Exportar Consulta (${infoGeometria.titulo || 'Área'})
        </button>
      </div>
    `;
  }

  var contenidoPopup = `
    <div style="min-width: 270px; max-width: 330px; font-size: 11px; color: #1e293b;">
      <b>${infoGeometria.titulo || 'Consulta'}</b><br>
      <span style="color: #475569; font-size: 10px;">${infoGeometria.htmlInfo || ''}</span>
      <hr style="margin: 6px 0; border: 0; border-top: 1px solid #e2e8f0;">
      <b>Alertas e información detectada (${alertasDetectadas.length}):</b>
      ${htmlVariables}
      ${botonExportarHTML}
    </div>
  `;

  marcador.getPopup().setContent(contenidoPopup);
}



function calcularDistanciaRuta(puntos) { 
  var dist = 0; 
  for (var i = 0; i < puntos.length - 1; i++) { 
    dist += puntos[i].distanceTo(puntos[i+1]); 
  } 
  return dist; 
}

function limpiarDibujos() {
  capasDibujo.clearLayers();
  
  if (dibujandoObjeto) {
    map.removeLayer(dibujandoObjeto);
    dibujandoObjeto = null;
  }
  
  if (tooltipMedicion) {
    map.removeLayer(tooltipMedicion);
    tooltipMedicion = null;
  }
  
  puntosRuta = [];
  puntosMedicion = [];
  estaDibujandoLasso = false;
  
  desactivarModosMapa();
  map.dragging.enable();
}

var debounceTimer;
function buscarSugerencias() {
  clearTimeout(debounceTimer); 
  var input = document.getElementById('searchInput');
  if(!input) return;
  var query = input.value.trim();
  var contenedorListado = document.getElementById('searchSuggestions');
  if(!contenedorListado) return;

  if (query.length < 3) { 
    contenedorListado.innerHTML = ""; 
    contenedorListado.classList.add('hidden'); 
    return; 
  }
  
  debounceTimer = setTimeout(async () => {
    try {
      var response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${encodeURIComponent(query)}`);
      var data = await response.json(); 
      contenedorListado.innerHTML = "";
      if (data && data.length > 0) {
        contenedorListado.classList.remove('hidden');
        data.forEach(lugar => {
          var item = document.createElement('div'); 
          item.className = "suggestion-item text-slate-700 font-medium border-b border-slate-100"; 
          item.innerText = lugar.display_name;
          item.onclick = function() {
            input.value = lugar.display_name;
            map.setView([parseFloat(lugar.lat), parseFloat(lugar.lon)], 14);
            contenedorListado.innerHTML = ""; 
            contenedorListado.classList.add('hidden');
          };
          contenedorListado.appendChild(item);
        });
      }
    } catch (e) { console.error(e); }
  }, 400);
}

async function ejecutarBusquedaDirecta() {
  var input = document.getElementById('searchInput');
  if(!input) return;
  var query = input.value.trim(); 
  if (!query) return;

  try {
    var response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`);
    var data = await response.json();
    if (data && data.length > 0) { 
      map.setView([parseFloat(data[0].lat), parseFloat(data[0].lon)], 14); 
    }
  } catch (e) { console.error(e); }
}

function volverAlHome() { map.setView([11.08, -74.05], 7); }

function inicializarMenu() {
  var contenedor = document.getElementById('contenedor-capas');
  if (!contenedor) return;
  var grupos = {};

  capasProyecto.forEach(capa => {
    if (!grupos[capa.grupo]) grupos[capa.grupo] = [];
    grupos[capa.grupo].push(capa);
  });

  for (var nomGrupo in grupos) {
    var tituloGrupo = document.createElement('h3');
    tituloGrupo.className = "text-[10px] font-bold text-slate-400 mt-4 mb-2 border-b border-slate-800 pb-1 tracking-wider flex items-center justify-between cursor-pointer select-none";
    tituloGrupo.innerHTML = `<span>${nomGrupo}</span> <i class="fas fa-chevron-down text-[8px] transition-transform duration-200"></i>`;
    contenedor.appendChild(tituloGrupo);

    var contenedorVariables = document.createElement('div');
    contenedorVariables.className = "space-y-1";
    contenedorVariables.style.display = "none";
    contenedor.appendChild(contenedorVariables);
    
    var iconoChevron = tituloGrupo.querySelector('.fa-chevron-down');
    if(iconoChevron) iconoChevron.style.transform = "rotate(-90deg)";

    tituloGrupo.onclick = (function(bloque, icono) {
      return function() {
        if (bloque.style.display === "none") {
          bloque.style.display = "block";
          if(icono) icono.style.transform = "rotate(0deg)";
        } else {
          bloque.style.display = "none";
          if(icono) icono.style.transform = "rotate(-90deg)";
        }
      };
    })(contenedorVariables, iconoChevron);

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
      contenedorVariables.appendChild(item);
    });
  }
}

function togglePanelLateral() {
  var panel = document.getElementById('panel-izquierdo');
  var icono = document.getElementById('icono-flecha-panel');
  if (!panel || !icono) return;

  panel.classList.toggle('panel-oculto-izq');
  icono.className = panel.classList.contains('panel-oculto-izq') ? "fa-solid fa-chevron-right text-[10px]" : "fa-solid fa-chevron-left text-[10px]";
}

function togglePanelDerecho() {
  var panel = document.getElementById('panel-derecho');
  var icono = document.getElementById('icono-flecha-derecho');
  if (!panel || !icono) return;

  panel.classList.toggle('panel-oculto-der');
  icono.className = panel.classList.contains('panel-oculto-der') ? "fa-solid fa-chevron-left text-[10px]" : "fa-solid fa-chevron-right text-[10px]";
}

function toggleCapa(layerName, tituloAmigable) {
  var checkBox = document.getElementById("chk-" + layerName);
  var containerItem = document.getElementById("item-" + layerName);
  if(!checkBox) return;

  if (checkBox.checked) {
    if(containerItem) containerItem.classList.add('active');
    capasWMSActivas[layerName] = L.tileLayer.wms(wmsBaseUrl, {
      layers: 'coast_wind_data:' + layerName,
      format: 'image/png',
      transparent: true,
      version: '1.1.0',
      srs: 'EPSG:4326',
      styles: ''
    }).addTo(map);
  } else {
    if(containerItem) containerItem.classList.remove('active');
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
    panelTexto.innerHTML = '<div class="space-y-1.5 max-h-[220px] overflow-y-auto pr-1"></div>';
    var listaContenedor = panelTexto.querySelector('div');

    activas.forEach(idCapa => {
      // Petición WMS GetLegendGraphic optimizada:
      // - LEGEND_OPTIONS fuerza el tamaño del swatch, elimina títulos de regla y remueve paddings/márgenes internos.
      var urlSwatch = `${wmsBaseUrl}?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&LAYER=coast_wind_data:${idCapa}&TRANSPARENT=true&LEGEND_OPTIONS=width:16;height:16;fontColor:0x000000;fontSize:1;forceRule:true;hideEmptyRules:true;layout:vertical`;

      // Buscar el nombre amigable
      var objetoCapa = capasProyecto.find(c => c.id === idCapa);
      var nombreMostrar = objetoCapa ? objetoCapa.nombre : idCapa.replace(/_/g, ' ');

      var bloqueCapa = document.createElement('div');
      bloqueCapa.className = "flex items-center gap-2.5 py-1 px-2 rounded hover:bg-slate-800/50 transition-colors";
      bloqueCapa.innerHTML = `
        <div class="w-4 h-4 rounded-sm shrink-0 overflow-hidden border border-slate-700/60 bg-slate-900/80 flex items-center justify-center">
          <img src="${urlSwatch}" 
               alt="Símbolo" 
               class="w-full h-full object-cover scale-125" 
               onerror="this.style.display='none'">
        </div>
        <span class="text-[11px] font-medium text-slate-200 tracking-tight leading-snug select-none">
          ${nombreMostrar}
        </span>
      `;
      listaContenedor.appendChild(bloqueCapa);
    });
  }

  panelDescargas.innerHTML = '<div class="space-y-3 max-h-[300px] overflow-y-auto pr-1"></div>';
  var contenedorDescargasItem = panelDescargas.querySelector('div');

  activas.forEach(idCapa => {
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

function changeLanguage(lang) {
  document.cookie = "googtrans=/es/" + lang + "; path=/; domain=" + window.location.hostname;
  document.cookie = "googtrans=/es/" + lang + "; path=/;";
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(updateDateTime, 1000);
  updateDateTime();

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-500';
  }

  const langSelector = document.getElementById('lang-selector');
  if (langSelector) {
    const match = document.cookie.match(/(^| )googtrans=([^;]+)/);
    if (match) {
      const currentLang = match[2].split('/').pop();
      const validLangs = ['es', 'en', 'de', 'fr', 'it', 'ja', 'ko', 'pt', 'ru', 'zh-CN'];
      if (validLangs.includes(currentLang)) {
        langSelector.value = currentLang;
      }
    }

    langSelector.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }

  const modal = document.getElementById("welcome-modal");
  const btnAccept = document.getElementById("btn-accept");
  const btnReject = document.getElementById("btn-reject");

  if (btnAccept && modal) {
    btnAccept.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
  }

  if (btnReject) {
    btnReject.addEventListener("click", function () {
      alert("Para utilizar el Geovisor Coast-Wind es necesario aceptar los términos y condiciones.");
      window.location.href = "https://www.sei.org/";
    });
  }
});

// Listener de carga de archivos y eventos de la interfaz
document.addEventListener('DOMContentLoaded', function() {
  var inputFile = document.getElementById('input-vector-file');
  var dropzone = document.getElementById('dropzone-vector');
  var btnLimpiar = document.getElementById('btn-limpiar-vector');

  if (inputFile) {
    inputFile.addEventListener('change', function(e) {
      if (e.target.files.length > 0) {
        procesarArchivoVector(e.target.files[0]);
      }
    });
  }

  if (dropzone) {
    dropzone.addEventListener('dragover', function(e) {
      e.preventDefault();
      dropzone.classList.add('border-blue-500', 'bg-slate-900/90');
    });

    dropzone.addEventListener('dragleave', function(e) {
      e.preventDefault();
      dropzone.classList.remove('border-blue-500', 'bg-slate-900/90');
    });

    dropzone.addEventListener('drop', function(e) {
      e.preventDefault();
      dropzone.classList.remove('border-blue-500', 'bg-slate-900/90');
      if (e.dataTransfer.files.length > 0) {
        procesarArchivoVector(e.dataTransfer.files[0]);
      }
    });
  }

  if (btnLimpiar) {
    btnLimpiar.addEventListener('click', limpiarVectorCargado);
  }
});

// Procesamiento, conversión y consulta de la geometría subida
async function procesarArchivoVector(file) {
  var statusElem = document.getElementById('status-carga-vector');
  var infoBox = document.getElementById('info-archivo-cargado');
  var nombreElem = document.getElementById('nombre-archivo-cargado');

  try {
    if (infoBox) infoBox.classList.remove('hidden');
    if (nombreElem) nombreElem.innerText = file.name;
    if (statusElem) {
      statusElem.className = "text-[9px] text-blue-400 mt-1 flex items-center gap-1";
      statusElem.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Convirtiendo geometría...`;
    }

    var geojson = null;
    var ext = file.name.split('.').pop().toLowerCase();

    if (ext === 'zip') {
      var buffer = await file.arrayBuffer();
      geojson = await shp(buffer);
    } else if (ext === 'geojson' || ext === 'json') {
      var textJson = await file.text();
      var parsedJson = JSON.parse(textJson);
      if (parsedJson.type === 'Topology') {
        var primeraClave = Object.keys(parsedJson.objects)[0];
        geojson = topojson.feature(parsedJson, parsedJson.objects[primeraClave]);
      } else {
        geojson = parsedJson;
      }
    } else if (ext === 'kml') {
      var textKml = await file.text();
      var domKml = new DOMParser().parseFromString(textKml, 'text/xml');
      geojson = toGeoJSON.kml(domKml);
    } else if (ext === 'topojson') {
      var textTopo = await file.text();
      var parsedTopo = JSON.parse(textTopo);
      var keyTopo = Object.keys(parsedTopo.objects)[0];
      geojson = topojson.feature(parsedTopo, parsedTopo.objects[keyTopo]);
    } else {
      throw new Error("Formato no soportado. Sube .zip, .geojson, .kml o .topojson");
    }

    if (!geojson) throw new Error("No se extrajo una geometría válida.");

    if (typeof limpiarDibujos === 'function') limpiarDibujos();

    var capaVector = L.geoJSON(geojson, {
      style: {
        color: "#2563eb",
        weight: 2,
        opacity: 0.9,
        fillColor: "#3b82f6",
        fillOpacity: 0.25
      }
    }).addTo(capasDibujo);

    window.capaVectorCargada = capaVector;
    var bounds = capaVector.getBounds();

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [20, 20] });

      capaVector.bindPopup(`
        <div style="min-width: 180px; font-size: 11px;">
          <b>Consulta Vectorial</b><br>
          <span style="color: #2563eb;"><i class="fa-solid fa-spinner fa-spin"></i> Evaluando celdas e intersecciones...</span>
        </div>
      `).openPopup();

      activarHerramientaDibujo('gisfile');
      await consultarGrillaPorGeometria(capaVector, bounds, `Consulta Vector (${file.name})`);

      if (statusElem) {
        statusElem.className = "text-[9px] text-emerald-400 mt-1 flex items-center gap-1";
        statusElem.innerHTML = `<i class="fa-solid fa-circle-check"></i> Geometría renderizada y consultada`;
      }
    } else {
      throw new Error("Geometría sin coordenadas válidas.");
    }

  } catch (err) {
    console.error("Error procesando archivo vectorial:", err);
    if (statusElem) {
      statusElem.className = "text-[9px] text-red-400 mt-1 flex items-center gap-1";
      statusElem.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${err.message || 'Error de lectura'}`;
    }
  }
}

function limpiarVectorCargado() {
  if (window.capaVectorCargada) {
    capasDibujo.removeLayer(window.capaVectorCargada);
    window.capaVectorCargada = null;
  }
  var infoBox = document.getElementById('info-archivo-cargado');
  if (infoBox) infoBox.classList.add('hidden');

  var inputFile = document.getElementById('input-vector-file');
  if (inputFile) inputFile.value = '';

  if (typeof limpiarDibujos === 'function') limpiarDibujos();
}