// 🌐 Detect language from URL
const path = window.location.pathname;
const lang = path.includes('/hr/') ? 'hr' : 'english';

// 📦 Inject header
fetch(`/assets/header-${lang}.html`)
  .then(res => res.text())
  .then(html => document.body.insertAdjacentHTML('afterbegin', html));

// 📦 Inject footer
fetch(`/assets/footer-${lang}.html`)
  .then(res => res.text())
  .then(html => document.body.insertAdjacentHTML('beforeend', html));

// 📦 Inject extra actions
fetch(`/assets/extra-actions-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    document.getElementById('quiz')?.insertAdjacentHTML('beforeend', html);
  });

// 📲 Localized WhatsApp message
document.addEventListener('click', function (e) {
  if (e.target?.id === 'whatsappShareBtn') {
    const messages = {
      english: "Check out your astro quiz result! 🌟 https://astro.myDomain.com",
      hr: "Pogledaj svoj astrološki rezultat! 🌟 https://astro.myDomain.com"
    };
    const message = encodeURIComponent(messages[lang]);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }
});

// 📥 Load correct question set (optional)
const questionFile = `/${lang}/quiz15question/questions.js`;
const script = document.createElement('script');
script.src = questionFile;
document.head.appendChild(script);
