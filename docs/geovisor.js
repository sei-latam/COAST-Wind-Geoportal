/* Geovisor COAST-Wind — SEI-LA */
// ==========================================================================
// IDIOMAS (ES / EN / PT)
// Para agregar o corregir un texto, edite este diccionario.
// Las claves que falten en un idioma usan el texto en español.
// ==========================================================================
var IDIOMAS_DISPONIBLES = ['es', 'en', 'pt'];

var TEXTOS = {
  es: {
    'header.timezone': 'Colombia UTC-5',
    'header.home': 'Inicio',
    'header.admin': 'Administración',
    'header.language': 'Idioma',
    'header.toLight': 'Cambiar a tema claro',
    'header.toDark': 'Cambiar a tema oscuro',
    'search.placeholder': 'Buscar dirección o lugar...',
    'search.placeholderShort': 'Buscar lugar...',
    'search.button': 'Buscar',
    'panel.title': 'Panel de Control',
    'panel.collapse': 'Contraer panel',
    'panel.expand': 'Expandir panel',
    'panel.active0': '',
    'panel.active1': '1 activa',
    'panel.activeN': '{n} activas',
    'panel.activateAll': 'Activar capas',
    'panel.deactivateAll': 'Desactivar capas',
    'panel.loading': 'Cargando capas...',
    'panel.opacity': 'Opacidad del mapa base',
    'panel.layers': 'Capas y Variables',
    'panel.legend': 'Simbología',
    'panel.noLayers': 'No hay capas activas en el mapa.',
    'legend.symbol': 'Símbolo',
    'tools.basemaps': 'Mapas base',
    'tools.analysis': 'Herramientas de análisis',
    'tools.import': 'Importar capa',
    'tools.close': 'Cerrar',
    'draw.none': 'Ninguna herramienta activa',
    'draw.mode': 'Modo: {texto}',
    'draw.point': 'Punto',
    'draw.file': 'Archivo',
    'draw.lasso': 'Mano alzada',
    'draw.circle': 'Círculo',
    'draw.rectangle': 'Rectángulo',
    'draw.measure': 'Medir',
    'draw.status.point': 'haga clic en el mapa para situar un punto.',
    'draw.status.gisfile': 'archivo vectorial importado.',
    'draw.status.lasso': 'mantenga presionado y arrastre para dibujar a mano alzada.',
    'draw.status.circle': 'mantenga presionado y arrastre para dibujar un círculo.',
    'draw.status.rectangle': 'mantenga presionado y arrastre para dibujar un rectángulo.',
    'draw.status.measure': 'haga clic en puntos sucesivos para medir; doble clic para terminar.',
    'draw.touchNote': 'En pantallas táctiles use Punto o Archivo; las demás herramientas requieren mouse.',
    'draw.clear': 'Limpiar gráficos',
    'upload.title': 'Importar archivo GIS',
    'upload.formats': 'Soporta <b>.zip</b> (Shapefile), <b>.geojson</b>, <b>.kml</b> o <b>.topojson</b>.',
    'upload.drag': 'Arrastra tu archivo aquí',
    'upload.or': 'o',
    'upload.button': 'Subir archivo',
    'upload.remove': 'Quitar capa',
    'upload.converting': 'Convirtiendo geometría...',
    'upload.done': 'Geometría cargada y consultada',
    'upload.evaluating': 'Evaluando celdas e intersecciones...',
    'upload.queryTitle': 'Consulta vectorial',
    'upload.fileQuery': 'Consulta de archivo ({nombre})',
    'upload.errUnsupported': 'Formato no soportado. Suba .zip, .geojson, .kml o .topojson.',
    'upload.errNoGeom': 'No se encontró una geometría válida.',
    'upload.errNoCoords': 'La geometría no tiene coordenadas válidas.',
    'upload.errRead': 'Error de lectura',
    'map.zoomIn': 'Acercar',
    'map.zoomOut': 'Alejar',
    'map.home': 'Vista inicial',
    'map.locate': 'Mi ubicación',
    'map.youAreHere': 'Usted está aquí',
    'map.noGeo': 'Su navegador no permite la geolocalización.',
    'map.geoError': 'No se pudo obtener su ubicación: ',
    'query.pointTitle': 'Punto de consulta',
    'query.loadingGrid': 'Consultando información en la grilla...',
    'query.loadingCells': 'Consultando celdas...',
    'query.noCoverage': 'Sin cobertura de grilla en este punto.',
    'query.serverError': 'Error al conectar con el servidor.',
    'query.lassoArea': 'Área a mano alzada',
    'query.circleArea': 'Área circular',
    'query.rectArea': 'Área rectangular',
    'query.lassoTitle': 'Consulta a mano alzada',
    'query.circleTitle': 'Consulta circular',
    'query.rectTitle': 'Consulta rectangular',
    'query.noCells': 'No se encontraron celdas de la grilla en el área seleccionada.',
    'query.areaInfo': '<b>Área consultada:</b> {n} celda(s) interceptada(s)',
    'query.center': 'Centro',
    'query.radius': 'Radio',
    'query.vertices': 'Vértices',
    'query.alertsFound': 'Alertas e información detectada ({n}):',
    'query.noAlerts': 'No hay variables o alertas activas en esta área.',
    'query.source': 'Fuente',
    'query.notSpecified': 'No especificada',
    'query.viewMetadata': 'Ver metadato',
    'query.noDescription': 'Sin descripción disponible.',
    'query.noDescriptionJson': 'Sin descripción registrada.',
    'query.export': 'Exportar consulta',
    'query.nothingToExport': 'No hay alertas en esta consulta para exportar.',
    'query.defaultTitle': 'Consulta',
    'csv.header': 'Tipo de consulta;Geometría / Vértices;ID variable;Nombre de la alerta;Descripción;Fuente;Metadato',
    'csv.prefix': 'Reporte',
    'measure.measuring': 'Midiendo: {d}',
    'measure.total': 'Distancia total',
    'footer.about': 'Acerca de SEI-LA',
    'footer.more': 'Informaciones adicionales',
    'footer.rights': '© 2026 Todos los derechos reservados.',
    'modal.subtitle': 'Términos y condiciones de uso',
    'modal.heading': 'Por favor, lea atentamente los siguientes términos y condiciones',
    'modal.p1': '<strong>COAST-Wind</strong> es una plataforma viva, colaborativa y en constante desarrollo que integra datos de ecosistemas, fauna, geomorfología, gestión y planificación marina en Colombia. Esta plataforma fue desarrollada por el <strong>Instituto de Ambiente de Estocolmo, Centro para Latinoamérica (SEI-LA)</strong>, institución responsable de administrar, gestionar y operar el funcionamiento de COAST-Wind. Es una herramienta 100% abierta y gratuita que permite a los usuarios realizar consultas y análisis en el geovisor geográfico.',
    'modal.p2': 'Invitamos a las instituciones y usuarios que deseen contribuir con datos útiles para el propósito de esta plataforma a contactar al equipo de COAST-Wind a través de los siguientes canales oficiales:',
    'modal.form': 'Formulario',
    'modal.n1': '<strong>SEI-LA</strong>, en calidad de institución responsable, se reserva el derecho de cambiar y suspender de forma temporal o total el acceso y uso del Geovisor COAST-Wind, así como de modificar los términos y condiciones de uso, con o sin previo aviso y en cualquier momento, sin asumir ninguna responsabilidad sobre los inconvenientes que esto pueda causar.',
    'modal.n2': '<strong>SEI-LA</strong> no se hace responsable de los resultados, decisiones o acciones que puedan derivarse del uso de esta plataforma, ya sea producto de la visualización de una capa individual o de la integración o procesamiento de varias de ellas.',
    'modal.reject': 'No acepto',
    'modal.accept': 'Acepto',
    'modal.rejectAlert': 'Para utilizar el Geovisor COAST-Wind es necesario aceptar los términos y condiciones.'
  },

  en: {
    'header.timezone': 'Colombia UTC-5',
    'header.home': 'Home',
    'header.admin': 'Admin',
    'header.language': 'Language',
    'header.toLight': 'Switch to light theme',
    'header.toDark': 'Switch to dark theme',
    'search.placeholder': 'Search for an address or place...',
    'search.placeholderShort': 'Search place...',
    'search.button': 'Search',
    'panel.title': 'Control Panel',
    'panel.collapse': 'Collapse panel',
    'panel.expand': 'Expand panel',
    'panel.active0': '',
    'panel.active1': '1 active',
    'panel.activeN': '{n} active',
    'panel.activateAll': 'Turn on layers',
    'panel.deactivateAll': 'Turn off layers',
    'panel.loading': 'Loading layers...',
    'panel.opacity': 'Basemap opacity',
    'panel.layers': 'Layers and Variables',
    'panel.legend': 'Legend',
    'panel.noLayers': 'No layers are active on the map.',
    'legend.symbol': 'Symbol',
    'tools.basemaps': 'Basemaps',
    'tools.analysis': 'Analysis tools',
    'tools.import': 'Import layer',
    'tools.close': 'Close',
    'draw.none': 'No tool active',
    'draw.mode': 'Mode: {texto}',
    'draw.point': 'Point',
    'draw.file': 'File',
    'draw.lasso': 'Freehand',
    'draw.circle': 'Circle',
    'draw.rectangle': 'Rectangle',
    'draw.measure': 'Measure',
    'draw.status.point': 'click on the map to place a point.',
    'draw.status.gisfile': 'imported vector file.',
    'draw.status.lasso': 'press and drag to draw freehand.',
    'draw.status.circle': 'press and drag to draw a circle.',
    'draw.status.rectangle': 'press and drag to draw a rectangle.',
    'draw.status.measure': 'click successive points to measure; double-click to finish.',
    'draw.touchNote': 'On touch screens use Point or File; the other tools require a mouse.',
    'draw.clear': 'Clear drawings',
    'upload.title': 'Import GIS file',
    'upload.formats': 'Supports <b>.zip</b> (Shapefile), <b>.geojson</b>, <b>.kml</b> or <b>.topojson</b>.',
    'upload.drag': 'Drag your file here',
    'upload.or': 'or',
    'upload.button': 'Upload file',
    'upload.remove': 'Remove layer',
    'upload.converting': 'Converting geometry...',
    'upload.done': 'Geometry loaded and queried',
    'upload.evaluating': 'Evaluating cells and intersections...',
    'upload.queryTitle': 'Vector query',
    'upload.fileQuery': 'File query ({nombre})',
    'upload.errUnsupported': 'Unsupported format. Upload .zip, .geojson, .kml or .topojson.',
    'upload.errNoGeom': 'No valid geometry was found.',
    'upload.errNoCoords': 'The geometry has no valid coordinates.',
    'upload.errRead': 'Read error',
    'map.zoomIn': 'Zoom in',
    'map.zoomOut': 'Zoom out',
    'map.home': 'Default view',
    'map.locate': 'My location',
    'map.youAreHere': 'You are here',
    'map.noGeo': 'Your browser does not support geolocation.',
    'map.geoError': 'Could not get your location: ',
    'query.pointTitle': 'Query point',
    'query.loadingGrid': 'Querying grid information...',
    'query.loadingCells': 'Querying cells...',
    'query.noCoverage': 'No grid coverage at this point.',
    'query.serverError': 'Could not connect to the server.',
    'query.lassoArea': 'Freehand area',
    'query.circleArea': 'Circular area',
    'query.rectArea': 'Rectangular area',
    'query.lassoTitle': 'Freehand query',
    'query.circleTitle': 'Circular query',
    'query.rectTitle': 'Rectangular query',
    'query.noCells': 'No grid cells were found in the selected area.',
    'query.areaInfo': '<b>Queried area:</b> {n} cell(s) intersected',
    'query.center': 'Center',
    'query.radius': 'Radius',
    'query.vertices': 'Vertices',
    'query.alertsFound': 'Alerts and information found ({n}):',
    'query.noAlerts': 'No active variables or alerts in this area.',
    'query.source': 'Source',
    'query.notSpecified': 'Not specified',
    'query.viewMetadata': 'View metadata',
    'query.noDescription': 'No description available.',
    'query.noDescriptionJson': 'No description registered.',
    'query.export': 'Export query',
    'query.nothingToExport': 'There are no alerts in this query to export.',
    'query.defaultTitle': 'Query',
    'csv.header': 'Query type;Geometry / Vertices;Variable ID;Alert name;Description;Source;Metadata',
    'csv.prefix': 'Report',
    'measure.measuring': 'Measuring: {d}',
    'measure.total': 'Total distance',
    'footer.about': 'About SEI-LA',
    'footer.more': 'More information',
    'footer.rights': '© 2026 All rights reserved.',
    'modal.subtitle': 'Terms and conditions of use',
    'modal.heading': 'Please read the following terms and conditions carefully',
    'modal.p1': '<strong>COAST-Wind</strong> is a living, collaborative and constantly evolving platform that brings together data on ecosystems, wildlife, geomorphology, management and marine planning in Colombia. It was developed by the <strong>Stockholm Environment Institute Latin America Centre (SEI-LA)</strong>, the institution responsible for administering, managing and operating COAST-Wind. It is a 100% open and free tool that lets users run queries and analyses in the geographic viewer.',
    'modal.p2': 'We invite institutions and users who wish to contribute data useful to the purpose of this platform to contact the COAST-Wind team through the following official channels:',
    'modal.form': 'Form',
    'modal.n1': 'As the responsible institution, <strong>SEI-LA</strong> reserves the right to change or suspend, temporarily or permanently, access to and use of the COAST-Wind Geoviewer, and to modify these terms and conditions of use, with or without prior notice and at any time, without assuming any responsibility for any inconvenience this may cause.',
    'modal.n2': '<strong>SEI-LA</strong> is not responsible for any results, decisions or actions arising from the use of this platform, whether from viewing a single layer or from combining or processing several of them.',
    'modal.reject': 'I do not accept',
    'modal.accept': 'I accept',
    'modal.rejectAlert': 'You must accept the terms and conditions to use the COAST-Wind Geoviewer.'
  },

  pt: {
    'header.timezone': 'Colômbia UTC-5',
    'header.home': 'Início',
    'header.admin': 'Administração',
    'header.language': 'Idioma',
    'header.toLight': 'Mudar para tema claro',
    'header.toDark': 'Mudar para tema escuro',
    'search.placeholder': 'Buscar endereço ou lugar...',
    'search.placeholderShort': 'Buscar lugar...',
    'search.button': 'Buscar',
    'panel.title': 'Painel de Controle',
    'panel.collapse': 'Recolher painel',
    'panel.expand': 'Expandir painel',
    'panel.active0': '',
    'panel.active1': '1 ativa',
    'panel.activeN': '{n} ativas',
    'panel.activateAll': 'Ativar camadas',
    'panel.deactivateAll': 'Desativar camadas',
    'panel.loading': 'Carregando camadas...',
    'panel.opacity': 'Opacidade do mapa base',
    'panel.layers': 'Camadas e Variáveis',
    'panel.legend': 'Legenda',
    'panel.noLayers': 'Nenhuma camada ativa no mapa.',
    'legend.symbol': 'Símbolo',
    'tools.basemaps': 'Mapas base',
    'tools.analysis': 'Ferramentas de análise',
    'tools.import': 'Importar camada',
    'tools.close': 'Fechar',
    'draw.none': 'Nenhuma ferramenta ativa',
    'draw.mode': 'Modo: {texto}',
    'draw.point': 'Ponto',
    'draw.file': 'Arquivo',
    'draw.lasso': 'Mão livre',
    'draw.circle': 'Círculo',
    'draw.rectangle': 'Retângulo',
    'draw.measure': 'Medir',
    'draw.status.point': 'clique no mapa para posicionar um ponto.',
    'draw.status.gisfile': 'arquivo vetorial importado.',
    'draw.status.lasso': 'pressione e arraste para desenhar à mão livre.',
    'draw.status.circle': 'pressione e arraste para desenhar um círculo.',
    'draw.status.rectangle': 'pressione e arraste para desenhar um retângulo.',
    'draw.status.measure': 'clique em pontos sucessivos para medir; clique duplo para terminar.',
    'draw.touchNote': 'Em telas sensíveis ao toque use Ponto ou Arquivo; as demais ferramentas exigem mouse.',
    'draw.clear': 'Limpar desenhos',
    'upload.title': 'Importar arquivo SIG',
    'upload.formats': 'Suporta <b>.zip</b> (Shapefile), <b>.geojson</b>, <b>.kml</b> ou <b>.topojson</b>.',
    'upload.drag': 'Arraste seu arquivo aqui',
    'upload.or': 'ou',
    'upload.button': 'Enviar arquivo',
    'upload.remove': 'Remover camada',
    'upload.converting': 'Convertendo geometria...',
    'upload.done': 'Geometria carregada e consultada',
    'upload.evaluating': 'Avaliando células e interseções...',
    'upload.queryTitle': 'Consulta vetorial',
    'upload.fileQuery': 'Consulta de arquivo ({nombre})',
    'upload.errUnsupported': 'Formato não suportado. Envie .zip, .geojson, .kml ou .topojson.',
    'upload.errNoGeom': 'Nenhuma geometria válida foi encontrada.',
    'upload.errNoCoords': 'A geometria não tem coordenadas válidas.',
    'upload.errRead': 'Erro de leitura',
    'map.zoomIn': 'Aproximar',
    'map.zoomOut': 'Afastar',
    'map.home': 'Vista inicial',
    'map.locate': 'Minha localização',
    'map.youAreHere': 'Você está aqui',
    'map.noGeo': 'Seu navegador não permite a geolocalização.',
    'map.geoError': 'Não foi possível obter sua localização: ',
    'query.pointTitle': 'Ponto de consulta',
    'query.loadingGrid': 'Consultando informações na grade...',
    'query.loadingCells': 'Consultando células...',
    'query.noCoverage': 'Sem cobertura da grade neste ponto.',
    'query.serverError': 'Erro ao conectar com o servidor.',
    'query.lassoArea': 'Área à mão livre',
    'query.circleArea': 'Área circular',
    'query.rectArea': 'Área retangular',
    'query.lassoTitle': 'Consulta à mão livre',
    'query.circleTitle': 'Consulta circular',
    'query.rectTitle': 'Consulta retangular',
    'query.noCells': 'Nenhuma célula da grade foi encontrada na área selecionada.',
    'query.areaInfo': '<b>Área consultada:</b> {n} célula(s) interceptada(s)',
    'query.center': 'Centro',
    'query.radius': 'Raio',
    'query.vertices': 'Vértices',
    'query.alertsFound': 'Alertas e informações detectados ({n}):',
    'query.noAlerts': 'Não há variáveis ou alertas ativos nesta área.',
    'query.source': 'Fonte',
    'query.notSpecified': 'Não especificada',
    'query.viewMetadata': 'Ver metadados',
    'query.noDescription': 'Sem descrição disponível.',
    'query.noDescriptionJson': 'Sem descrição registrada.',
    'query.export': 'Exportar consulta',
    'query.nothingToExport': 'Não há alertas nesta consulta para exportar.',
    'query.defaultTitle': 'Consulta',
    'csv.header': 'Tipo de consulta;Geometria / Vértices;ID da variável;Nome do alerta;Descrição;Fonte;Metadados',
    'csv.prefix': 'Relatorio',
    'measure.measuring': 'Medindo: {d}',
    'measure.total': 'Distância total',
    'footer.about': 'Sobre o SEI-LA',
    'footer.more': 'Mais informações',
    'footer.rights': '© 2026 Todos os direitos reservados.',
    'modal.subtitle': 'Termos e condições de uso',
    'modal.heading': 'Por favor, leia atentamente os seguintes termos e condições',
    'modal.p1': '<strong>COAST-Wind</strong> é uma plataforma viva, colaborativa e em constante desenvolvimento que integra dados de ecossistemas, fauna, geomorfologia, gestão e planejamento marinho na Colômbia. A plataforma foi desenvolvida pelo <strong>Instituto Ambiental de Estocolmo, Centro para a América Latina (SEI-LA)</strong>, instituição responsável por administrar, gerenciar e operar o COAST-Wind. É uma ferramenta 100% aberta e gratuita que permite aos usuários realizar consultas e análises no geovisualizador.',
    'modal.p2': 'Convidamos as instituições e os usuários que desejem contribuir com dados úteis ao propósito desta plataforma a entrar em contato com a equipe do COAST-Wind pelos seguintes canais oficiais:',
    'modal.form': 'Formulário',
    'modal.n1': 'O <strong>SEI-LA</strong>, como instituição responsável, reserva-se o direito de alterar e suspender, temporária ou totalmente, o acesso e o uso do Geovisor COAST-Wind, bem como de modificar os termos e condições de uso, com ou sem aviso prévio e a qualquer momento, sem assumir qualquer responsabilidade pelos inconvenientes que isso possa causar.',
    'modal.n2': 'O <strong>SEI-LA</strong> não se responsabiliza pelos resultados, decisões ou ações que possam decorrer do uso desta plataforma, seja da visualização de uma camada individual ou da integração ou processamento de várias delas.',
    'modal.reject': 'Não aceito',
    'modal.accept': 'Aceito',
    'modal.rejectAlert': 'Para utilizar o Geovisor COAST-Wind é necessário aceitar os termos e condições.'
  }
};

