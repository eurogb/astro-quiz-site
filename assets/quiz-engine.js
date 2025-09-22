export function startQuiz({ questionSet, verdicts, ui }) {
  let allQuestions = [];
  let selectedQuestions = [];
  let currentQuestionIndex = 0;
  let scores = {};
  let previousTopSign = null;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function initializeQuiz() {
    allQuestions = [];
    Object.values(questionSet).forEach(theme => {
      allQuestions.push(...theme);
    });

    shuffleArray(allQuestions);
    selectedQuestions = allQuestions.slice(0, 10);
    currentQuestionIndex = 0;
    scores = {};
    updateProgressBar();
  }

  function updateProgressBar() {
    const progress = document.getElementById("progressBar");
    progress.innerText = `${ui.progressLabel} ${currentQuestionIndex + 1} / 10`;
  }

  function fadeOutIn(element, callback) {
    element.style.opacity = 0;
    setTimeout(() => {
      callback();
      element.style.opacity = 1;
    }, 300);
  }

  function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
      showResult();
      return;
    }

    const q = selectedQuestions[currentQuestionIndex];
    const questionDiv = document.getElementById("question");
    const answersDiv = document.getElementById("answers");

    fadeOutIn(questionDiv, () => {
      questionDiv.innerText = `${currentQuestionIndex + 1}. ${q.question}`;
    });

    answersDiv.innerHTML = "";
    q.answers.forEach(a => {
      const btn = document.createElement("button");
      btn.innerText = a.text;
      btn.onclick = () => {
        scores[a.sign] = (scores[a.sign] || 0) + 1;
        currentQuestionIndex++;
        updateProgressBar();
        showQuestion();
      };
      answersDiv.appendChild(btn);
    });

    if (currentQuestionIndex % 5 === 0 && currentQuestionIndex !== 0) {
      const adDiv = document.createElement("div");
      adDiv.id = "ezoic-pub-ad-placeholder-103";
      answersDiv.appendChild(adDiv);
    }
  }

  function showResult() {
    document.getElementById("themeTitle").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("answers").style.display = "none";

    const topSign = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerText = `${ui.resultLabel} ${topSign}`;

    const verdictText = verdicts[topSign];
    const verdictDiv = document.createElement("div");
    verdictDiv.className = "verdict";
    verdictDiv.innerText = verdictText;
    resultDiv.appendChild(verdictDiv);

    if (previousTopSign && previousTopSign !== topSign) {
      const changeDiv = document.createElement("div");
      changeDiv.className = "change-note";
      changeDiv.innerText = `${ui.changeLabel} ${previousTopSign}`;
      resultDiv.appendChild(changeDiv);
    }

    previousTopSign = topSign;

    const adDiv = document.createElement("div");
    adDiv.id = "ezoic-pub-ad-placeholder-104";
    resultDiv.appendChild(adDiv);

    document.getElementById("resultActions").style.display = "flex";
  }

  document.getElementById("restartBtn").onclick = () => {
    initializeQuiz();
    document.getElementById("result").style.display = "none";
    document.getElementById("resultActions").style.display = "none";
    document.getElementById("themeTitle").style.display = "block";
    document.getElementById("question").style.display = "block";
    document.getElementById("answers").style.display = "block";
    showQuestion();
  };

  document.getElementById("whatsappShareBtn").onclick = () => {
    const topSign = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const message = `${ui.shareMessage} ${topSign} ${ui.shareSuffix}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  initializeQuiz();
  showQuestion();
}
