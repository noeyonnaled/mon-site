const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark");

    toggleButton.textContent = isDarkMode ? "Mode clair" : "Mode sombre";
    toggleButton.setAttribute(
      "aria-label",
      isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"
    );
    toggleButton.setAttribute("aria-pressed", String(isDarkMode));
  });
}