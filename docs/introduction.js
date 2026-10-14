/* Páginas "Introducción" y "Contacto" — COAST-Wind (SEI-LA)
   Temas e idiomas compartidos con la página principal y el geovisor
   (mismas claves en localStorage):
     coast_theme = 'dark' | 'light'      coast_lang = 'es' | 'en' | 'pt'           */

// ==========================================================================
// IDIOMAS (ES / EN / PT)
// Para corregir un texto, edite este diccionario. Si falta una clave en
// inglés o portugués, se muestra el texto en español.
// ==========================================================================
var IDIOMAS_DISPONIBLES = ['es', 'en', 'pt'];

var TEXTOS = {
  es: {
    'header.home': 'Inicio',
    'header.login': 'Ingresar',
    'header.language': 'Idioma',
    'header.toLight': 'Cambiar a tema claro',
    'header.toDark': 'Cambiar a tema oscuro',
    'footer.rights': '© 2026 SEI-LA, Todos los derechos reservados.',
    'footer.about': 'Acerca de SEI-LA',
    'footer.policies': 'Privacidad y cookies (SEI)',

    // Introducción
    'intro.pageTitle': 'Introducción - COAST',
    'intro.headerTitle': 'Introducción a COAST',
    'intro.headerShort': 'Introducción',
    'intro.contents': 'Contenido',
    'intro.toggleIndex': 'Contraer o expandir el índice',
    'intro.nav.overview': 'Presentación',
    'intro.nav.description': 'Descripción',
    'intro.nav.team': 'Equipo',
    'intro.nav.topics': 'Temas/subtemas',
    'intro.overview.title': 'Presentación',
    'intro.overview.quote': 'Colombian Ocean Activity and Susceptibility Tool (COAST) - Wind',
    'intro.description.title': 'Descripción General',
    'intro.description.p1': 'COAST-Wind es una plataforma viva, colaborativa y en constante desarrollo que integra datos de actividad humana, ecosistemas, fauna, geomorfología, gestión y planificación marina en Colombia. Esta plataforma fue desarrollada por el Instituto de Ambiente de Estocolmo, Centro para Latinoamérica (SEI-LA) y contempla tres fases principales:',
    'intro.phase1.title': 'I. Base ecológica',
    'intro.phase1.text': 'Compilación de los principales conjuntos de datos en términos de actividad humana, ecosistemas, fauna, geomorfología y gestión marina.',
    'intro.phase2.title': 'II. Mapeo de presiones humanas',
    'intro.phase2.text': 'Procesamiento de los datos disponibles para identificar patrones y tendencias de uso humano del espacio marino.',
    'intro.phase3.title': 'III. Despliegue de la herramienta',
    'intro.phase3.text': 'Desarrollo y lanzamiento de un panel interactivo para compartir datos, explorar escenarios y visualizar resultados. Los productos principales incluyen mapas de susceptibilidad marino-costera que permiten identificar zonas de conflicto entre actividades marítimas y esfuerzos de conservación; una herramienta abierta y tipo panel para la difusión de datos y el apoyo a la toma de decisiones; y documentación técnica validada por expertos para fortalecer el trabajo de autoridades ambientales y actores locales en los procesos de planificación espacial marina.',
    'intro.team.title': 'Equipo de trabajo',
    'intro.team.profile': 'Perfil CV',
    'intro.topics.title': 'Temas y subtemas de investigación',
    'intro.topics.climate': 'Clima',
    'intro.topics.climateText': 'Política Climática, Mitigación, Adaptación.',
    'intro.topics.energy': 'Energía',
    'intro.topics.energyText': 'Energías Renovables.',
    'intro.topics.water': 'Agua',
    'intro.topics.waterText': 'Conexión Energía-Agua-Alimento, Recursos Hídricos.',

    // Contacto
    'contact.pageTitle': 'Contacto - COAST',
    'contact.headerTitle': 'Contacto y Soporte COAST',
    'contact.headerShort': 'Contacto',
    'contact.title': 'Contacto y Soporte COAST',
    'contact.p1': 'Invitamos a las instituciones y usuarios que deseen contribuir con datos que puedan ser útiles para el propósito de esta plataforma, a contactarse con el equipo de COAST-Wind a través del siguiente formulario.',
    'contact.p2': 'En COAST estamos comprometidos con brindarles la mejor asistencia. Por favor, complete la información a continuación para redactar su mensaje directamente a nuestro equipo.',
    'contact.name': 'Nombres y Apellidos',
    'contact.namePh': 'Escriba su nombre completo',
    'contact.email': 'E-mail o correo electrónico',
    'contact.emailPh': 'Escriba su correo electrónico',
    'contact.institution': 'Institución / Agencia / Universidad',
    'contact.institutionPh': 'Escriba el nombre de su institución, agencia o universidad',
    'contact.url': 'URL de archivos externos',
    'contact.urlPh': 'Inserte aquí la URL de archivos externos que considere relevantes',
    'contact.urlHelp': 'Utilice este campo si desea compartir servicios de mapas o Geoservicios (WMS, WFS, WMTS, etc.).',
    'contact.comments': 'Comentario/Sugerencia',
    'contact.commentsPh': 'Escriba aquí sus aportes, comentarios y sugerencias más relevantes sobre COAST',
    'contact.attachTitle': '¿Desea adjuntar archivos locales?',
    'contact.attachText': 'Al presionar "Enviar información", se abrirá su aplicación de correo (Outlook, Gmail, etc.) con el mensaje redactado, donde podrá adjuntar directamente los archivos deseados (.zip, .pdf, etc.).',
    'contact.submit': 'Enviar información'
  },

  en: {
    'header.home': 'Home',
    'header.login': 'Sign in',
    'header.language': 'Language',
    'header.toLight': 'Switch to light theme',
    'header.toDark': 'Switch to dark theme',
    'footer.rights': '© 2026 SEI-LA. All rights reserved.',
    'footer.about': 'About SEI-LA',
    'footer.policies': 'Privacy and cookies (SEI)',

    'intro.pageTitle': 'Introduction - COAST',
    'intro.headerTitle': 'Introduction to COAST',
    'intro.headerShort': 'Introduction',
    'intro.contents': 'Contents',
    'intro.toggleIndex': 'Collapse or expand the index',
    'intro.nav.overview': 'Overview',
    'intro.nav.description': 'Description',
    'intro.nav.team': 'Team',
    'intro.nav.topics': 'Topics/subtopics',
    'intro.overview.title': 'Overview',
    'intro.overview.quote': 'Colombian Ocean Activity and Susceptibility Tool (COAST) - Wind',
    'intro.description.title': 'General Description',
    'intro.description.p1': 'COAST-Wind is a living, collaborative and constantly evolving platform that brings together data on human activity, ecosystems, wildlife, geomorphology, management and marine planning in Colombia. The platform was developed by the Stockholm Environment Institute Latin America Centre (SEI-LA) and comprises three main phases:',
    'intro.phase1.title': 'I. Ecological baseline',
    'intro.phase1.text': 'Compilation of the main datasets on human activity, ecosystems, wildlife, geomorphology and marine management.',
    'intro.phase2.title': 'II. Mapping human pressures',
    'intro.phase2.text': 'Processing of available data to identify patterns and trends in human use of marine space.',
    'intro.phase3.title': 'III. Tool deployment',
    'intro.phase3.text': 'Development and launch of an interactive dashboard to share data, explore scenarios and visualize results. The main outputs include marine-coastal susceptibility maps that identify areas of conflict between maritime activities and conservation efforts; an open, dashboard-style tool for data dissemination and decision support; and expert-validated technical documentation to strengthen the work of environmental authorities and local stakeholders in marine spatial planning processes.',
    'intro.team.title': 'Project team',
    'intro.team.profile': 'CV profile',
    'intro.topics.title': 'Research topics and subtopics',
    'intro.topics.climate': 'Climate',
    'intro.topics.climateText': 'Climate policy, mitigation, adaptation.',
    'intro.topics.energy': 'Energy',
    'intro.topics.energyText': 'Renewable energy.',
    'intro.topics.water': 'Water',
    'intro.topics.waterText': 'Water-energy-food nexus, water resources.',

    'contact.pageTitle': 'Contact - COAST',
    'contact.headerTitle': 'COAST Contact and Support',
    'contact.headerShort': 'Contact',
    'contact.title': 'COAST Contact and Support',
    'contact.p1': 'We invite institutions and users who wish to contribute data useful to the purpose of this platform to contact the COAST-Wind team through the following form.',
    'contact.p2': 'At COAST we are committed to providing you with the best support. Please fill in the information below to draft your message directly to our team.',
    'contact.name': 'Full name',
    'contact.namePh': 'Enter your full name',
    'contact.email': 'E-mail address',
    'contact.emailPh': 'Enter your e-mail address',
    'contact.institution': 'Institution / Agency / University',
    'contact.institutionPh': 'Enter the name of your institution, agency or university',
    'contact.url': 'External files URL',
    'contact.urlPh': 'Paste here the URL of any external files you consider relevant',
    'contact.urlHelp': 'Use this field if you want to share map services or geoservices (WMS, WFS, WMTS, etc.).',
    'contact.comments': 'Comment/Suggestion',
    'contact.commentsPh': 'Write your contributions, comments and suggestions about COAST here',
    'contact.attachTitle': 'Do you want to attach local files?',
    'contact.attachText': 'When you press "Send information", your e-mail application (Outlook, Gmail, etc.) will open with the message drafted, where you can attach the files you want directly (.zip, .pdf, etc.).',
    'contact.submit': 'Send information'
  },

  pt: {
    'header.home': 'Início',
    'header.login': 'Entrar',
    'header.language': 'Idioma',
    'header.toLight': 'Mudar para tema claro',
    'header.toDark': 'Mudar para tema escuro',
    'footer.rights': '© 2026 SEI-LA. Todos os direitos reservados.',
    'footer.about': 'Sobre o SEI-LA',
    'footer.policies': 'Privacidade e cookies (SEI)',

    'intro.pageTitle': 'Introdução - COAST',
    'intro.headerTitle': 'Introdução ao COAST',
    'intro.headerShort': 'Introdução',
    'intro.contents': 'Conteúdo',
    'intro.toggleIndex': 'Recolher ou expandir o índice',
    'intro.nav.overview': 'Apresentação',
    'intro.nav.description': 'Descrição',
    'intro.nav.team': 'Equipe',
    'intro.nav.topics': 'Temas/subtemas',
    'intro.overview.title': 'Apresentação',
    'intro.overview.quote': 'Colombian Ocean Activity and Susceptibility Tool (COAST) - Wind',
    'intro.description.title': 'Descrição Geral',
    'intro.description.p1': 'O COAST-Wind é uma plataforma viva, colaborativa e em constante desenvolvimento que integra dados de atividade humana, ecossistemas, fauna, geomorfologia, gestão e planejamento marinho na Colômbia. A plataforma foi desenvolvida pelo Instituto Ambiental de Estocolmo, Centro para a América Latina (SEI-LA), e contempla três fases principais:',
    'intro.phase1.title': 'I. Base ecológica',
    'intro.phase1.text': 'Compilação dos principais conjuntos de dados sobre atividade humana, ecossistemas, fauna, geomorfologia e gestão marinha.',
    'intro.phase2.title': 'II. Mapeamento das pressões humanas',
    'intro.phase2.text': 'Processamento dos dados disponíveis para identificar padrões e tendências de uso humano do espaço marinho.',
    'intro.phase3.title': 'III. Implantação da ferramenta',
    'intro.phase3.text': 'Desenvolvimento e lançamento de um painel interativo para compartilhar dados, explorar cenários e visualizar resultados. Os principais produtos incluem mapas de suscetibilidade marinho-costeira que permitem identificar zonas de conflito entre atividades marítimas e esforços de conservação; uma ferramenta aberta, em formato de painel, para a difusão de dados e o apoio à tomada de decisões; e documentação técnica validada por especialistas para fortalecer o trabalho das autoridades ambientais e dos atores locais nos processos de planejamento espacial marinho.',
    'intro.team.title': 'Equipe de trabalho',
    'intro.team.profile': 'Perfil CV',
    'intro.topics.title': 'Temas e subtemas de pesquisa',
    'intro.topics.climate': 'Clima',
    'intro.topics.climateText': 'Política climática, mitigação, adaptação.',
    'intro.topics.energy': 'Energia',
    'intro.topics.energyText': 'Energias renováveis.',
    'intro.topics.water': 'Água',
    'intro.topics.waterText': 'Nexo água-energia-alimento, recursos hídricos.',

    'contact.pageTitle': 'Contato - COAST',
    'contact.headerTitle': 'Contato e Suporte COAST',
    'contact.headerShort': 'Contato',
    'contact.title': 'Contato e Suporte COAST',
    'contact.p1': 'Convidamos as instituições e os usuários que desejem contribuir com dados úteis ao propósito desta plataforma a entrar em contato com a equipe do COAST-Wind por meio do formulário a seguir.',
    'contact.p2': 'No COAST estamos comprometidos em oferecer o melhor suporte. Por favor, preencha as informações abaixo para redigir sua mensagem diretamente à nossa equipe.',
    'contact.name': 'Nome completo',
    'contact.namePh': 'Digite seu nome completo',
    'contact.email': 'E-mail',
    'contact.emailPh': 'Digite seu e-mail',
    'contact.institution': 'Instituição / Agência / Universidade',
    'contact.institutionPh': 'Digite o nome da sua instituição, agência ou universidade',
    'contact.url': 'URL de arquivos externos',
    'contact.urlPh': 'Insira aqui a URL de arquivos externos que considere relevantes',
    'contact.urlHelp': 'Use este campo se desejar compartilhar serviços de mapas ou geosserviços (WMS, WFS, WMTS etc.).',
    'contact.comments': 'Comentário/Sugestão',
    'contact.commentsPh': 'Escreva aqui suas contribuições, comentários e sugestões sobre o COAST',
    'contact.attachTitle': 'Deseja anexar arquivos locais?',
    'contact.attachText': 'Ao clicar em "Enviar informações", seu aplicativo de e-mail (Outlook, Gmail etc.) será aberto com a mensagem redigida, onde você poderá anexar diretamente os arquivos desejados (.zip, .pdf etc.).',
    'contact.submit': 'Enviar informações'
  }
};

