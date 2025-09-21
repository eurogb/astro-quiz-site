// Inject shared footer
fetch('/assets/footer.html')
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  });
