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
    'intro.overview.quote': 'COAST: una herramienta para integrar actividad humana y susceptibilidad ambiental en la Planificación Espacial Marina',
    'intro.overview.p1': 'La herramienta COAST integra información sobre la actividad humana en los océanos con un análisis de sensibilidad ambiental, para desarrollar un índice de susceptibilidad marino-costera que apoye la planificación espacial marina.',
    'intro.description.title': 'Descripción General',
    'intro.description.p1': 'Para apoyar la planificación sostenible de los océanos en Colombia y el desarrollo responsable de infraestructura costa afuera, este proyecto desarrollará la herramienta COAST.',
    'intro.description.p2': 'COAST integrará información sobre actividades humanas en el mar con análisis de sensibilidad ambiental para producir un Índice de Susceptibilidad Marino-Costero, que servirá de insumo para la toma de decisiones en procesos de ordenamiento espacial marino. COAST combinará datos sobre infraestructura marina, tráfico de embarcaciones, batimetría, pesca y otros usos marinos con información ecológica y de planificación territorial de Colombia. Esto permitirá identificar zonas de alto riesgo donde el desarrollo costa afuera podría afectar áreas marinas protegidas, puntos críticos de biodiversidad o pesquerías de pequeña escala, contribuyendo a reducir conflictos y fortalecer la gobernanza ambiental. El proyecto se desarrollará mediante una metodología de cuatro fases:',
    'intro.phase1.title': 'I. Base ecológica',
    'intro.phase1.text': 'Compilación de los principales conjuntos de datos ecológicos del país para desarrollar un Índice de Sensibilidad Ecológica ponderado.',
    'intro.phase2.title': 'II. Mapeo de presiones humanas',
    'intro.phase2.text': 'Procesamiento de los datos disponibles para identificar patrones y tendencias de uso humano del espacio marino.',
    'intro.phase3.title': 'III. Índice de Susceptibilidad Marino-Costero',
    'intro.phase3.text': 'Integración de la sensibilidad ecológica con las presiones humanas, validada con actores clave.',
    'intro.phase4.title': 'IV. Despliegue de la herramienta',
    'intro.phase4.text': 'Desarrollo y lanzamiento de un panel interactivo para compartir datos, explorar escenarios y visualizar resultados. Los productos principales incluyen mapas de susceptibilidad marino-costera que permiten identificar zonas de conflicto entre actividades marítimas y esfuerzos de conservación; una herramienta abierta y tipo panel para la difusión de datos y el apoyo a la toma de decisiones; y documentación técnica validada por expertos para fortalecer el trabajo de autoridades ambientales y actores locales en los procesos de planificación espacial marina.',
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
    'intro.overview.quote': 'COAST: a tool to integrate human activity and environmental susceptibility into Marine Spatial Planning',
    'intro.overview.p1': 'The COAST tool brings together information on human activity in the oceans with an environmental sensitivity analysis to build a marine-coastal susceptibility index that supports marine spatial planning.',
    'intro.description.title': 'General Description',
    'intro.description.p1': 'To support sustainable ocean planning in Colombia and the responsible development of offshore infrastructure, this project will develop the COAST tool.',
    'intro.description.p2': 'COAST will combine information on human activities at sea with environmental sensitivity analysis to produce a Marine-Coastal Susceptibility Index, which will inform decision-making in marine spatial planning processes. COAST will bring together data on marine infrastructure, vessel traffic, bathymetry, fishing and other marine uses with ecological and territorial planning information for Colombia. This will make it possible to identify high-risk areas where offshore development could affect marine protected areas, biodiversity hotspots or small-scale fisheries, helping to reduce conflicts and strengthen environmental governance. The project will follow a four-phase methodology:',
    'intro.phase1.title': 'I. Ecological baseline',
    'intro.phase1.text': 'Compilation of the country\'s main ecological datasets to build a weighted Ecological Sensitivity Index.',
    'intro.phase2.title': 'II. Mapping human pressures',
    'intro.phase2.text': 'Processing of available data to identify patterns and trends in human use of marine space.',
    'intro.phase3.title': 'III. Marine-Coastal Susceptibility Index',
    'intro.phase3.text': 'Integration of ecological sensitivity with human pressures, validated with key stakeholders.',
    'intro.phase4.title': 'IV. Tool deployment',
    'intro.phase4.text': 'Development and launch of an interactive dashboard to share data, explore scenarios and visualize results. The main outputs include marine-coastal susceptibility maps that identify areas of conflict between maritime activities and conservation efforts; an open, dashboard-style tool for data dissemination and decision support; and expert-validated technical documentation to strengthen the work of environmental authorities and local stakeholders in marine spatial planning processes.',
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
    'intro.overview.quote': 'COAST: uma ferramenta para integrar a atividade humana e a suscetibilidade ambiental no Planejamento Espacial Marinho',
    'intro.overview.p1': 'A ferramenta COAST integra informações sobre a atividade humana nos oceanos com uma análise de sensibilidade ambiental, para desenvolver um índice de suscetibilidade marinho-costeira que apoie o planejamento espacial marinho.',
    'intro.description.title': 'Descrição Geral',
    'intro.description.p1': 'Para apoiar o planejamento sustentável dos oceanos na Colômbia e o desenvolvimento responsável de infraestrutura offshore, este projeto desenvolverá a ferramenta COAST.',
    'intro.description.p2': 'O COAST integrará informações sobre atividades humanas no mar com análises de sensibilidade ambiental para produzir um Índice de Suscetibilidade Marinho-Costeira, que servirá de subsídio para a tomada de decisões nos processos de ordenamento espacial marinho. O COAST combinará dados sobre infraestrutura marinha, tráfego de embarcações, batimetria, pesca e outros usos marinhos com informações ecológicas e de planejamento territorial da Colômbia. Isso permitirá identificar zonas de alto risco onde o desenvolvimento offshore poderia afetar áreas marinhas protegidas, pontos críticos de biodiversidade ou a pesca de pequena escala, contribuindo para reduzir conflitos e fortalecer a governança ambiental. O projeto será desenvolvido por meio de uma metodologia em quatro fases:',
    'intro.phase1.title': 'I. Base ecológica',
    'intro.phase1.text': 'Compilação dos principais conjuntos de dados ecológicos do país para desenvolver um Índice de Sensibilidade Ecológica ponderado.',
    'intro.phase2.title': 'II. Mapeamento das pressões humanas',
    'intro.phase2.text': 'Processamento dos dados disponíveis para identificar padrões e tendências de uso humano do espaço marinho.',
    'intro.phase3.title': 'III. Índice de Suscetibilidade Marinho-Costeira',
    'intro.phase3.text': 'Integração da sensibilidade ecológica com as pressões humanas, validada com atores-chave.',
    'intro.phase4.title': 'IV. Implantação da ferramenta',
    'intro.phase4.text': 'Desenvolvimento e lançamento de um painel interativo para compartilhar dados, explorar cenários e visualizar resultados. Os principais produtos incluem mapas de suscetibilidade marinho-costeira que permitem identificar zonas de conflito entre atividades marítimas e esforços de conservação; uma ferramenta aberta, em formato de painel, para a difusão de dados e o apoio à tomada de decisões; e documentação técnica validada por especialistas para fortalecer o trabalho das autoridades ambientais e dos atores locais nos processos de planejamento espacial marinho.',
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
