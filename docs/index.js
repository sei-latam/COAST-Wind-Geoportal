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