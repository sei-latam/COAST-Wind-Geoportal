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
    if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
    localStorage.setItem('theme', 'light');
  } else {
    if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
    localStorage.setItem('theme', 'dark');
  }
}

// 4. Inicializador de procesos al cargar el DOM
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
    if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
  }
});



// 5. Sistema de Traducción Automática (Google Translate)
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'en,es',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

function changeLanguage(lang) {
  const iframe = document.querySelector('.goog-te-menu-frame');
  if (!iframe) {
    setTimeout(() => changeLanguage(lang), 300);
    return;
  }
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const languages = doc.querySelectorAll('.goog-te-menu2-item span.text');
  let targetNode = null;
  
  languages.forEach(node => {
    if (lang === 'en' && (node.textContent.includes('Inglés') || node.textContent.includes('English'))) {
      targetNode = node;
    } else if (lang === 'es' && (node.textContent.includes('Español') || node.textContent.includes('Spanish'))) {
      targetNode = node;
    }
  });

  if (targetNode) targetNode.click();
}

// Agregar este escuchador dentro del bloque document.addEventListener('DOMContentLoaded', ...) existente:
document.addEventListener('DOMContentLoaded', () => {
  const langSelector = document.getElementById('lang-selector');
  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }
});