```javascript
// Affiche automatiquement l'année actuelle dans le pied de page.
// Cela évite d'avoir à modifier manuellement l'année chaque année.
const year = new Date().getFullYear();

document.getElementById("year").textContent = year;
```