var idiomaActual = 'es';

function t(clave) {
  return (TEXTOS[idiomaActual] && TEXTOS[idiomaActual][clave]) || TEXTOS.es[clave] || clave;
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

function aplicarTraducciones() {
  document.documentElement.setAttribute('lang', idiomaActual);
  var claveTitulo = document.body && document.body.getAttribute('data-page-title');
  if (claveTitulo) document.title = t(claveTitulo);
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
    var txt = t(el.getAttribute('data-i18n-title'));
    el.setAttribute('title', txt);
    el.setAttribute('aria-label', txt);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
}

function cambiarIdioma(idioma) {
  if (IDIOMAS_DISPONIBLES.indexOf(idioma) === -1) idioma = 'es';
  idiomaActual = idioma;
  try { localStorage.setItem('coast_lang', idioma); } catch (e) {}
  var selector = document.getElementById('lang-selector');
  if (selector) selector.value = idioma;
  aplicarTraducciones();
  actualizarIconoTema();
}

// ==========================================================================
// TEMA (oscuro / claro) — igual que el geovisor y la página principal
// ==========================================================================
function temaActual() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function aplicarTema(tema) {
  tema = tema === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', tema);
  try { localStorage.setItem('coast_theme', tema); localStorage.setItem('theme', tema); } catch (e) {}
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', tema === 'light' ? '#ffffff' : '#0f172a');
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
// ÍNDICE LATERAL (solo en Introducción)
// ==========================================================================
function toggleSidebar() {
  var lateral = document.getElementById('sidebar');
  if (!lateral) return;
  var colapsado = lateral.classList.toggle('is-collapsed');
  try { localStorage.setItem('coast_intro_index', colapsado ? 'colapsado' : 'abierto'); } catch (e) {}
}

// Resalta en el índice la sección que se está leyendo
function iniciarIndiceActivo() {
  var enlaces = Array.prototype.slice.call(document.querySelectorAll('.cp-side-link[href^="#"]'));
  if (!enlaces.length || !('IntersectionObserver' in window)) return;

  var porId = {};
  enlaces.forEach(function(a) { porId[a.getAttribute('href').slice(1)] = a; });

  var observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(e) {
      if (!e.isIntersecting) return;
      enlaces.forEach(function(a) { a.classList.remove('active'); });
      var enlace = porId[e.target.id];
      if (enlace) {
        enlace.classList.add('active');
        // En el teléfono, la barra horizontal se desplaza para mostrar el enlace activo
        if (enlace.scrollIntoView && window.matchMedia('(max-width: 767px)').matches) {
          enlace.parentNode.scrollTo({ left: enlace.offsetLeft - 8, behavior: 'smooth' });
        }
      }
    });
  }, { rootMargin: '-35% 0px -60% 0px' });

  Object.keys(porId).forEach(function(id) {
    var seccion = document.getElementById(id);
    if (seccion) observador.observe(seccion);
  });
}

