/* Página principal COAST-Wind — SEI-LA
   Temas e idiomas compartidos con el geovisor (mismas claves en localStorage):
     coast_theme = 'dark' | 'light'      coast_lang = 'es' | 'en' | 'pt'           */

// ==========================================================================
// IDIOMAS (ES / EN / PT)
// ==========================================================================
var IDIOMAS_DISPONIBLES = ['es', 'en', 'pt'];

var TEXTOS = {
  es: {
    'header.welcome': 'Bienvenido(a) a COAST - Wind',
    'header.timezone': 'Colombia UTC-5',
    'header.login': 'Ingresar',
    'header.language': 'Idioma',
    'header.toLight': 'Cambiar a tema claro',
    'header.toDark': 'Cambiar a tema oscuro',
    'nav.intro': 'Introducción',
    'nav.geovisor': 'Geovisor',
    'nav.contact': 'Contacto',
    'cards.intro': 'Conoce con mayor detalle el proyecto COAST - Wind.',
    'cards.geovisor': 'Visualiza los resultados de los análisis de COAST - Wind en un entorno interactivo.',
    'cards.contact': 'Ponte en contacto con nosotros para obtener más información o asistencia.',
    'cards.open': 'Abrir',
    'footer.rights': '© 2026 SEI-LA, Todos los derechos reservados.',
    'footer.more': 'Informaciones adicionales',
    'footer.about': 'Acerca de SEI-LA',
    'footer.policies': 'Privacidad y cookies (SEI)'
  },
  en: {
    'header.welcome': 'Welcome to COAST - Wind',
    'header.timezone': 'Colombia UTC-5',
    'header.login': 'Sign in',
    'header.language': 'Language',
    'header.toLight': 'Switch to light theme',
    'header.toDark': 'Switch to dark theme',
    'nav.intro': 'Introduction',
    'nav.geovisor': 'Geoviewer',
    'nav.contact': 'Contact',
    'cards.intro': 'Learn more about the COAST - Wind project.',
    'cards.geovisor': 'Explore the results of the COAST - Wind analyses in an interactive environment.',
    'cards.contact': 'Get in touch with us for more information or support.',
    'cards.open': 'Open',
    'footer.rights': '© 2026 SEI-LA. All rights reserved.',
    'footer.more': 'More information',
    'footer.about': 'About SEI-LA',
    'footer.policies': 'Privacy and cookies (SEI)'
  },
  pt: {
    'header.welcome': 'Bem-vindo(a) ao COAST - Wind',
    'header.timezone': 'Colômbia UTC-5',
    'header.login': 'Entrar',
    'header.language': 'Idioma',
    'header.toLight': 'Mudar para tema claro',
    'header.toDark': 'Mudar para tema escuro',
    'nav.intro': 'Introdução',
    'nav.geovisor': 'Geovisor',
    'nav.contact': 'Contato',
    'cards.intro': 'Conheça em mais detalhes o projeto COAST - Wind.',
    'cards.geovisor': 'Visualize os resultados das análises do COAST - Wind em um ambiente interativo.',
    'cards.contact': 'Entre em contato conosco para obter mais informações ou suporte.',
    'cards.open': 'Abrir',
    'footer.rights': '© 2026 SEI-LA. Todos os direitos reservados.',
    'footer.more': 'Mais informações',
    'footer.about': 'Sobre o SEI-LA',
    'footer.policies': 'Privacidade e cookies (SEI)'
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
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
    var txt = t(el.getAttribute('data-i18n-title'));
    el.setAttribute('title', txt);
    el.setAttribute('aria-label', txt);
  });
}

// Las páginas que aún usan Google Translate (introducción, contacto) leen la cookie "googtrans".
// Se mantiene sincronizada para que el idioma elegido aquí también se aplique allá.
function sincronizarCookieTraductor(idioma) {
  var dominio = window.location.hostname;
  var expira = idioma === 'es' ? '; expires=Thu, 01 Jan 1970 00:00:00 GMT' : '';
  var valor = idioma === 'es' ? '' : '/es/' + idioma;
  try {
    document.cookie = 'googtrans=' + valor + '; path=/' + expira;
    if (dominio && dominio.indexOf('.') !== -1) {
      document.cookie = 'googtrans=' + valor + '; path=/; domain=' + dominio + expira;
    }
  } catch (e) {}
}

function cambiarIdioma(idioma) {
  if (IDIOMAS_DISPONIBLES.indexOf(idioma) === -1) idioma = 'es';
  idiomaActual = idioma;
  try { localStorage.setItem('coast_lang', idioma); } catch (e) {}
  sincronizarCookieTraductor(idioma);
  var selector = document.getElementById('lang-selector');
  if (selector) selector.value = idioma;
  aplicarTraducciones();
  actualizarIconoTema();
  actualizarReloj();
  actualizarVistasPrevias();
}

