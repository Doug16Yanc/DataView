const menu = document.querySelector('.menuIcon');

// Evento para pegar o click do menu da navbar
menu.addEventListener('click', () => {
    
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('hiddenMenu');
});