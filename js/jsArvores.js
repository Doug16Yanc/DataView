// Quando o nó principal é clicado
document.querySelector('.mainNode').addEventListener('click', () => {
    // Exibe os ramos da primeira classe
    document.querySelectorAll('.branch1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao primeiro nó
    document.querySelectorAll('.tectopToB1').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de games é clicado
document.querySelector('.games').addEventListener('click', () => {
    // Exibe os ramos relacionados aos games
    document.querySelectorAll('.gamesBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos games
    document.querySelectorAll('.gamesToB2').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de RPG é clicado
document.querySelector('.rpg').addEventListener('click', () => {
    // Exibe os ramos relacionados ao RPG
    document.querySelectorAll('.rpgGames').forEach((e) => e.classList.add('show'))
    // Ativa as linhas de conexão relacionadas ao RPG
    document.querySelectorAll('.rpgToB3').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de FPS é clicado
document.querySelector('.fps').addEventListener('click', () => {
    // Exibe os ramos relacionados ao FPS
    document.querySelectorAll('.fpsGames').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao FPS
    document.querySelectorAll('.fpsToB3').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de filmes é clicado
document.querySelector('.filmes').addEventListener('click', () => {
    // Exibe os ramos relacionados aos filmes
    document.querySelectorAll('.filmesBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos filmes
    document.querySelectorAll('.filmesToB2').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de Sci-Fi é clicado
document.querySelector('.scifi').addEventListener('click', () => {
    // Exibe os ramos relacionados ao Sci-Fi
    document.querySelectorAll('.scifiFilmes').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao Sci-Fi
    document.querySelectorAll('.scifiToB3').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de séries é clicado
document.querySelector('.series').addEventListener('click', () => {
    // Exibe os ramos relacionados às séries
    document.querySelectorAll('.scifiSeries').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas às séries
    document.querySelectorAll('.seriesToB3').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de gadgets é clicado
document.querySelector('.gadgets').addEventListener('click', () => {
    // Exibe os ramos relacionados aos gadgets
    document.querySelectorAll('.gadgetsBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos gadgets
    document.querySelectorAll('.gadgetsToB2').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de smartphones é clicado
document.querySelector('.smartphones').addEventListener('click', () => {
    // Exibe os ramos relacionados aos smartphones
    document.querySelectorAll('.smartphonesBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos smartphones
    document.querySelectorAll('.smartphonesToB3').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de Android é clicado
document.querySelector('.android').addEventListener('click', () => {
    // Exibe os ramos relacionados ao Android
    document.querySelectorAll('.androidBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao Android
    document.querySelectorAll('.androidToB4').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de iPhone é clicado
document.querySelector('.iphone').addEventListener('click', () => {
    // Exibe os ramos relacionados ao iPhone
    document.querySelectorAll('.iphoneBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao iPhone
    document.querySelectorAll('.iphoneToB4').forEach((e) => e.classList.add('activeLine'));
});

// Quando o nó de smartwatches é clicado
document.querySelector('.smartwatches').addEventListener('click', () => {
    // Exibe os ramos relacionados aos smartwatches
    document.querySelectorAll('.smartwatchBranch').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas aos smartwatches
    document.querySelectorAll('.smartwatchesToB3').forEach((e) => e.classList.add('activeLine'));
});