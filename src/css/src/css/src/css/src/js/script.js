document.getElementById("toggle-dark").addEventListener("click", function () {
  const enabled = document.body.classList.toggle("dark");
  this.setAttribute("aria-pressed", enabled);
});

document.getElementById("toggle-contrast").addEventListener("click", function () {
  const link = document.getElementById("high-contrast");
  const enabled = link.disabled = !link.disabled;
  this.setAttribute("aria-pressed", enabled);
});