// Nombres de los grupos de capas
var NOMBRES_GRUPOS = {
  'Cuadricula':       { es: 'Cuadrícula',       en: 'Grid',            pt: 'Grade' },
  'Sintesis':         { es: 'Síntesis',         en: 'Synthesis',       pt: 'Síntese' },
  'Actividad Humana': { es: 'Actividad humana', en: 'Human activity',  pt: 'Atividade humana' },
  'Ecosistemas':      { es: 'Ecosistemas',      en: 'Ecosystems',      pt: 'Ecossistemas' },
  'Fauna':            { es: 'Fauna',            en: 'Wildlife',        pt: 'Fauna' },
  'Geomorfología':    { es: 'Geomorfología',    en: 'Geomorphology',   pt: 'Geomorfologia' },
  'Gestión':          { es: 'Gestión',          en: 'Management',      pt: 'Gestão' }
};

// Nombres de los mapas base (la clave interna no cambia)
var NOMBRES_MAPAS_BASE = {
  'Satélite Híbrido':      { es: 'Satélite híbrido',  en: 'Hybrid satellite',  pt: 'Satélite híbrido' },
  'Satélite Esri':         { es: 'Satélite Esri',     en: 'Esri satellite',    pt: 'Satélite Esri' },
  'Esri World Street Map': { es: 'Calles (Esri)',     en: 'Streets (Esri)',    pt: 'Ruas (Esri)' },
  'Google Maps':           { es: 'Google Maps',       en: 'Google Maps',       pt: 'Google Maps' },
  'Google Satélite':       { es: 'Google satélite',   en: 'Google satellite',  pt: 'Google satélite' }
};

