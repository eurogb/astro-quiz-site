// 🌐 Detect language from URL
const path = window.location.pathname;
const lang = path.includes('/hr/') ? 'hr' : 'en';
const base = "https://eurogb.github.io/astro-quiz-site";

// 📦 Inject header
fetch(`${base}/assets/header-${lang}.html`)
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

    // 📲 WhatsApp share in header
    const shareBtn = document.getElementById("whatsappShareBtn");
    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        const messages = {
          en: "Check out your astro quiz result! 🌟 https://eurogb.github.io/astro-quiz-site/en/",
          hr: "Pogledaj svoj astrološki rezultat! 🌟 https://eurogb.github.io/astro-quiz-site/hr/"
        };
        window.open(
          `https://wa.me/?text=${encodeURIComponent(messages[lang])}`,
          '_blank'
        );
      });
    }
  })
  .catch(err => console.error("Header load failed:", err));

// 📦 Inject footer
fetch(`${base}/assets/footer-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  })
  .catch(err => console.error("Footer load failed:", err));

// 📦 Inject extra actions into quiz pages
fetch(`${base}/assets/extra-actions-${lang}.html`)
  .then(res => res.text())
  .then(html => {
    document.getElementById('quiz')?.insertAdjacentHTML('beforeend', html);
  })
  .catch(err => console.error("Extra actions load failed:", err));

// 📥 Load correct quiz questions script
const questionFile = lang === 'hr'
  ? `${base}/hr/astro-kviz-15-pitanja/questions.js`
  : `${base}/en/quiz-15-Questions/questions.js`;

const quizScript = document.createElement('script');
quizScript.src = questionFile;
quizScript.onload = () => {
  if (typeof allQuizSets !== 'undefined') startQuiz?.();
  else console.error("Quiz data not found.");
};
document.head.appendChild(quizScript);

// 🔮 Forecast logic
document.addEventListener("DOMContentLoaded", () => {
  const forecastBtn = document.getElementById("forecastBtn");
  const zodiacSelect = document.getElementById("zodiacSelect");
  const outputDiv = document.getElementById("output");
  const themeEl = document.getElementById("theme");
  const textEl = document.getElementById("forecast-text");
  const loadingEl = document.getElementById("loading");

  forecastBtn?.addEventListener("click", () => {
    const sign = zodiacSelect.value;
    const today = new Date().toISOString().split("T")[0];
    if (!sign || !horoscopes[today]) {
      alert("Please select a valid sign.");
      return;
    }

    loadingEl.style.display = "block";
    outputDiv.style.display = "none";

    setTimeout(() => {
      loadingEl.style.display = "none";
      outputDiv.style.display = "block";
      themeEl.textContent = `🌌 Theme: ${horoscopes[today].theme}`;
      textEl.textContent = horoscopes[today][sign];
    }, 800);
  });

  document.getElementById("check-again")?.addEventListener("click", () => {
    outputDiv.style.display = "none";
    zodiacSelect.value = "";
  });

  window.shareWhatsApp = () => {
    const sign = zodiacSelect.value;
    const today = new Date().toISOString().split("T")[0];
    if (!sign || !horoscopes[today]) return;
    const message = `🌟 My daily horoscope for ${sign}: ${
      horoscopes[today][sign]
    } — Theme: ${horoscopes[today].theme}`;
    const url = "https://www.lfbuyer.com/en/forecast/";
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message + " " + url)}`,
      "_blank"
    );
  };
});