// Ninguna página del sitio usa ya Google Translate: se borra la cookie antigua "googtrans"
function borrarCookieTraductorAntiguo() {
  var expira = '; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  var dominio = window.location.hostname;
  try {
    document.cookie = 'googtrans=' + expira;
    if (dominio && dominio.indexOf('.') !== -1) {
      document.cookie = 'googtrans=' + expira + '; domain=' + dominio;
      document.cookie = 'googtrans=' + expira + '; domain=.' + dominio.replace(/^www\./, '');
    }
  } catch (e) {}
}

// ==========================================================================
// ARRANQUE
// ==========================================================================
function iniciarPagina() {
  idiomaActual = detectarIdiomaInicial();
  var selector = document.getElementById('lang-selector');
  if (selector) {
    selector.value = idiomaActual;
    selector.addEventListener('change', function(e) { cambiarIdioma(e.target.value); });
  }
  aplicarTraducciones();
  aplicarTema(temaActual());
  borrarCookieTraductorAntiguo();

  var botonTema = document.getElementById('theme-toggle');
  if (botonTema) botonTema.addEventListener('click', toggleTheme);

  var lateral = document.getElementById('sidebar');
  var botonIndice = document.getElementById('sidebar-toggle');
  if (botonIndice) botonIndice.addEventListener('click', toggleSidebar);
  try {
    if (lateral && localStorage.getItem('coast_intro_index') === 'colapsado') lateral.classList.add('is-collapsed');
  } catch (e) {}

  iniciarIndiceActivo();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarPagina);
} else {
  iniciarPagina();
}