// ==========================================================================
// TEMA (oscuro / claro) — igual que el geovisor
// ==========================================================================
function temaActual() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function aplicarTema(tema) {
  tema = tema === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', tema);
  // "theme" se guarda también por compatibilidad con las páginas de introducción y contacto
  try { localStorage.setItem('coast_theme', tema); localStorage.setItem('theme', tema); } catch (e) {}
  if (document.body) document.body.classList.toggle('light-theme', tema === 'light');
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
  actualizarVistasPrevias();
}

// ==========================================================================
// RELOJ (hora de Colombia, mismo formato que el geovisor)
// ==========================================================================
var LOCALES_RELOJ = { es: 'es-CO', en: 'en-GB', pt: 'pt-BR' };

function actualizarReloj() {
  var el = document.getElementById('topbar-datetime');
  if (!el) return;
  try {
    el.textContent = new Intl.DateTimeFormat(LOCALES_RELOJ[idiomaActual] || 'es-CO', {
      timeZone: 'America/Bogota',
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(new Date());
  } catch (e) {
    el.textContent = new Date().toLocaleString();
  }
}

// ==========================================================================
// VISTAS PREVIAS DE LAS PÁGINAS (tarjetas)
// Cada tarjeta muestra la página real reducida dentro de un iframe.
// Solo se cargan en pantallas grandes y cuando la tarjeta es visible,
// para no gastar datos en el teléfono.
// ==========================================================================
var ANCHO_VIRTUAL = 1440;     // tamaño "de escritorio" con el que se dibuja la vista previa
var ALTO_VIRTUAL = 900;
var vistasPreviasActivas = window.matchMedia ? window.matchMedia('(min-width: 768px)').matches : true;

function ajustarEscala(contenedor) {
  var iframe = contenedor.querySelector('iframe');
  if (!iframe) return;
  var escala = contenedor.clientWidth / ANCHO_VIRTUAL;
  iframe.style.transform = 'scale(' + escala + ')';
  // Que el alto visible coincida con la proporción del contenedor
  iframe.style.height = Math.max(ALTO_VIRTUAL, Math.ceil(contenedor.clientHeight / escala)) + 'px';
}

function limpiarPaginaPrevia(iframe) {
  // Mismo dominio: se puede ocultar el aviso de términos del geovisor dentro de la vista previa
  try {
    var doc = iframe.contentDocument;
    if (!doc) return;
    var modal = doc.getElementById('welcome-modal');
    if (modal) modal.classList.add('hidden');
    var estilo = doc.createElement('style');
    estilo.textContent = '#welcome-modal{display:none!important}html,body{overflow:hidden!important}';
    (doc.head || doc.documentElement).appendChild(estilo);
  } catch (e) { /* abierto como archivo local: no se puede acceder, no pasa nada */ }
}

function cargarVistaPrevia(contenedor) {
  if (contenedor.querySelector('iframe')) return;
  var url = contenedor.getAttribute('data-preview');
  var iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.title = '';
  iframe.setAttribute('aria-hidden', 'true');
  iframe.setAttribute('tabindex', '-1');
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('scrolling', 'no');
  iframe.addEventListener('load', function() {
    limpiarPaginaPrevia(iframe);
    contenedor.classList.add('is-ready');
  });
  contenedor.insertBefore(iframe, contenedor.firstChild);
  ajustarEscala(contenedor);
}

function iniciarVistasPrevias() {
  var contenedores = document.querySelectorAll('.cx-preview[data-preview]');
  if (!vistasPreviasActivas || !contenedores.length) return;

  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function(entradas) {
      entradas.forEach(function(e) {
        if (e.isIntersecting) { cargarVistaPrevia(e.target); observador.unobserve(e.target); }
      });
    }, { rootMargin: '200px' });
    contenedores.forEach(function(c) { observador.observe(c); });
  } else {
    contenedores.forEach(cargarVistaPrevia);
  }

  var temporizador;
  window.addEventListener('resize', function() {
    clearTimeout(temporizador);
    temporizador = setTimeout(function() { contenedores.forEach(ajustarEscala); }, 120);
  });
}

// Al cambiar tema o idioma, las vistas previas se actualizan
function actualizarVistasPrevias() {
  document.querySelectorAll('.cx-preview iframe').forEach(function(iframe) {
    try {
      var w = iframe.contentWindow;
      if (w && typeof w.aplicarTema === 'function' && typeof w.cambiarIdioma === 'function') {
        w.aplicarTema(temaActual());          // geovisor: se actualiza sin recargar
        w.cambiarIdioma(idiomaActual);
        return;
      }
      iframe.parentNode.classList.remove('is-ready');
      w.location.reload();                   // otras páginas: se recargan
    } catch (e) { /* sin acceso (archivo local) */ }
  });
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

  var botonTema = document.getElementById('theme-toggle');
  if (botonTema) botonTema.addEventListener('click', toggleTheme);

  actualizarReloj();
  setInterval(actualizarReloj, 1000);

  iniciarVistasPrevias();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarPagina);
} else {
  iniciarPagina();
}
