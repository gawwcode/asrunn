// Sélection des éléments
const menuButton = document.querySelector('menu button');
const nav = document.querySelector('nav');

// État initial
let isMenuOpen = false;

// Fonction pour animer le changement d'icône
function animateIcon(newIcon) {
    menuButton.classList.add('shrink');
    
    setTimeout(() => {
        menuButton.textContent = newIcon;
        menuButton.classList.remove('shrink');
        menuButton.classList.add('grow');
        
        setTimeout(() => {
            menuButton.classList.remove('grow');
        }, 300);
    }, 150);
}

// Fonction pour toggle le menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    // Toggle la classe active sur la nav
    nav.classList.toggle('active');
    
    // Anime le changement d'icône
    animateIcon(isMenuOpen ? '×' : '☰');
}

// Event listener pour le click sur le bouton
menuButton.addEventListener('click', toggleMenu);

// Event listener pour fermer le menu quand on clique sur un lien
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// Event listener pour fermer le menu avec la touche Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) toggleMenu();
});
