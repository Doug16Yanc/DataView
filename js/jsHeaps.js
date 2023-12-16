// Quando o nó principal é clicado
document.querySelector('.mainNode').addEventListener('click', () => {
    // Exibe os ramos da primeira classe
    document.querySelectorAll('.branch1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao primeiro nó
    document.querySelectorAll('.tectopToB1').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de games é clicado
document.querySelector('.mobile').addEventListener('click', () => {
    // Exibe os ramos relacionados aos games
    document.querySelectorAll('.mobileBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos games
    document.querySelectorAll('.mobileToB2').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de RPG é clicado
document.querySelector('.iphone').addEventListener('click', () => {
    // Exibe os ramos relacionados ao RPG
    document.querySelectorAll('.iphoneMobile').forEach((e) => e.classList.add('show'))
    // Ativa as linhas de conexão relacionadas ao RPG
    document.querySelectorAll('.iphoneToB3').forEach((e) => e.classList.add('activeLine'));
});

document.querySelector('.android').addEventListener('click', () => {
    document.querySelectorAll('.androidMobile').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao FPS
    document.querySelectorAll('.androidToB3').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de filmes é clicado
document.querySelector('.front').addEventListener('click', () => {
    // Exibe os ramos relacionados aos filmes
    document.querySelectorAll('.frontBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos filmes
    document.querySelectorAll('.frontToB2').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de Sci-Fi é clicado
document.querySelector('.design').addEventListener('click', () => {
    // Exibe os ramos relacionados ao Sci-Fi
    document.querySelectorAll('.design1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao Sci-Fi
    document.querySelectorAll('.designToB3').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de séries é clicado
document.querySelector('.web').addEventListener('click', () => {
    // Exibe os ramos relacionados às séries
    document.querySelectorAll('.web1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas às séries
    document.querySelectorAll('.webToB3').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de gadgets é clicado
document.querySelector('.backend').addEventListener('click', () => {
    // Exibe os ramos relacionados aos gadgets
    document.querySelectorAll('.backendBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos gadgets
    document.querySelectorAll('.backendToB2').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de smartphones é clicado
document.querySelector('.paradigmas').addEventListener('click', () => {
    // Exibe os ramos relacionados aos smartphones
    document.querySelectorAll('.backend2').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos smartphones
    document.querySelectorAll('.backend2ToB3').forEach((e) => e.classList.add('activeLine'));
});

document.querySelector('.logica').addEventListener('click', () => {
    // Exibe os ramos relacionados aos smartwatches
    document.querySelectorAll('.backend1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos smartwatches
    document.querySelectorAll('.backend1ToB3').forEach((e) => e.classList.add('activeLine'));
});