var idiomaActual = 'es';

function t(clave, variables) {
  var texto = (TEXTOS[idiomaActual] && TEXTOS[idiomaActual][clave]) || TEXTOS.es[clave] || clave;
  if (variables) {
    Object.keys(variables).forEach(function(k) {
      texto = texto.split('{' + k + '}').join(variables[k]);
    });
  }
  return texto;
}

// Devuelve el texto de un objeto {es, en, pt} en el idioma actual
function textoLocal(obj, respaldo) {
  if (!obj) return respaldo;
  return obj[idiomaActual] || obj.es || respaldo;
}

function nombreCapa(capa) {
  return (capa.nombres && (capa.nombres[idiomaActual] || capa.nombres.es)) || capa.nombre;
}

function detectarIdiomaInicial() {
  var guardado = null;
  try { guardado = localStorage.getItem('coast_lang'); } catch (e) {}
  if (guardado && IDIOMAS_DISPONIBLES.indexOf(guardado) !== -1) return guardado;
  var nav = ((navigator.languages && navigator.languages[0]) || navigator.language || 'es').toLowerCase();
  if (nav.indexOf('pt') === 0) return 'pt';
  if (nav.indexOf('en') === 0) return 'en';
  return 'es';
}

// Traduce todos los elementos del HTML marcados con data-i18n*
function aplicarTraduccionesHTML() {
  document.documentElement.setAttribute('lang', idiomaActual);
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
    var txt = t(el.getAttribute('data-i18n-title'));
    el.setAttribute('title', txt);
    el.setAttribute('aria-label', txt);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  // En el teléfono el buscador es más angosto: se usa un texto corto
  var buscador = document.getElementById('searchInput');
  if (buscador && window.matchMedia && window.matchMedia('(max-width: 767px)').matches) {
    buscador.setAttribute('placeholder', t('search.placeholderShort'));
  }
}

function cambiarIdioma(idioma) {
  if (IDIOMAS_DISPONIBLES.indexOf(idioma) === -1) idioma = 'es';
  idiomaActual = idioma;
  try { localStorage.setItem('coast_lang', idioma); } catch (e) {}
  var selector = document.getElementById('lang-selector');
  if (selector) selector.value = idioma;

  aplicarTraduccionesHTML();
  actualizarIconoTema();
  actualizarTituloPanel();
  inicializarMenu();
  construirGaleriaMapasBase();
  actualizarPanelInformacion();
  actualizarEstadoHerramienta();
  actualizarRelojTopbar();
}

// ==========================================================================
// MAPA Y CONFIGURACIÓN
// ==========================================================================
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

// Mapa base por defecto (para cambiarlo, use otra clave de mapaBaseDefiniciones)
var MAPA_BASE_POR_DEFECTO = "Google Maps";
var capaBaseInstanciada = null;
var mapaBaseActualNombre = null;

var capasDibujo = L.featureGroup().addTo(map);
var herramientaActiva = null;
var dibujandoObjeto = null;
var puntosMedicion = [];
var tooltipMedicion = null;
var puntosRuta = [];
var estaDibujandoLasso = false;

var wmsBaseUrl = "https://geoserver.coast-wind.org/geoserver/coast_wind_data/wms";
var capasWMSActivas = {};

// ------------------------------------------------------------------
// CONFIGURACIÓN DE LA GRILLA DE CONSULTA (WFS)
// Para cambiar de versión de grilla en el futuro, basta con editar GRILLA_CAPA.
// ------------------------------------------------------------------
var GRILLA_WFS_URL = "https://geoserver.coast-wind.org/geoserver/coast_wind_data/ows";
var GRILLA_CAPA = "coast_wind_data:grilla_joint_epsg4326_conv_v2";
// ------------------------------------------------------------------
// CACHÉ DE TESELAS (GeoWebCache vía WMTS)
// true  = las capas se piden como teselas pre-renderizadas de GeoWebCache (rápido).
// false = cada tesela la dibuja GeoServer en el momento (WMS clásico).
// Si una capa no tiene caché activada en GeoServer, el visor vuelve a WMS solo para esa capa.
// ------------------------------------------------------------------
var USAR_CACHE_TESELAS = true;
var WMTS_URL = "https://geoserver.coast-wind.org/geoserver/gwc/service/wmts";
var WMTS_GRIDSET = "EPSG:900913"; // gridset por defecto de GeoWebCache, equivalente a la proyección de Leaflet

var grillaCamposData = null; // lista de campos DataN; se pide solo eso por WFS (sin geometría)
var grillaCampoGeometria = null; // se detecta automáticamente; en el GeoPackage v2 se llama "geom"

async function obtenerCampoGeometriaGrilla() {
  if (grillaCampoGeometria) return grillaCampoGeometria;
  try {
    var url = `${GRILLA_WFS_URL}?service=WFS&version=1.0.0&request=DescribeFeatureType&` +
      `typeName=${encodeURIComponent(GRILLA_CAPA)}&outputFormat=application/json`;
    var res = await fetch(url);
    if (res.ok) {
      var desc = await res.json();
      var props = (desc.featureTypes && desc.featureTypes[0] && desc.featureTypes[0].properties) || [];
      var geom = props.find(function(p) { return p.type && p.type.indexOf('gml:') === 0; });
      if (geom) grillaCampoGeometria = geom.name;
      grillaCamposData = props
        .map(function(p) { return p.name; })
        .filter(function(n) { return /^data\d+$/i.test(n); });
      if (grillaCamposData.length === 0) grillaCamposData = null;
    }
  } catch (e) {
    console.warn("No se pudo detectar la columna geométrica de la grilla; se usará 'geom'.", e);
  }
  if (!grillaCampoGeometria) grillaCampoGeometria = "geom";
  return grillaCampoGeometria;
}

