// Fonction pour activer/désactiver le menu mobile
function toggleMenu() {
    const navbarMobile = document.querySelector('.navbar-mobile');
    navbarMobile.classList.toggle('active');
}

// Ajoute un bouton de fermeture dans le menu latéral
document.addEventListener("DOMContentLoaded", function() {
    const navbarMobile = document.querySelector('.navbar-mobile');
    const closeBtn = document.createElement("div");

    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&times;";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "1.5rem";
    closeBtn.style.color = "#004080";
    closeBtn.style.alignSelf = "flex-end";

    // Ajoute le bouton de fermeture en haut du menu latéral
    navbarMobile.prepend(closeBtn);

    // Événement pour ouvrir/fermer le menu lorsque le hamburger est cliqué
    document.querySelector(".hamburger").addEventListener("click", toggleMenu);

    // Événement pour fermer le menu lorsque la croix est cliquée
    closeBtn.addEventListener("click", toggleMenu);
});
