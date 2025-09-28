<script>
document.addEventListener("DOMContentLoaded", () => {
  // 🧩 Basic fallback header and footer
  const header = document.createElement("header");
  header.innerHTML = `<h1>Your Daily Horoscope</h1>`;
  document.body.insertBefore(header, document.body.firstChild);

  const footer = document.createElement("footer");
  footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} RIOGB j.d.o.o. All rights reserved.</p>`;
  document.body.appendChild(footer);

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
        const messages = {
          en: "Check out your astro quiz result! 🌟 https://eurogb.github.io/astro-quiz-site/en/",
          hr: "Pogledaj svoj astrološki rezultat! 🌟 https://eurogb.github.io/astro-quiz-site/hr/"
        };
        shareBtn.addEventListener("click", () => {
          const message = encodeURIComponent(messages[lang]);
          window.open(`https://wa.me/?text=${message}`, '_blank');
        });
      }
    });

  // 📦 Inject footer
  fetch(`/astro-quiz-site/assets/footer-${lang}.html`)
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);
    });

  // 📦 Inject extra actions (if #quiz exists)
  fetch(`/astro-quiz-site/assets/extra-actions-${lang}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('quiz')?.insertAdjacentHTML('beforeend', html);
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
});
</script>
