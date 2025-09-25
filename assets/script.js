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
  });

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
    startQuiz?.();
  } else {
    console.error("Quiz data not found.");
  }
};
document.head.appendChild(script);

// 🔮 Forecast logic
document.addEventListener("DOMContentLoaded", function () {
  const forecastBtn = document.getElementById("forecastBtn");
  const zodiacSelect = document.getElementById("zodiacSelect");
  const forecastDiv = document.getElementById("forecast");
  const themeEl = document.getElementById("theme");
  const textEl = document.getElementById("forecast-text");
  const loadingEl = document.getElementById("loading");

  forecastBtn?.addEventListener("click", function () {
    const sign = zodiacSelect.value;
    const today = new Date().toISOString().split("T")[0];

    if (!sign || !horoscopes[today]) return alert("Please select a valid sign.");

    loadingEl.style.display = "block";
    forecastDiv.style.display = "none";

    setTimeout(() => {
      loadingEl.style.display = "none";
      forecastDiv.style.display = "block";
      themeEl.textContent = `🌌 Theme: ${horoscopes[today].theme}`;
      textEl.textContent = horoscopes[today][sign];
    }, 800);
  });

  document.getElementById("check-again")?.addEventListener("click", () => {
    forecastDiv.style.display = "none";
    zodiacSelect.value = "";
  });

  window.shareWhatsApp = function () {
    const sign = zodiacSelect.value;
    const today = new Date().toISOString().split("T")[0];
    if (!sign || !horoscopes[today]) return;

    const message = `🌟 My daily horoscope for ${sign}: ${horoscopes[today][sign]} — Theme: ${horoscopes[today].theme}`;
    const url = "https://www.lfbuyer.com/en/forecast/";
    window.open(`https://wa.me/?text=${encodeURIComponent(message + " " + url)}`, "_blank");
  };
});
