// 🌐 Detect language from URL
const path = window.location.pathname;
const lang = path.includes('/hr/') ? 'hr' : 'en';

// 📦 Inject header
fetch(`/astro-quiz-site/assets/header-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);

    // ✅ Now that header is injected, bind menu toggle
    const toggle = document.getElementById("menuToggle");
    const links = document.getElementById("menuLinks");

    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("show");
      });
    }
  });

// 📦 Inject footer
fetch(`/astro-quiz-site/assets/footer-${lang}.html`)
  .then(res => res.text())
  .then(html => document.body.insertAdjacentHTML('beforeend', html));

// 📦 Inject extra actions
fetch(`/astro-quiz-site/assets/extra-actions-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    document.getElementById('quiz')?.insertAdjacentHTML('beforeend', html);
  });

// 📲 Localized WhatsApp message
document.addEventListener('click', function (e) {
  if (e.target?.id === 'whatsappShareBtn') {
    const messages = {
      en: "Check out your astro quiz result! 🌟 https://eurogb.github.io/astro-quiz-site/en/",
      hr: "Pogledaj svoj astrološki rezultat! 🌟 https://eurogb.github.io/astro-quiz-site/hr/"
    };
    const message = encodeURIComponent(messages[lang]);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }
});

// 📥 Load correct question set
const questionFile = lang === 'hr'
  ? '/astro-quiz-site/hr/astro-kviz-15-pitanja/questions.js'
  : '/astro-quiz-site/en/quiz-15-Questions/questions.js';

const script = document.createElement('script');
script.src = questionFile;
script.onload = () => {
  if (typeof allQuizSets !== 'undefined') {
    startQuiz?.(); // ✅ Start only after questions are loaded
  } else {
    console.error("Quiz data not found.");
  }
};
document.head.appendChild(script);