// ------------------------------------------------------------------
// CAPAS DEL PROYECTO
// id      = nombre de la capa en GeoServer (no cambiar)
// nombres = nombre visible en cada idioma
// grupo   = clave del grupo (ver NOMBRES_GRUPOS)
// ------------------------------------------------------------------
var capasProyecto = [
  // Cuadrícula y síntesis
  { id: "grilla_joint_epsg4326_conv_v2", grupo: "Cuadricula",
    nombres: { es: "Cuadrícula y grilla", en: "Analysis grid", pt: "Grade de análise" } },
  ///{ id: "Environmental Sensitivity Index", grupo: "Sintesis", nombres: { es: "Environmental Sensitivity Index (ESI)" } },
  { id: "Poligono ronda eolica", grupo: "Sintesis",
    nombres: { es: "Polígono Ronda Eólica", en: "Offshore wind round polygon", pt: "Polígono da rodada eólica" } },

  // Actividad humana
  { id: "areas_asignadas_grilla_raster", grupo: "Actividad Humana",
    nombres: { es: "Asignación de exploración/explotación de hidrocarburos", en: "Assigned hydrocarbon exploration/production areas", pt: "Áreas atribuídas de exploração/produção de hidrocarbonetos" } },
  { id: "areas_reservadas_grilla_raster", grupo: "Actividad Humana",
    nombres: { es: "Reservada de exploración/explotación de hidrocarburos", en: "Reserved hydrocarbon exploration/production areas", pt: "Áreas reservadas de exploração/produção de hidrocarbonetos" } },
  { id: "Cables_submarinos_prj_ok_grilla_raster", grupo: "Actividad Humana",
    nombres: { es: "Presencia de cables submarinos", en: "Submarine cables", pt: "Cabos submarinos" } },
  { id: "Caladeros_de_Pesca_(poligonos)_grilla_raster", grupo: "Actividad Humana",
    nombres: { es: "Caladeros de pesca", en: "Fishing grounds", pt: "Pesqueiros" } },
  { id: "EspaciosSagrados_2023_grilla_raster", grupo: "Actividad Humana",
    nombres: { es: "Espacios sagrados de comunidades", en: "Sacred sites of communities", pt: "Espaços sagrados de comunidades" } },
  { id: "IntensidadPescaCaribe_mayor1_dissolved_grilla_raster", grupo: "Actividad Humana",
    nombres: { es: "Intensidad y presencia pesquera", en: "Fishing intensity and presence", pt: "Intensidade e presença pesqueira" } },
  { id: "RutasCaladeroPesca_(linea)_grilla_raster", grupo: "Actividad Humana",
    nombres: { es: "Rutas de caladeros de pesca", en: "Routes to fishing grounds", pt: "Rotas para os pesqueiros" } },

  // Ecosistemas
  { id: "Manglares", grupo: "Ecosistemas",
    nombres: { es: "Manglares", en: "Mangroves", pt: "Manguezais" } },
  { id: "Presencia de pastos marinos", grupo: "Ecosistemas",
    nombres: { es: "Presencia de pastos marinos", en: "Seagrass presence", pt: "Presença de pradarias marinhas" } },
  { id: "Areas Coralinas", grupo: "Ecosistemas",
    nombres: { es: "Áreas coralinas", en: "Coral areas", pt: "Áreas coralinas" } },
  { id: "Fondo algas carnosas", grupo: "Ecosistemas",
    nombres: { es: "Fondo algas carnosas", en: "Fleshy algae beds", pt: "Fundos de algas carnosas" } },
  { id: "Fondos duros algas calcareas", grupo: "Ecosistemas",
    nombres: { es: "Fondos duros algas calcáreas", en: "Hard bottoms with calcareous algae", pt: "Fundos duros de algas calcárias" } },
  { id: "Ostras perliferas", grupo: "Ecosistemas",
    nombres: { es: "Ostras perlíferas", en: "Pearl oysters", pt: "Ostras perlíferas" } },

  // Fauna
  { id: "Zonas de alimentacion de tortugas", grupo: "Fauna",
    nombres: { es: "Zonas de alimentación de tortugas", en: "Sea turtle feeding areas", pt: "Áreas de alimentação de tartarugas" } },
  { id: "Playas de anidacion de tortugas", grupo: "Fauna",
    nombres: { es: "Playas de anidación de tortugas", en: "Sea turtle nesting beaches", pt: "Praias de desova de tartarugas" } },
  { id: "Desove de nodriza strombusg", grupo: "Fauna",
    nombres: { es: "Desove de nodriza strombusg", en: "Queen conch spawning and nursery areas", pt: "Desova e berçário do caramujo-rainha" } },
  { id: "Congregacion de peces", grupo: "Fauna",
    nombres: { es: "Congregación de peces", en: "Fish aggregations", pt: "Agregações de peixes" } },
  { id: "Presencia de mamiferos marinos", grupo: "Fauna",
    nombres: { es: "Presencia de mamíferos marinos", en: "Marine mammal presence", pt: "Presença de mamíferos marinhos" } },
  { id: "Congregacion de aves marinas", grupo: "Fauna",
    nombres: { es: "Congregación de aves marinas", en: "Seabird aggregations", pt: "Agregações de aves marinhas" } },
  { id: "Congregacion de aves playeras", grupo: "Fauna",
    nombres: { es: "Congregación de aves playeras", en: "Shorebird aggregations", pt: "Agregações de aves limícolas" } },

  // Geomorfología
  { id: "Playas", grupo: "Geomorfología",
    nombres: { es: "Playas", en: "Beaches", pt: "Praias" } },
  { id: "Playones", grupo: "Geomorfología",
    nombres: { es: "Playones", en: "Tidal flats", pt: "Planícies de maré" } },
  { id: "Playones salinos", grupo: "Geomorfología",
    nombres: { es: "Playones salinos", en: "Salt flats", pt: "Planícies salinas" } },
  { id: "Acantilados", grupo: "Geomorfología",
    nombres: { es: "Acantilados", en: "Cliffs", pt: "Falésias" } },
  { id: "Humedales costeros", grupo: "Geomorfología",
    nombres: { es: "Humedales costeros", en: "Coastal wetlands", pt: "Áreas úmidas costeiras" } },
  { id: "Lagunas costeras", grupo: "Geomorfología",
    nombres: { es: "Lagunas costeras", en: "Coastal lagoons", pt: "Lagoas costeiras" } },
  { id: "Estuarios", grupo: "Geomorfología",
    nombres: { es: "Estuarios", en: "Estuaries", pt: "Estuários" } },
  { id: "Panganales", grupo: "Geomorfología",
    nombres: { es: "Panganales", en: "Raffia palm swamps (panganales)", pt: "Pântanos de palmeira-ráfia (panganales)" } },
  { id: "Playones fluviomarinos", grupo: "Geomorfología",
    nombres: { es: "Playones fluviomarinos", en: "Fluvio-marine flats", pt: "Planícies flúvio-marinhas" } },
  ///{ id: "Volcanes de lodo SGC 2023", grupo: "Geomorfología", nombres: { es: "Volcanes de lodo" } },

  // Gestión
  { id: "Areas significativas de biodiversidad", grupo: "Gestión",
    nombres: { es: "Áreas significativas de biodiversidad", en: "Significant biodiversity areas", pt: "Áreas significativas de biodiversidade" } },
  { id: "Areas protegidas", grupo: "Gestión",
    nombres: { es: "Áreas protegidas", en: "Protected areas", pt: "Áreas protegidas" } },
  { id: "Sitios prioritarios de conservacion", grupo: "Gestión",
    nombres: { es: "Sitios prioritarios de conservación", en: "Priority conservation sites", pt: "Sítios prioritários de conservação" } },
  { id: "Surgencia", grupo: "Gestión",
    nombres: { es: "Surgencia", en: "Upwelling", pt: "Ressurgência" } }
];

