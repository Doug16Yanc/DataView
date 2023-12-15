// Configurando varáveis referentes ao DOM
const imgsContainer = document.querySelector('.container');
const input = document.querySelector('.sectionSearch');
const hiddenOpcoes = document.querySelector('.hiddenOpcoes');
const description = document.querySelector('.desc');
const titleSelected = document.querySelector('.titleSelected');
const yearSelected = document.querySelector('.year');
const bgList = document.querySelector('.bgList');
const boxDesc = document.querySelector('.boxDesc');
const listBox = document.querySelector('.listBox');
const listBox2 = document.querySelector('.listBox2');
const btnFechar = document.querySelector('.btnFechar');
const menuTitulos = document.querySelector('.menuTitulos');
const titleOpc = document.querySelector('.titleOpc');
const listBoxUser = document.querySelector('.listBoxUser');
const itemList = document.querySelector('.itemList');
const userGames = document.querySelector('.userGames');

// Lista de games disponíveis
const games = [
    {id: 0, nome: "El Diablo", imagem: "../images/imgVetores/games/diablo.png"},
    {id: 1, nome: "Disco Elysium", imagem: "../images/imgVetores/games/disco.png"},
    {id: 2, nome: "Warcraft", imagem: "../images/imgVetores/games/war.png"},
    {id: 3, nome: "Dark Souls", imagem: "../images/imgVetores/games/dark-souls.png"},
    {id: 4, nome: "Mount & Blade", imagem: "../images/imgVetores/games/mount.png"},
    {id: 5, nome: "Cyberpunk 2077", imagem: "../images/imgVetores/games/cyberpunk.png"},
    {id: 6, nome: "Hunter", imagem: "../images/imgVetores/games/hunter.png"},
    {id: 7, nome: "Mass Effect", imagem: "../images/imgVetores/games/mass.png"},
    {id: 8, nome: "The Elder", imagem: "../images/imgVetores/games/the-elder.png"},
    {id: 9, nome: "Divinity", imagem: "../images/imgVetores/games/divinity.png"},
    {id: 10, nome: "The Witcher", imagem: "../images/imgVetores/games/witcher.png"},
    {id: 11, nome: "Stardew Valley", imagem: "../images/imgVetores/games/stardew-valley.png"},
    {id: 12, nome: "Horizon Zero Dawn", imagem: "../images/imgVetores/games/horizon.png"},
    {id: 13, nome: "God of War", imagem: "../images/imgVetores/games/God-of-War.png"},
    {id: 14, nome: "Elder Ring", imagem: "../images/imgVetores/games/elder-ring.png"},
    {id: 15, nome: "Final Fantasy", imagem: "../images/imgVetores/games/final.png"},
    {id: 15, nome: "Fallout", imagem: "../images/imgVetores/games/Fallout_New_Vegas.png"},
    {id: 16, nome: "Torment", imagem: "../images/imgVetores/games/torment.png"},
    {id: 17, nome: "Crono Trigger", imagem: "../images/imgVetores/games/crono.png"},
]

const containerAvailable = document.querySelector('.containerAvailable');
// Função para exibir os exemplares
const examplesGames = () =>
{
    games.slice(0, 10).forEach((games, i) => { 
        const itemBoxExample = document.createElement('div');
        itemBoxExample.classList.add('itemBoxExample');

        const nameExample = document.createElement('span');
        nameExample.classList.add('nameExample');
        nameExample.textContent = i;

        const itemList = document.createElement('img');
        itemList.classList.add('itemList');
        itemList.src = games.imagem;

        const h2 = document.createElement('h2');
        h2.textContent = games.nome;

        itemBoxExample.appendChild(nameExample);
        itemBoxExample.appendChild(itemList);
        itemBoxExample.appendChild(h2);
        listBox.appendChild(itemBoxExample);
    });
}
examplesGames();

// Itera sobre cada jogo da lista para criar os elementos no DOM
games.forEach((game) => {
    const itemBox = document.createElement('div');
    itemBox.classList.add('itemBox');

    const img = document.createElement('img');
    img.classList.add('itemList', 'listAvailable');
    img.src = game.imagem;
    img.alt = 'img list';

    const span = document.createElement('span');
    span.classList.add('name');
    span.textContent = game.nome;

    // Adiciona o botão "Adicionar"
    const addButton = document.createElement('button');
    addButton.classList.add('btnAdicionar');
    addButton.textContent = 'Adicionar';

    // Adiciona os elementos ao itemBox
    itemBox.appendChild(img);
    itemBox.appendChild(span);
    itemBox.appendChild(addButton);

    // Adiciona o elemento itemBox ao containerAvailable
    containerAvailable.appendChild(itemBox);

    // Adiciona um evento de clique ao botão "Adicionar"
    addButton.addEventListener('click', () => {
        // Cria um elemento na listBox com as informações do jogo
        const listBoxItem = createDynamicElement(game.imagem, game.nome);

        // Verifica se o jogo já está na listBox
        const isDuplicate = Array.from(userGames.children).some(item => {
            const existingName = item.querySelector('.numb').textContent;
            return existingName === game.nome;
        });

        // Se for um jogo duplicado, você pode decidir como lidar com isso
        if (isDuplicate) {
            console.log('Jogo já adicionado:', game.nome);
            return; // Não adiciona o jogo novamente e sai da função
        }

        // Adiciona o elemento criado à listBox
        userGames.appendChild(listBoxItem);
        const removeButton = listBoxItem.querySelector('.btnRemove');
        removeButton.addEventListener('click', () => {
            // Remove o listBoxItem ao clicar no botão "Remover"
            userGames.removeChild(listBoxItem);
            console.log('Jogo removido:', game.nome);
        });
            console.log('Botão Adicionar clicado para o jogo:', game.nome);
    });
});
// Função para exibir os jogos disponíveis na interface
const showAvailableGames = () => {
    containerAvailable.innerHTML = '';

    // Itera sobre a lista de jogos e cria elementos HTML dinâmicos para cada jogo
    games.forEach((game) => {
        const itemBox = document.createElement('div');
        itemBox.classList.add('itemBox');

        const img = document.createElement('img');
        img.classList.add('itemList', 'listAvailable');
        img.src = game.imagem;
        img.alt = 'img list';

        const span = document.createElement('span');
        span.classList.add('nome');
        span.textContent = game.nome;

        itemBox.appendChild(img);
        itemBox.appendChild(span);

        containerAvailable.appendChild(itemBox);
    });
};

// Elementos estáticos
const itemBox = document.querySelector('.itemBox');
const imgItemBoxElement = document.createElement('img');
const spanItemBoxElement = document.createElement('span');

// Função para criar elementos dinâmicos com base em uma imagem e um nome
const createDynamicElement = (imagePath, name) => {
    const spanElement = document.createElement('span');
    const divElement = document.createElement('div');
    divElement.classList.add('userList');

    spanElement.className = 'numb';
    spanElement.textContent = name;

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.classList.add('classUserList');
    imgElement.src = imagePath;
    imgElement.alt = 'img list';

    const btnRemoveElement = document.createElement('button');
    btnRemoveElement.className = 'btnRemove';
    btnRemoveElement.textContent = '-';

    divElement.appendChild(imgElement);
    divElement.appendChild(spanElement);
    divElement.appendChild(btnRemoveElement);

    return divElement;
}

// Adiciona um ouvinte de evento ao botão 'Ver Games'
document.querySelector('.botaoVerGames').addEventListener('click', () =>
{
    // Alterna a visibilidade do menu de títulos
    menuTitulos.classList.toggle('hiddenSideAvailable');
    menuTitulos.classList.toggle('visibleSideAvailable');
});