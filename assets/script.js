// Detect language from URL path
const path = window.location.pathname;
const lang = path.includes('/hr/') ? 'hr' : 'en';

// Inject language-specific footer
fetch(`/assets/footer-${lang}.html`)
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  });