// Utilidad: escapar texto antes de insertarlo como HTML
function escaparHTML(texto) {
  return String(texto == null ? '' : texto)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function esMovil() {
  return window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
}

// ==========================================================================
// TEMA (oscuro / claro)
// ==========================================================================
function temaActual() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function aplicarTema(tema) {
  document.documentElement.setAttribute('data-theme', tema === 'light' ? 'light' : 'dark');
  try { localStorage.setItem('coast_theme', temaActual()); } catch (e) {}
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', temaActual() === 'light' ? '#ffffff' : '#0b1220');
  actualizarIconoTema();
}

function actualizarIconoTema() {
  var icono = document.getElementById('theme-icon');
  var boton = document.getElementById('theme-toggle');
  var claro = temaActual() === 'light';
  if (icono) icono.className = claro ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  if (boton) {
    var txt = t(claro ? 'header.toDark' : 'header.toLight');
    boton.setAttribute('title', txt);
    boton.setAttribute('aria-label', txt);
  }
}

function toggleTheme() {
  aplicarTema(temaActual() === 'light' ? 'dark' : 'light');
}

// ==========================================================================
// PANEL DE CONTROL COLAPSABLE
// ==========================================================================
function panelEstaColapsado() {
  var panel = document.getElementById('panel-izquierdo');
  return panel ? panel.classList.contains('is-collapsed') : false;
}

function colapsarPanel(colapsar, guardar) {
  var panel = document.getElementById('panel-izquierdo');
  var boton = document.getElementById('panel-toggle');
  if (!panel) return;
  panel.classList.toggle('is-collapsed', colapsar);
  if (boton) boton.setAttribute('aria-expanded', colapsar ? 'false' : 'true');
  actualizarTituloPanel();
  if (guardar && !esMovil()) {
    try { localStorage.setItem('coast_panel', colapsar ? 'colapsado' : 'abierto'); } catch (e) {}
  }
}

function togglePanelControl() {
  var colapsar = !panelEstaColapsado();
  colapsarPanel(colapsar, true);
  // En móvil, al abrir el panel se cierran los menús de herramientas para que no se superpongan
  if (!colapsar && esMovil()) cerrarMenusHerramientas();
}

function actualizarTituloPanel() {
  var boton = document.getElementById('panel-toggle');
  if (boton) {
    var txt = t(panelEstaColapsado() ? 'panel.expand' : 'panel.collapse');
    boton.setAttribute('title', txt);
    boton.setAttribute('aria-label', t('panel.title') + ' — ' + txt);
  }
}

function actualizarResumenPanel() {
  var resumen = document.getElementById('panel-resumen');
  if (!resumen) return;
  var n = Object.keys(capasWMSActivas).length;
  resumen.textContent = n === 0 ? t('panel.active0') : (n === 1 ? t('panel.active1') : t('panel.activeN', { n: n }));
}

function estadoInicialPanel() {
  var colapsar = false;
  if (esMovil()) {
    colapsar = true; // en el teléfono se empieza viendo el mapa
  } else {
    try { colapsar = localStorage.getItem('coast_panel') === 'colapsado'; } catch (e) {}
  }
  colapsarPanel(colapsar, false);
}

// ==========================================================================
// MAPAS BASE
// ==========================================================================
function construirGaleriaMapasBase() {
  var grid = document.getElementById('basemapGridContainer');
  if (!grid) return;
  grid.innerHTML = "";

  Object.keys(mapaBaseDefiniciones).forEach(function(nombre) {
    var etiqueta = textoLocal(NOMBRES_MAPAS_BASE[nombre], nombre);
    var card = document.createElement('button');
    card.type = 'button';
    card.className = 'cw-basemap-card' + (nombre === mapaBaseActualNombre ? ' active' : '');
    card.id = 'bm-' + nombre.replace(/ /g, '-');
    card.onclick = function() { cambiarMapaBaseAdvanced(nombre); };
    card.innerHTML =
      '<img src="' + mapaBaseDefiniciones[nombre].thumb + '" class="cw-basemap-thumb" alt="">' +
      '<span class="cw-basemap-name">' + escaparHTML(etiqueta) + '</span>';
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
  // La capa base siempre debajo de las capas temáticas
  if (capaBaseInstanciada.bringToBack) capaBaseInstanciada.bringToBack();
  else capaBaseInstanciada.eachLayer(function(l) { if (l.bringToBack) l.bringToBack(); });

  mapaBaseActualNombre = nombre;

  Object.keys(mapaBaseDefiniciones).forEach(function(n) {
    var el = document.getElementById('bm-' + n.replace(/ /g, '-'));
    if (el) el.classList.toggle('active', n === nombre);
  });
}

function cambiarMapaBaseRapido(nombre) {
  cambiarMapaBaseAdvanced(nombre);
}

function ajustarOpacidadBase() {
  var slider = document.getElementById("opacity-slider");
  if (!slider) return;
  var valor = slider.value / 100;
  var etiqueta = document.getElementById('opacity-value');
  if (etiqueta) etiqueta.textContent = slider.value + '%';
  if (capaBaseInstanciada.setOpacity) {
    capaBaseInstanciada.setOpacity(valor);
  } else {
    capaBaseInstanciada.eachLayer(function(layer) { if (layer.setOpacity) layer.setOpacity(valor); });
  }
}

// ==========================================================================
// MENÚS DE HERRAMIENTAS (derecha)
// ==========================================================================
var MENUS_HERRAMIENTAS = ['panelBasemaps', 'panelDibujo', 'panel-uploads'];

function cerrarMenusHerramientas() {
  MENUS_HERRAMIENTAS.forEach(function(p) {
    var el = document.getElementById(p);
    if (el) el.classList.add('hidden');
  });
  actualizarBotonesHerramientas();
}

function toggleWidget(idPanel) {
  MENUS_HERRAMIENTAS.forEach(function(p) {
    var el = document.getElementById(p);
    if (el && p !== idPanel) el.classList.add('hidden');
  });
  var target = document.getElementById(idPanel);
  if (target) target.classList.toggle('hidden');
  // En móvil, abrir un menú contrae el panel inferior para no tapar el mapa
  if (target && !target.classList.contains('hidden') && esMovil()) colapsarPanel(true, false);
  actualizarBotonesHerramientas();
}

function actualizarBotonesHerramientas() {
  document.querySelectorAll('.cw-toolbtn').forEach(function(btn) {
    var m = (btn.getAttribute('onclick') || '').match(/toggleWidget\('([^']+)'\)/);
    var abierto = m && document.getElementById(m[1]) && !document.getElementById(m[1]).classList.contains('hidden');
    btn.classList.toggle('is-open', !!abierto);
  });
}

// ==========================================================================
// HERRAMIENTAS DE DIBUJO Y CONSULTA
// ==========================================================================
var CLAVES_ESTADO_HERRAMIENTA = {
  'point': 'draw.status.point',
  'gisfile': 'draw.status.gisfile',
  'lasso': 'draw.status.lasso',
  'circle': 'draw.status.circle',
  'rectangle': 'draw.status.rectangle',
  'measure': 'draw.status.measure'
};

function actualizarEstadoHerramienta() {
  var statusElem = document.getElementById('statusDibujo');
  if (!statusElem) return;
  var clave = CLAVES_ESTADO_HERRAMIENTA[herramientaActiva];
  statusElem.textContent = clave ? t('draw.mode', { texto: t(clave) }) : t('draw.none');
}

function marcarBotonHerramienta(tipo) {
  ['point', 'gisfile', 'lasso', 'circle', 'rectangle', 'measure'].forEach(function(b) {
    var el = document.getElementById('btn-draw-' + b);
    if (el) el.classList.toggle('is-active', b === tipo);
  });
}

function formatearDistancia(m, decimalesMetros) {
  return m > 1000 ? (m / 1000).toFixed(2) + ' km' : m.toFixed(decimalesMetros || 0) + ' m';
}

function popupCargando(titulo, detalleHTML, mensaje) {
  return '<div style="min-width: 220px; font-size: 12px;">' +
    '<b>' + escaparHTML(titulo) + '</b><br>' +
    (detalleHTML ? '<span>' + detalleHTML + '</span><hr style="margin: 6px 0; border: 0; border-top: 1px solid #e2e8f0;">' : '') +
    '<span style="color: #64748b;">' + escaparHTML(mensaje) + '</span>' +
    '</div>';
}

function desactivarModosMapa() {
  map.off('click');
  map.off('mousedown');
  map.off('mousemove');
  map.off('mouseup');
  map.off('dblclick');
  map.dragging.enable();
  map.doubleClickZoom.enable();
  herramientaActiva = null;
  marcarBotonHerramienta(null);
  actualizarEstadoHerramienta();
}

function activarHerramientaDibujo(tipo) {
  desactivarModosMapa();
  herramientaActiva = tipo;
  marcarBotonHerramienta(tipo);
  actualizarEstadoHerramienta();

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
    // En móvil se cierra el menú para dejar libre el mapa
    if (esMovil()) cerrarMenusHerramientas();
    map.on('click', function(e) {
      var lat = e.latlng.lat;
      var lon = e.latlng.lng;

      var marcador = L.marker([lat, lon]).addTo(capasDibujo);
      marcador.bindPopup(popupCargando(t('query.pointTitle'),
        'Lat: ' + lat.toFixed(6) + ' | Lon: ' + lon.toFixed(6), t('query.loadingGrid'))).openPopup();

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
      if (puntosRuta.length > 0) {
        var temp = puntosRuta.concat([e.latlng]);
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
      if (estaDibujandoLasso && dibujandoObjeto) {
        puntosRuta.push(e.latlng);
        dibujandoObjeto.setLatLngs(puntosRuta);
      }
    });
    map.on('mouseup', function() {
      if (estaDibujandoLasso && dibujandoObjeto) {
        map.removeLayer(dibujandoObjeto);
        if (puntosRuta.length > 2) {
          var poligonoLasso = L.polygon(puntosRuta, {color: '#9333ea', fillColor: '#c084fc', fillOpacity: 0.3}).addTo(capasDibujo);
          poligonoLasso.bindPopup(popupCargando(t('query.lassoArea'), null, t('query.loadingCells'))).openPopup();

          consultarGrillaPorGeometria(poligonoLasso, poligonoLasso.getBounds(), t('query.lassoTitle'));
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
        if (dibujandoObjeto) dibujandoObjeto.setRadius(centro.distanceTo(ev.latlng));
      });
      map.on('mouseup', function() {
        if (dibujandoObjeto) {
          var circuloFinal = dibujandoObjeto;
          circuloFinal.addTo(capasDibujo);
          circuloFinal.bindPopup(popupCargando(t('query.circleArea'), null, t('query.loadingCells'))).openPopup();

          consultarGrillaPorGeometria(circuloFinal, circuloFinal.getBounds(), t('query.circleTitle'));
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
        if (dibujandoObjeto) dibujandoObjeto.setBounds([p1, ev.latlng]);
      });
      map.on('mouseup', function() {
        if (dibujandoObjeto) {
          var rectanguloFinal = dibujandoObjeto;
          rectanguloFinal.addTo(capasDibujo);
          rectanguloFinal.bindPopup(popupCargando(t('query.rectArea'), null, t('query.loadingCells'))).openPopup();

          consultarGrillaPorGeometria(rectanguloFinal, rectanguloFinal.getBounds(), t('query.rectTitle'));
          dibujandoObjeto = null;
          desactivarModosMapa();
        }
      });
    });
  }
  else if (tipo === 'measure') {
    puntosRuta = [];
    map.doubleClickZoom.disable(); // el doble clic termina la medición, no hace zoom
    dibujandoObjeto = L.polyline([], {color: '#ef4444', weight: 4, dashArray: '6, 6'}).addTo(map);
    tooltipMedicion = L.tooltip({permanent: true, className: 'cw-measure-tip', direction: 'top'});

    map.on('click', function(e) {
      puntosRuta.push(e.latlng);
      dibujandoObjeto.setLatLngs(puntosRuta);
      var dist = calcularDistanciaRuta(puntosRuta);
      tooltipMedicion.setLatLng(e.latlng).setContent(formatearDistancia(dist)).addTo(map);
    });
    map.on('mousemove', function(e) {
      if (puntosRuta.length > 0) {
        var temp = puntosRuta.concat([e.latlng]);
        dibujandoObjeto.setLatLngs(temp);
        var dist = calcularDistanciaRuta(temp);
        tooltipMedicion.setLatLng(e.latlng).setContent(t('measure.measuring', { d: formatearDistancia(dist) }));
      }
    });
    map.on('dblclick', function() {
      var distFinal = calcularDistanciaRuta(puntosRuta);
      L.polyline(puntosRuta, {color: '#b91c1c', weight: 3})
        .bindPopup('<b>' + escaparHTML(t('measure.total')) + ':</b> ' + formatearDistancia(distFinal, 1))
        .addTo(capasDibujo);
      if (dibujandoObjeto) { map.removeLayer(dibujandoObjeto); dibujandoObjeto = null; }
      if (tooltipMedicion) map.removeLayer(tooltipMedicion);
      desactivarModosMapa();
    });
  }
}


// Pide a GeoServer solo los campos DataN: evita transferir geometrías y columnas que no se usan
function parametroCamposWFS() {
  return grillaCamposData ? `propertyName=${encodeURIComponent(grillaCamposData.join(','))}&` : '';
}

async function consultarGrillaPorCoordenadas(lat, lon, marcador) {
  var nombreCapaGrilla = GRILLA_CAPA;
  var campoGeom = await obtenerCampoGeometriaGrilla();
  var cqlFilter = `INTERSECTS(${campoGeom}, POINT(${lon} ${lat}))`;

  var wfsUrl = `${GRILLA_WFS_URL}?` +
    `service=WFS&version=1.0.0&request=GetFeature&` +
    `typeName=${encodeURIComponent(nombreCapaGrilla)}&` +
    `outputFormat=application/json&maxFeatures=1&` +
    parametroCamposWFS() +
    `cql_filter=${encodeURIComponent(cqlFilter)}`;

  var coordsTexto = 'Lat: ' + lat.toFixed(6) + ' | Lon: ' + lon.toFixed(6);

  try {
    var response = await fetch(wfsUrl);
    if (!response.ok) throw new Error("Error en la respuesta del servidor GeoServer");

    var data = await response.json();

    if (data.features && data.features.length > 0) {
      var atributos = data.features[0].properties;
      var infoGeo = {
        titulo: t('query.pointTitle'),
        htmlInfo: coordsTexto,
        exportTexto: `POINT(${lon.toFixed(6)} ${lat.toFixed(6)})`
      };
      await procesarAtributosCelda(atributos, null, marcador, infoGeo);
    } else {
      marcador.getPopup().setContent(
        '<div style="min-width: 200px; font-size: 12px;">' +
          '<b>' + escaparHTML(t('query.pointTitle')) + '</b><br>' +
          '<span>' + coordsTexto + '</span>' +
          '<hr style="margin: 6px 0; border: 0; border-top: 1px solid #e2e8f0;">' +
          '<span style="color: #dc2626;">' + escaparHTML(t('query.noCoverage')) + '</span>' +
        '</div>');
    }
  } catch (error) {
    console.error("Error al consultar la grilla:", error);
    marcador.getPopup().setContent(
      '<div style="min-width: 200px; font-size: 12px;">' +
        '<b>' + escaparHTML(t('query.pointTitle')) + '</b><br>' +
        '<span style="color: #dc2626;">' + escaparHTML(t('query.serverError')) + '</span>' +
      '</div>');
  }
}

async function consultarGrillaPorGeometria(capaGrafica, bounds, tituloGeometria) {
  var minLon = bounds.getWest();
  var minLat = bounds.getSouth();
  var maxLon = bounds.getEast();
  var maxLat = bounds.getNorth();

  var nombreCapaGrilla = GRILLA_CAPA;
  var bboxFilter = `${minLon},${minLat},${maxLon},${maxLat},EPSG:4326`;
  await obtenerCampoGeometriaGrilla(); // carga la lista de campos DataN (una sola vez)

  var wfsUrl = `${GRILLA_WFS_URL}?` +
    `service=WFS&version=1.0.0&request=GetFeature&` +
    `typeName=${encodeURIComponent(nombreCapaGrilla)}&` +
    `outputFormat=application/json&` +
    parametroCamposWFS() +
    `bbox=${encodeURIComponent(bboxFilter)}`;

  try {
    var res = await fetch(wfsUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    var geojson = await res.json();
    var celdas = geojson.features || [];

    if (celdas.length === 0) {
      capaGrafica.getPopup().setContent(
        '<div style="min-width: 220px; font-size: 12px;">' +
          '<b>' + escaparHTML(tituloGeometria) + '</b><br>' +
          '<span style="color: #64748b;">' + escaparHTML(t('query.noCells')) + '</span>' +
        '</div>');
      return;
    }

    var atributosConsolidados = {};
    celdas.forEach(function(feature) {
      var props = feature.properties || {};
      Object.keys(props).forEach(function(key) {
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

    // Descripción geográfica para la ventana emergente y el CSV
    var verticesStr = "";
    if (typeof capaGrafica.getRadius === 'function') {
      var centro = capaGrafica.getLatLng();
      var radio = capaGrafica.getRadius();
      verticesStr = `${t('query.center')}: (${centro.lat.toFixed(5)}, ${centro.lng.toFixed(5)}) - ${t('query.radius')}: ${(radio/1000).toFixed(2)} km`;
    } else if (typeof capaGrafica.getLatLngs === 'function') {
      var coords = capaGrafica.getLatLngs()[0] || [];
      var listaVertices = coords.map(function(pt) { return `(${pt.lat.toFixed(4)}, ${pt.lng.toFixed(4)})`; });
      verticesStr = `${t('query.vertices')} (${coords.length}): ` + listaVertices.join(" | ");
    } else {
      verticesStr = `BBOX: [${minLat.toFixed(4)}, ${minLon.toFixed(4)}] - [${maxLat.toFixed(4)}, ${maxLon.toFixed(4)}]`;
    }

    var infoGeo = {
      titulo: tituloGeometria,
      htmlInfo: t('query.areaInfo', { n: celdas.length }) +
        `<br><span>BBOX: SW(${minLat.toFixed(4)}, ${minLon.toFixed(4)}) - NE(${maxLat.toFixed(4)}, ${maxLon.toFixed(4)})</span>`,
      exportTexto: verticesStr
    };

    await procesarAtributosCelda(atributosConsolidados, null, capaGrafica, infoGeo);

  } catch (err) {
    console.error("Error al consultar la grilla por geometría:", err);
    capaGrafica.getPopup().setContent(
      '<div style="min-width: 220px; font-size: 12px; color: #dc2626;">' +
        '<b>' + escaparHTML(tituloGeometria) + '</b><br>' +
        escaparHTML(t('query.serverError')) +
      '</div>');
  }
}


// Diccionario de alertas (json_query.json en GitHub)
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

// Lee un campo del JSON en el idioma actual (p. ej. nom_alerta_en), con respaldo en español
function campoAlerta(item, campo) {
  if (!item) return '';
  var local = item[campo + '_' + idiomaActual];
  if (idiomaActual !== 'es' && local && String(local).trim() !== '') return String(local).trim();
  return item[campo] ? String(item[campo]).trim() : '';
}


// Datos de la última consulta, para exportar a CSV
window.datosExportarActuales = null;

window.descargarExcelAlertas = function() {
  if (!window.datosExportarActuales || !window.datosExportarActuales.alertas || window.datosExportarActuales.alertas.length === 0) {
    alert(t('query.nothingToExport'));
    return;
  }

  var tipoConsulta = window.datosExportarActuales.tipoConsulta || t('query.defaultTitle');
  var detalleGeometria = window.datosExportarActuales.detalleGeometria || "N/A";
  var alertas = window.datosExportarActuales.alertas;

  var csvContent = "﻿";
  csvContent += t('csv.header') + "\n";

  alertas.forEach(function(item) {
    var id = item.id_geotiff || item.dataKey || "";
    var nombre = (campoAlerta(item, 'nom_alerta') || item.dataKey || "").replace(/"/g, '""');
    var desc = (campoAlerta(item, 'descri_alerta') || t('query.noDescription')).replace(/"/g, '""');
    var fuente = (item.entidad_fuente || t('query.notSpecified')).replace(/"/g, '""');
    var meta = (item.metadatos_capa_original || item.metadatos_xml || "N/A").replace(/"/g, '""');

    csvContent += `"${tipoConsulta}";"${detalleGeometria}";"${id}";"${nombre}";"${desc}";"${fuente}";"${meta}"\n`;
  });

  var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = url;
  link.download = `${t('csv.prefix')}_${tipoConsulta.replace(/[^\w\-]+/g, '_')}_${Date.now()}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

async function procesarAtributosCelda(atributos, mapaOElementos, marcador, infoGeometria) {
  infoGeometria = infoGeometria || {};
  var alertasDetectadas = [];

  Object.keys(atributos).forEach(function(clave) {
    var valor = atributos[clave];
    if (clave.toLowerCase().startsWith('data') && (valor === 1 || valor === "1" || valor === 1.0)) {
      alertasDetectadas.push(clave.trim());
    }
  });

  var diccionario = await cargarDiccionarioAlertas();
  var htmlVariables = "";
  var listaExportar = [];

  if (alertasDetectadas.length > 0) {
    htmlVariables = '<div style="max-height: 240px; overflow-y: auto; margin-top: 6px; padding-right: 4px;">';

    alertasDetectadas.forEach(function(dataKey) {
      var keyNormalizada = dataKey.replace(/\s+/g, '').toLowerCase();

      var infoAlerta = diccionario.find(function(item) {
        if (!item || !item.id_geotiff) return false;
        return item.id_geotiff.toString().replace(/\s+/g, '').toLowerCase() === keyNormalizada;
      });

      if (infoAlerta) {
        listaExportar.push(Object.assign({}, infoAlerta, { dataKey: dataKey }));

        var fuente = (infoAlerta.entidad_fuente && infoAlerta.entidad_fuente.toString().trim() !== "")
          ? infoAlerta.entidad_fuente.toString().trim()
          : t('query.notSpecified');

        var rawMetadato = (infoAlerta.metadatos_capa_original && infoAlerta.metadatos_capa_original.toString().trim() !== "")
          ? infoAlerta.metadatos_capa_original.toString().trim()
          : (infoAlerta.metadatos_xml ? infoAlerta.metadatos_xml.toString().trim() : "");

        var botonMetadatoHTML = "";
        if (rawMetadato && rawMetadato.toUpperCase() !== "N/A" && rawMetadato !== "") {
          var urlMetadato = (rawMetadato.startsWith("http://") || rawMetadato.startsWith("https://"))
            ? rawMetadato
            : "https://" + rawMetadato;

          botonMetadatoHTML =
            '<div style="margin-top: 6px;">' +
              '<a href="' + escaparHTML(urlMetadato) + '" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 4px 8px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 10px; font-weight: bold; line-height: 1.2;">' +
                '📄 ' + escaparHTML(t('query.viewMetadata')) +
              '</a>' +
            '</div>';
        }

        var nombreAlerta = campoAlerta(infoAlerta, 'nom_alerta') || dataKey;
        var descAlerta = campoAlerta(infoAlerta, 'descri_alerta') || t('query.noDescription');

        htmlVariables +=
          '<div style="margin-bottom: 8px; padding: 8px; background-color: #f8fafc; border-left: 3px solid #2563eb; border-radius: 4px; border: 1px solid #e2e8f0;">' +
            '<div style="font-weight: bold; color: #1e3a8a; font-size: 11.5px;">' +
              escaparHTML(nombreAlerta) + ' <span style="color: #64748b; font-weight: normal;">(' + escaparHTML(dataKey) + ')</span>' +
            '</div>' +
            '<div style="font-size: 11px; color: #334155; margin-top: 3px; line-height: 1.35;">' + escaparHTML(descAlerta) + '</div>' +
            '<div style="font-size: 10.5px; color: #475569; margin-top: 5px; border-top: 1px dashed #cbd5e1; padding-top: 4px;">' +
              '<b>' + escaparHTML(t('query.source')) + ':</b> ' + escaparHTML(fuente) +
            '</div>' +
            botonMetadatoHTML +
          '</div>';
      } else {
        listaExportar.push({ dataKey: dataKey, nom_alerta: dataKey, descri_alerta: t('query.noDescriptionJson'), entidad_fuente: "N/A" });
        htmlVariables +=
          '<div style="margin-bottom: 6px; padding: 6px; background-color: #f8fafc; border-left: 3px solid #94a3b8; border-radius: 3px;">' +
            '<div style="font-weight: bold; color: #2563eb; font-size: 11.5px;">' + escaparHTML(dataKey) + '</div>' +
            '<div style="font-size: 11px; color: #64748b; margin-top: 2px;">' + escaparHTML(t('query.noDescriptionJson')) + '</div>' +
          '</div>';
      }
    });

    htmlVariables += '</div>';
  } else {
    htmlVariables = '<p style="color: #64748b; margin: 6px 0; font-size: 11.5px;">' + escaparHTML(t('query.noAlerts')) + '</p>';
  }

  var tituloConsulta = infoGeometria.titulo || t('query.defaultTitle');

  // Guardar estructura de exportación
  window.datosExportarActuales = {
    tipoConsulta: tituloConsulta,
    detalleGeometria: infoGeometria.exportTexto || "N/A",
    alertas: listaExportar
  };

  var botonExportarHTML = "";
  if (alertasDetectadas.length > 0) {
    botonExportarHTML =
      '<div style="margin-top: 10px; border-top: 1px solid #e2e8f0; padding-top: 8px; text-align: center;">' +
        '<button onclick="window.descargarExcelAlertas()" style="width: 100%; padding: 7px 10px; background-color: #16a34a; color: #ffffff; border: none; border-radius: 6px; font-size: 11.5px; font-weight: bold; cursor: pointer;">' +
          escaparHTML(t('query.export')) + ' (CSV)' +
        '</button>' +
      '</div>';
  }

  var contenidoPopup =
    '<div style="min-width: 250px; max-width: 320px; font-size: 12px; color: #1e293b;">' +
      '<b>' + escaparHTML(tituloConsulta) + '</b><br>' +
      '<span style="color: #475569; font-size: 11px;">' + (infoGeometria.htmlInfo || '') + '</span>' +
      '<hr style="margin: 6px 0; border: 0; border-top: 1px solid #e2e8f0;">' +
      '<b>' + escaparHTML(t('query.alertsFound', { n: alertasDetectadas.length })) + '</b>' +
      htmlVariables +
      botonExportarHTML +
    '</div>';

  marcador.getPopup().setContent(contenidoPopup);
}



function calcularDistanciaRuta(puntos) {
  var dist = 0;
  for (var i = 0; i < puntos.length - 1; i++) {
    dist += puntos[i].distanceTo(puntos[i + 1]);
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

// ==========================================================================
// BÚSQUEDA DE LUGARES (Nominatim)
// ==========================================================================
var debounceTimer;
function buscarSugerencias() {
  clearTimeout(debounceTimer);
  var input = document.getElementById('searchInput');
  if (!input) return;
  var query = input.value.trim();
  var contenedorListado = document.getElementById('searchSuggestions');
  if (!contenedorListado) return;

  if (query.length < 3) {
    contenedorListado.innerHTML = "";
    contenedorListado.classList.add('hidden');
    return;
  }

  debounceTimer = setTimeout(async function() {
    try {
      var response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&accept-language=${idiomaActual}&q=${encodeURIComponent(query)}`);
      var data = await response.json();
      contenedorListado.innerHTML = "";
      if (data && data.length > 0) {
        contenedorListado.classList.remove('hidden');
        data.forEach(function(lugar) {
          var item = document.createElement('div');
          item.className = "cw-suggestion";
          item.textContent = lugar.display_name;
          item.onclick = function() {
            input.value = lugar.display_name;
            map.setView([parseFloat(lugar.lat), parseFloat(lugar.lon)], 14);
            contenedorListado.innerHTML = "";
            contenedorListado.classList.add('hidden');
          };
          contenedorListado.appendChild(item);
        });
      } else {
        contenedorListado.classList.add('hidden');
      }
    } catch (e) { console.error(e); }
  }, 400);
}

async function ejecutarBusquedaDirecta() {
  var input = document.getElementById('searchInput');
  if (!input) return;
  var query = input.value.trim();
  if (!query) return;

  try {
    var response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&accept-language=${idiomaActual}&q=${encodeURIComponent(query)}`);
    var data = await response.json();
    if (data && data.length > 0) {
      map.setView([parseFloat(data[0].lat), parseFloat(data[0].lon)], 14);
      var lista = document.getElementById('searchSuggestions');
      if (lista) { lista.innerHTML = ""; lista.classList.add('hidden'); }
      input.blur();
    }
  } catch (e) { console.error(e); }
}

function volverAlHome() { map.setView([11.08, -74.05], 7); }

// ==========================================================================
// LISTA DE CAPAS
// ==========================================================================
var gruposAbiertos = {}; // recuerda qué grupos están desplegados al cambiar de idioma

function inicializarMenu() {
  var contenedor = document.getElementById('contenedor-capas');
  if (!contenedor) return;
  contenedor.innerHTML = '';
  var grupos = {};
  var ordenGrupos = [];

  capasProyecto.forEach(function(capa) {
    if (!grupos[capa.grupo]) { grupos[capa.grupo] = []; ordenGrupos.push(capa.grupo); }
    grupos[capa.grupo].push(capa);
  });

  ordenGrupos.forEach(function(nomGrupo) {
    var idBloque = 'grupo-' + nomGrupo.replace(/[^\w]+/g, '-');
    var abierto = !!gruposAbiertos[nomGrupo];

    var cabecera = document.createElement('button');
    cabecera.type = 'button';
    cabecera.className = 'cw-group';
    cabecera.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    cabecera.setAttribute('aria-controls', idBloque);
    cabecera.setAttribute('data-grupo', nomGrupo);
    cabecera.innerHTML =
      '<span>' + escaparHTML(textoLocal(NOMBRES_GRUPOS[nomGrupo], nomGrupo)) + '</span>' +
      '<span class="cw-group-right"><span class="cw-group-badge hidden"></span>' +
      '<i class="fa-solid fa-chevron-down cw-group-chevron"></i></span>';
    contenedor.appendChild(cabecera);

    var bloque = document.createElement('div');
    bloque.className = 'cw-group-items' + (abierto ? '' : ' hidden');
    bloque.id = idBloque;
    contenedor.appendChild(bloque);

    cabecera.onclick = function() {
      var ahoraAbierto = bloque.classList.contains('hidden');
      bloque.classList.toggle('hidden', !ahoraAbierto);
      cabecera.setAttribute('aria-expanded', ahoraAbierto ? 'true' : 'false');
      gruposAbiertos[nomGrupo] = ahoraAbierto;
    };

    grupos[nomGrupo].forEach(function(capa) {
      var activa = !!capasWMSActivas[capa.id];
      var item = document.createElement('label');
      item.className = 'cw-layer' + (activa ? ' active' : '');
      item.id = 'item-' + capa.id;

      var check = document.createElement('input');
      check.type = 'checkbox';
      check.id = 'chk-' + capa.id;
      check.checked = activa;
      check.addEventListener('change', function() { toggleCapa(capa.id, nombreCapa(capa)); });

      var texto = document.createElement('span');
      texto.textContent = nombreCapa(capa);

      item.appendChild(check);
      item.appendChild(texto);
      bloque.appendChild(item);
    });
  });

  actualizarContadoresGrupos();
}

function actualizarContadoresGrupos() {
  document.querySelectorAll('.cw-group').forEach(function(cab) {
    var grupo = cab.getAttribute('data-grupo');
    var n = capasProyecto.filter(function(c) { return c.grupo === grupo && capasWMSActivas[c.id]; }).length;
    var badge = cab.querySelector('.cw-group-badge');
    if (badge) {
      badge.textContent = n;
      badge.classList.toggle('hidden', n === 0);
    }
  });
}

// Funciones heredadas (los paneles laterales antiguos ya no existen)
function togglePanelLateral() { togglePanelControl(); }
function togglePanelDerecho() {}

function actualizarPanelInformacion() {
  var panelTexto = document.getElementById('panel-texto');
  var panelDescargas = document.getElementById('panel-descargas');
  var activas = Object.keys(capasWMSActivas);

  actualizarResumenPanel();
  actualizarContadoresGrupos();

  if (activas.length === 0) {
    if (panelTexto) panelTexto.innerHTML = '<p class="cw-legend-empty">' + escaparHTML(t('panel.noLayers')) + '</p>';
    if (panelDescargas) panelDescargas.innerHTML = '';
    return;
  }

  if (panelTexto) {
    panelTexto.innerHTML = '';
    activas.forEach(function(idCapa) {
      // GetLegendGraphic: un cuadro pequeño con el color de la capa
      var urlSwatch = `${wmsBaseUrl}?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&LAYER=coast_wind_data:${encodeURIComponent(idCapa)}&TRANSPARENT=true&LEGEND_OPTIONS=width:16;height:16;fontColor:0x000000;fontSize:1;forceRule:true;hideEmptyRules:true;layout:vertical`;

      var objetoCapa = capasProyecto.find(function(c) { return c.id === idCapa; });
      var nombreMostrar = objetoCapa ? nombreCapa(objetoCapa) : idCapa.replace(/_/g, ' ');

      var fila = document.createElement('div');
      fila.className = 'cw-legend-item';
      fila.innerHTML =
        '<span class="cw-legend-swatch"><img src="' + urlSwatch + '" alt="' + escaparHTML(t('legend.symbol')) + '" onerror="this.style.display=\'none\'"></span>' +
        '<span>' + escaparHTML(nombreMostrar) + '</span>';
      panelTexto.appendChild(fila);
    });
  }

  if (!panelDescargas) return; // El panel de descargas está deshabilitado en el HTML
}

// ==========================================================================
// UBICACIÓN
// ==========================================================================
var marcadorUbicacion = null;

function obtenerMiUbicacion() {
  if (!navigator.geolocation) {
    alert(t('map.noGeo'));
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
        .bindPopup('<b>' + escaparHTML(t('map.youAreHere')) + '</b>')
        .openPopup();
    },
    function(error) {
      alert(t('map.geoError') + error.message);
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  );
}

// ==========================================================================
// IMPORTAR ARCHIVOS VECTORIALES
// ==========================================================================
function estadoCarga(tipo, icono, texto) {
  var statusElem = document.getElementById('status-carga-vector');
  if (!statusElem) return;
  statusElem.className = 'cw-status is-' + tipo;
  statusElem.innerHTML = '<i class="fa-solid ' + icono + '"></i> <span></span>';
  statusElem.querySelector('span').textContent = texto;
}

async function procesarArchivoVector(file) {
  var infoBox = document.getElementById('info-archivo-cargado');
  var nombreElem = document.getElementById('nombre-archivo-cargado');

  try {
    if (infoBox) infoBox.classList.remove('hidden');
    if (nombreElem) nombreElem.textContent = file.name;
    estadoCarga('loading', 'fa-spinner fa-spin', t('upload.converting'));

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
      throw new Error(t('upload.errUnsupported'));
    }

    if (!geojson) throw new Error(t('upload.errNoGeom'));

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

      capaVector.bindPopup(popupCargando(t('upload.queryTitle'), null, t('upload.evaluating'))).openPopup();

      activarHerramientaDibujo('gisfile');
      await consultarGrillaPorGeometria(capaVector, bounds, t('upload.fileQuery', { nombre: file.name }));

      estadoCarga('ok', 'fa-circle-check', t('upload.done'));
    } else {
      throw new Error(t('upload.errNoCoords'));
    }

  } catch (err) {
    console.error("Error procesando archivo vectorial:", err);
    estadoCarga('error', 'fa-circle-xmark', err.message || t('upload.errRead'));
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

// ==========================================================================
// CARGA DE CAPAS TEMÁTICAS (caché de teselas)
// ==========================================================================
var totalCapasEnCarga = 0;
var capasCargadasContador = 0;

function actualizarBarraProgreso() {
  var contenedor = document.getElementById('contenedor-progreso');
  var barra = document.getElementById('barra-progreso-capas');
  var texto = document.getElementById('texto-progreso-capas');

  if (!contenedor || !barra || !texto) return;

  if (totalCapasEnCarga === 0) {
    contenedor.classList.add('hidden');
    barra.style.width = '0%';
    texto.textContent = '0%';
    return;
  }

  contenedor.classList.remove('hidden');
  var porcentaje = Math.round((capasCargadasContador / totalCapasEnCarga) * 100);
  if (porcentaje > 100) porcentaje = 100;

  barra.style.width = porcentaje + '%';
  texto.textContent = porcentaje + '%';

  // Al completar la carga de todas las capas, espera medio segundo y oculta la barra
  if (capasCargadasContador >= totalCapasEnCarga) {
    setTimeout(function() {
      contenedor.classList.add('hidden');
      barra.style.width = '0%';
      texto.textContent = '0%';
      totalCapasEnCarga = 0;
      capasCargadasContador = 0;
    }, 600);
  }
}

function toggleTodasLasCapas(activar) {
  if (activar) {
    // Cuenta únicamente las capas que están apagadas y se van a encender
    var capasAActivar = capasProyecto.filter(function(capa) {
      var checkBox = document.getElementById("chk-" + capa.id);
      return checkBox && !checkBox.checked;
    });

    totalCapasEnCarga = capasAActivar.length;
    capasCargadasContador = 0;
    actualizarBarraProgreso();

    capasAActivar.forEach(function(capa) {
      var checkBox = document.getElementById("chk-" + capa.id);
      if (checkBox) {
        checkBox.checked = true;
        toggleCapa(capa.id, nombreCapa(capa));
      }
    });
  } else {
    // Si se desactivan todas, reiniciamos el contador y ocultamos la barra
    totalCapasEnCarga = 0;
    capasCargadasContador = 0;
    actualizarBarraProgreso();

    capasProyecto.forEach(function(capa) {
      var checkBox = document.getElementById("chk-" + capa.id);
      if (checkBox && checkBox.checked) {
        checkBox.checked = false;
        toggleCapa(capa.id, nombreCapa(capa));
      }
    });
  }
}

// Opciones comunes: no pedir teselas durante la animación de zoom y conservar
// más teselas alrededor de la vista para que el paneo no las vuelva a solicitar.
var OPCIONES_TESELAS = {
  tileSize: 256,
  updateWhenZooming: false,
  updateWhenIdle: true,
  keepBuffer: 4
};

function crearCapaWMS(layerName) {
  return L.tileLayer.wms(wmsBaseUrl, Object.assign({}, OPCIONES_TESELAS, {
    layers: 'coast_wind_data:' + layerName,
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    styles: '',
    tiled: true,
    opacity: typeof opacidadWMSGlobal !== 'undefined' ? opacidadWMSGlobal : 1.0
  }));
}

function crearCapaTeselas(layerName) {
  if (!USAR_CACHE_TESELAS) return crearCapaWMS(layerName);

  var urlWMTS = `${WMTS_URL}?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0` +
    `&LAYER=${encodeURIComponent('coast_wind_data:' + layerName)}&STYLE=` +
    `&TILEMATRIXSET=${encodeURIComponent(WMTS_GRIDSET)}` +
    `&TILEMATRIX=${encodeURIComponent(WMTS_GRIDSET)}:{z}&TILEROW={y}&TILECOL={x}` +
    `&FORMAT=image/png`;

  var capa = L.tileLayer(urlWMTS, Object.assign({}, OPCIONES_TESELAS, {
    opacity: typeof opacidadWMSGlobal !== 'undefined' ? opacidadWMSGlobal : 1.0
  }));

  // Respaldo: si la capa NO tiene caché en GeoWebCache, se reemplaza por WMS.
  // Ojo: GeoWebCache responde con error las teselas que caen fuera de la extensión
  // de la capa (TileOutOfRange). Eso es normal y no debe provocar el cambio a WMS,
  // así que solo se cambia si en una carga completa NO llegó ninguna tesela válida.
  var reemplazada = false;
  var teselasOk = 0, teselasError = 0;
  capa.on('tileload', function() { teselasOk++; });
  capa.on('tileerror', function() { teselasError++; });
  capa.on('load', function() {
    if (reemplazada || teselasOk > 0 || teselasError === 0) return;
    if (capasWMSActivas[layerName] !== capa) return;
    reemplazada = true;
    console.warn(`La capa "${layerName}" no está en GeoWebCache; se carga por WMS.`);
    var capaWMS = crearCapaWMS(layerName);
    capasWMSActivas[layerName] = capaWMS;
    map.removeLayer(capa);
    capaWMS.addTo(map);
  });
  return capa;
}

function toggleCapa(layerName, tituloAmigable) {
  var checkBox = document.getElementById("chk-" + layerName);
  var containerItem = document.getElementById("item-" + layerName);
  if (!checkBox) return;

  if (checkBox.checked) {
    if (containerItem) containerItem.classList.add('active');
    if (capasWMSActivas[layerName]) map.removeLayer(capasWMSActivas[layerName]);

    var nuevaCapaWMS = crearCapaTeselas(layerName);

    // Control individual para contar cuando finaliza o falla la carga de los tiles de esta capa
    var finalizada = false;
    function alFinalizarCarga() {
      if (!finalizada) {
        finalizada = true;
        if (totalCapasEnCarga > 0) {
          capasCargadasContador++;
          actualizarBarraProgreso();
        }
      }
    }

    nuevaCapaWMS.on('load', alFinalizarCarga);
    nuevaCapaWMS.on('tileerror', alFinalizarCarga); // Evita que la barra se bloquee si falla la respuesta

    capasWMSActivas[layerName] = nuevaCapaWMS;
    nuevaCapaWMS.addTo(map);

  } else {
    if (containerItem) containerItem.classList.remove('active');
    if (capasWMSActivas[layerName]) {
      map.removeLayer(capasWMSActivas[layerName]);
      delete capasWMSActivas[layerName];
    }
  }

  actualizarPanelInformacion();
}

// ==========================================================================
// RELOJ (hora de Colombia, sin importar la zona horaria del visitante)
// ==========================================================================
var LOCALES_RELOJ = { es: 'es-CO', en: 'en-GB', pt: 'pt-BR' };

function actualizarRelojTopbar() {
  var elementoFecha = document.getElementById('topbar-reloj-nuevo');
  if (!elementoFecha) return;
  try {
    elementoFecha.textContent = new Intl.DateTimeFormat(LOCALES_RELOJ[idiomaActual] || 'es-CO', {
      timeZone: 'America/Bogota',
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(new Date());
  } catch (e) {
    elementoFecha.textContent = new Date().toLocaleString();
  }
}

if (window.intervaloReloj) clearInterval(window.intervaloReloj);

// ==========================================================================
// ARRANQUE
// ==========================================================================
function iniciarInterfaz() {
  idiomaActual = detectarIdiomaInicial();
  var selector = document.getElementById('lang-selector');
  if (selector) {
    selector.value = idiomaActual;
    selector.addEventListener('change', function(e) { cambiarIdioma(e.target.value); });
  }

  aplicarTraduccionesHTML();
  aplicarTema(temaActual());
  cambiarMapaBaseAdvanced(MAPA_BASE_POR_DEFECTO);
  estadoInicialPanel();
  inicializarMenu();
  construirGaleriaMapasBase();
  actualizarPanelInformacion();
  actualizarEstadoHerramienta();

  actualizarRelojTopbar();
  window.intervaloReloj = setInterval(actualizarRelojTopbar, 1000);

  var themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

  var panelToggle = document.getElementById('panel-toggle');
  if (panelToggle) panelToggle.addEventListener('click', togglePanelControl);

  var slider = document.getElementById("opacity-slider");
  if (slider) slider.addEventListener("input", ajustarOpacidadBase);

  // Cerrar sugerencias de búsqueda al tocar fuera
  document.addEventListener('click', function(e) {
    var lista = document.getElementById('searchSuggestions');
    var buscador = document.querySelector('.cw-search');
    if (lista && buscador && !buscador.contains(e.target)) lista.classList.add('hidden');
  });

  // Modal de términos
  var modal = document.getElementById("welcome-modal");
  var btnAccept = document.getElementById("btn-accept");
  var btnReject = document.getElementById("btn-reject");
  if (btnAccept && modal) {
    btnAccept.addEventListener("click", function() { modal.classList.add("hidden"); });
  }
  if (btnReject) {
    btnReject.addEventListener("click", function() {
      alert(t('modal.rejectAlert'));
      window.location.href = "https://www.sei.org/";
    });
  }

  // Importación de archivos
  var inputFile = document.getElementById('input-vector-file');
  var dropzone = document.getElementById('dropzone-vector');
  var btnLimpiar = document.getElementById('btn-limpiar-vector');

  if (inputFile) {
    inputFile.addEventListener('change', function(e) {
      if (e.target.files.length > 0) procesarArchivoVector(e.target.files[0]);
    });
  }
  if (dropzone) {
    dropzone.addEventListener('dragover', function(e) { e.preventDefault(); dropzone.classList.add('is-dragover'); });
    dropzone.addEventListener('dragleave', function(e) { e.preventDefault(); dropzone.classList.remove('is-dragover'); });
    dropzone.addEventListener('drop', function(e) {
      e.preventDefault();
      dropzone.classList.remove('is-dragover');
      if (e.dataTransfer.files.length > 0) procesarArchivoVector(e.dataTransfer.files[0]);
    });
  }
  if (btnLimpiar) btnLimpiar.addEventListener('click', limpiarVectorCargado);

  // Al pasar de escritorio a móvil (o al rotar la pantalla), recalcular el mapa
  var temporizadorResize;
  window.addEventListener('resize', function() {
    clearTimeout(temporizadorResize);
    temporizadorResize = setTimeout(function() { map.invalidateSize(); aplicarTraduccionesHTML(); actualizarIconoTema(); actualizarTituloPanel(); }, 150);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarInterfaz);
} else {
  iniciarInterfaz();
}
