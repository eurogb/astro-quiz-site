// 🌐 Detect language from URL
const path = window.location.pathname;
const lang = path.includes('/hr/') ? 'hr' : 'en';

// 📦 Inject header
fetch(`/astro-quiz-site/assets/header-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);

    // ☰ Menu toggle
    const toggle = document.getElementById("menuToggle");
    const links = document.getElementById("menuLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("show");
      });
    }

    // 📲 WhatsApp share button
    const shareBtn = document.getElementById("whatsappShareBtn");
    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        const messages = {
          en: "Check out your astro quiz result! 🌟 https://eurogb.github.io/astro-quiz-site/en/",
          hr: "Pogledaj svoj astrološki rezultat! 🌟 https://eurogb.github.io/astro-quiz-site/hr/"
        };
        const message = encodeURIComponent(messages[lang]);
        window.open(`https://wa.me/?text=${message}`, '_blank');
      });
    }
  })
  .catch(err => console.error("Header load failed:", err));

// 📦 Inject footer
fetch(`/astro-quiz-site/assets/footer-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  })
  .catch(err => console.error("Footer load failed:", err));

// 📦 Inject extra actions
fetch(`/astro-quiz-site/assets/extra-actions-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    document.getElementById('quiz')?.insertAdjacentHTML('beforeend', html);
  })
  .catch(err => console.error("Extra actions load failed:", err));

// 📥 Load correct quiz question set
const questionFile = lang === 'hr'
  ? '/astro-quiz-site/hr/astro-kviz-15-pitanja/questions.js'
  : '/astro-quiz-site/en/quiz-15-Questions/questions.js';

const quizScript = document.createElement('script');
quizScript.src = questionFile;
quizScript.onload = () => {
  if (typeof allQuizSets !== 'undefined') {
    startQuiz?.();
  } else {
    console.error("Quiz data not found.");
  }
};
document.head.appendChild(quizScript);
