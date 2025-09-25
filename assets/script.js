// Inject global stylesheet if missing
const styleHref = "/astro-quiz-site/assets/style.css";
if (!document.querySelector(`link[href="${styleHref}"]`)) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = styleHref;
  document.head.appendChild(link);
}

// Detect language from URL
const path = window.location.pathname;
const lang = path.includes("/hr/") ? "hr" : "en";

// Inject header
fetch(`/astro-quiz-site/assets/header-${lang}.html`)
  .then(r => r.text())
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);
    // Menu toggle
    const t = document.getElementById("menuToggle");
    const m = document.getElementById("menuLinks");
    if (t && m) t.addEventListener("click", () => m.classList.toggle("show"));
    // WhatsApp share
    const sb = document.getElementById("whatsappShareBtn");
    if (sb) {
      sb.addEventListener("click", () => {
        const msgs = {
          en:
            "Check out your astro quiz result! 🌟 https://eurogb.github.io/astro-quiz-site/en/",
          hr:
            "Pogledaj svoj astrološki rezultat! 🌟 https://eurogb.github.io/astro-quiz-site/hr/"
        };
        window.open(`https://wa.me/?text=${encodeURIComponent(msgs[lang])}`, "_blank");
      });
    }
  })
  .catch(console.error);

// 📦 Inject footer
fetch(`/astro-quiz-site/assets/footer-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  });

// 📦 Inject extra actions
fetch(`/astro-quiz-site/assets/extra-actions-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    const quizEl = document.getElementById('quiz');
    if (quizEl) quizEl.insertAdjacentHTML('beforeend', html);

    // 🎯 Add event listener for "Pogledaj horoskop"
    const horoscopeBtn = document.getElementById('horoscopeBtn');
    if (horoscopeBtn) {
      horoscopeBtn.addEventListener('click', () => {
        const url = lang === 'hr' 
          ? '/astro-quiz-site/hr/prognoza/index.html'
          : '/astro-quiz-site/en/forecast/index.html';
        window.location.href = url;
      });
    }
  });

// 📥 Load correct question set
const questionFile = lang === 'hr'
  ? '/astro-quiz-site/hr/astro-kviz-15-pitanja/questions.js'
  : '/astro-quiz-site/en/quiz-15-Questions/questions.js';

// Inject extra quiz actions
fetch(`/astro-quiz-site/assets/extra-actions-${lang}.html`)
  .then(r => r.text())
  .then(html => document.getElementById("quiz")?.insertAdjacentHTML("beforeend", html))
  .catch(console.error);

// Load quiz questions
const qf =
  lang === "hr"
    ? "/astro-quiz-site/hr/astro-kviz-15-pitanja/questions.js"
    : "/astro-quiz-site/en/quiz-15-Questions/questions.js";
const qs = document.createElement("script");
qs.src = qf;
qs.onload = () => typeof allQuizSets !== "undefined" && startQuiz?.();
document.head.appendChild(qs);
