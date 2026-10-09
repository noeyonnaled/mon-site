```javascript
// Affiche automatiquement l'année actuelle dans le pied de page.
// Cela évite d'avoir à modifier manuellement l'année chaque année.
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Bascule le mode sombre avec un bouton.
const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDarkMode = document.body.classList.contains("dark");
    toggleButton.textContent = isDarkMode ? "Mode clair" : "Mode sombre";
    toggleButton.setAttribute("aria-label", isDarkMode ? "Activer le mode clair" : "Activer le mode sombre");
  });
}
```