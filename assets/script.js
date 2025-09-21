// Detect language from URL path
const path = window.location.pathname;
const lang = path.includes('/hr/') ? 'hr' : 'en';

// Inject language-specific footer
fetch(`/assets/footer-${lang}.html`)
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  });

// Inject language-specific extra actions
fetch(`/assets/extra-actions-${lang}.html`)
  .then(response => response.text())
  .then(html => {
    document.getElementById('quiz')?.insertAdjacentHTML('beforeend', html);
  });

// WhatsApp share logic
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'whatsappShareBtn') {
    const message = encodeURIComponent("Check out your astro quiz result! 🌟 https://astro.myDomain.com");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }
});
