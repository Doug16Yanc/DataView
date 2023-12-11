
const imgsContainer = document.querySelector('.container');
const input = document.querySelector('.sectionSearch');
const hiddenOpcoes = document.querySelector('.hiddenOpcoes');
const description = document.querySelector('.desc');
const titleSelected = document.querySelector('.titleSelected');
const yearSelected = document.querySelector('.year');
const bgList = document.querySelector('.bgList');
const boxDesc = document.querySelector('.boxDesc');
const listBox = document.querySelector('.listBox');
const btnFechar = document.querySelector('.btnFechar');
const menuTitulos = document.querySelector('.menuTitulos');
const titleOpc = document.querySelector('.titleOpc');


class AddImagesSlider{
    constructor(imgArray, imgName){
        this.imgArray = imgArray;
        this.imgName = imgName;
    }

    addInArray(){
        const pathFileImg = `../images/imgVetores/${this.imgName}`;
        this.imgArray.push(pathFileImg);
    }
    createImageElement(){
        this.imgArray.forEach(imgSrc => 
            {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.classList.add('maxWidthSliders');
                img.classList.add('slider');
                imgsContainer.appendChild(img);
            });
    }
};


const images = [];

for (let i = 0; i < 8; i++){
    const addImg = new AddImagesSlider(images, 'icons-slide${i + 1}.png');
    addImg.addInArray();
}

const games = [
    {id: 0, nome: "El Diablo", imagem: "../images/imgVetores/diablo.jpg"},
    {id: 1, nome: "Disco Elysium", imagem: "../images/imgVetores/disco.jpg"},
    {id: 2, nome: "Horizon Zero Dawn", imagem: "../images/imgVetores/horizon.jpg"},
    {id: 3, nome: "Dark Souls", imagem: "../images/imgVetores/dark.jpg"},
    {id: 4, nome: "Mount & Blade", imagem: "../images/imgVetores/mount.jpg"},
    {id: 5, nome: "Cyberpunk 2077", imagem: "../images/imgVetores/cyberpunk.jpg"},
    {id: 6, nome: "Hunter", imagem: "../images/imgVetores/hunter.jpg"},
    {id: 7, nome: "Mass Effect", imagem: "../images/imgVetores/mass_effect.jpg"},
    {id: 8, nome: "The Elder", imagem: "../images/imgVetores/theElder.jpg"},
    {id: 9, nome: "Warcraft", imagem: "../images/imgVetores/warcraft.jpg"},
    {id: 10, nome: "The Witcher", imagem: "../images/imgVetores/witcher.jpg"},
    {id: 11, nome: "Stardew Valley", imagem: "../images/imgVetores/stardew.jpg"},
    {id: 12, nome: "Divinity", imagem: "../images/imgVetores/divinity.jpg"}

]

const containerAvailable = document.querySelector('.containerAvailable');
/*
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

    // Adiciona o botão "Adicionar"
    const addButton = document.createElement('button');
    addButton.classList.add('btnAdicionar');  // Adicione a classe que desejar ao botão
    addButton.textContent = 'Adicionar';

    // Adiciona os elementos ao itemBox
    itemBox.appendChild(img);
    itemBox.appendChild(span);
    itemBox.appendChild(addButton);

    containerAvailable.appendChild(itemBox);

    addButton.addEventListener('click', () => {
        // Adicione aqui o código para lidar com o clique no botão "Adicionar"
        // Você pode usar a variável game para obter as informações do jogo correspondente
        console.log('Botão Adicionar clicado para o jogo:', game.nome);
    });
});
*/
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
        const listBoxItem = createDynamicElement(game.imagem);
        // Adiciona as informações do jogo ao elemento criado
        listBoxItem.querySelector('.itemList').src = game.imagem;
        listBoxItem.querySelector('.nome').textContent = game.nome;

        // Adicione aqui a lógica para lidar com o clique no botão "Adicionar"
        // Você pode usar a variável game para obter as informações do jogo correspondente
        console.log('Botão Adicionar clicado para o jogo:', game.nome);

        // Adiciona o elemento criado à listBox
        listBox.appendChild(listBoxItem);
    });
});


/*
// Itera sobre cada filme na lista 'movies'
games.forEach((game) => {
    
    const itemBox = document.createElement('div');
    itemBox.classList.add('itemBox'); 
    itemBox.style.flexDirection = 'column'; // Adiciona a propriedade CSS para organizar em coluna

    const img = document.createElement('img');
    img.classList.add('itemList', 'listAvailable'); 
    img.src = game.imagem; 
    img.alt = 'img list'; 
    // Cria um elemento span para exibir o nome do filme
    const span = document.createElement('span');
    span.classList.add('name'); // Adiciona a classe 'name' ao elemento span
    span.textContent = game.nome; // Define o texto do span com base na propriedade 'name' do filme

    // Adiciona a imagem e o span ao elemento div 'itemBox'
    itemBox.appendChild(img);
    itemBox.appendChild(span);

    // Adiciona o elemento 'itemBox' ao elemento com a classe 'containerAvailable'
    containerAvailable.appendChild(itemBox);
});
*/

const showAvailableGames = () => {
    containerAvailable.innerHTML = '';

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


const itemBox = document.querySelector('.itemBox');
const imgItemBoxElement = document.createElement('img');
const spanItemBoxElement = document.createElement('span');

let index;
const imgAddedName = [];
let tempImgAddedName;

const createDynamicElement = (imagePath) => {
    const spanElement = document.createElement('span');
    const divElement = document.createElement('div');
    divElement.className = 'itemBox';

    spanElement.className = 'numb';

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.classList.add('classUserList');
    imgElement.src = imagePath;
    imgElement.alt = 'img list';

    const btnRemoveElement = document.createElement('button');
    btnRemoveElement.className = 'btnRemove';
    btnRemoveElement.textContent = '-';

    divElement.appendChild(spanElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(btnRemoveElement);

    listBox.appendChild(divElement);

    return divElement;
}

const resetInputVisibility = () =>
{
    input.classList.add('hiddenInput');
    btnAddInicio.classList.remove('hiddenInput');
    btnAddFim.classList.remove('hiddenInput');
    btnAddMeio.classList.remove('hiddenInput');
}

// Função para lidar com o clique em botões
const handleButtonClick = (actionType) =>
{
    // Verifica se a lista de filmes está definida e se o índice é válido
    if (games && games.length > index && games[index])
    {
        // Verifica se o nome temporário já está na lista de nomes adicionados
        if (imgAddedName.includes(tempImgAddedName))
        {
            // console.log('Elemento já presente na lista!');
            // Mensagem para o usuário informando que o filme já está na lista
            titleOpc.textContent = 'Elemento já presente na lista!';
        }
        else
        {
            // Executa ação com base no tipo de ação passado como parâmetro
            switch (actionType)
            {
                case 'addInicio':
                    AddInicioFunc();
                    break;
                case 'addFim':
                    AddFimFunc();
                    break;
                case 'addMeio':
                    confirmAddMeio();
                    break;
                default:
                    console.error('Ação não reconhecida.');
                    return;
            }

            // Adiciona o nome do filme à lista de nomes adicionados
            imgAddedName.includes(movies[index].name) ? '' : imgAddedName.push(movies[index].name);

            // console.log('imgAddedName: ' + imgAddedName);
            // console.log('tempImgAddedName: ' + tempImgAddedName);
        }
    }
    else
    {
        console.error('Movies está indefinido ou movies[index] é undefined.');
    }

    // Imprime a lista encadeada no console
    console.log('Linked list: ');
    userList.print();

    // Imprime o tamanho da lista encadeada no console
    console.log("Size List: " + userList.size());

    // Ajusta os IDs dos elementos no DOM
    document.querySelectorAll('.itemBox').forEach((el, idx) =>
    {
        el.id = idx - 10;
    });

    // Atualiza os índices exibidos no DOM
    document.querySelectorAll('.numb').forEach((el, idx) =>
    {
        el.textContent = idx;
    });
}


let selectedElement = null;
itemBox.addEventListener('click', (event) =>
{ 
    if (event.target.classList.contains('classUserList')) 
    {
        const itemBox = event.target.closest('.classUserList');        

        if (itemBox === selectedElement)
        {
            itemBox.classList.remove('imgSelected');
            selectedElement = null;

        }
        else
        {
            if (selectedElement)
            {
                selectedElement.classList.remove('imgSelected');
            }

            itemBox.classList.add('imgSelected');

            selectedElement = itemBox;
        }
 
        // This Section is for Github Pages***********************************************
        for (let i = 0; i < games.length; i++)
        {
            let url = games[i].imagem;
            let itemBoxSrc = itemBox.src
            let relativeItemBox = new URL(itemBoxSrc, window.location.origin).pathname
            let relativeUrl = new URL(url, window.location.origin).pathname

            let convertURL = `/View-Data-Structure${relativeUrl.toString()}`;
            let convertItemBox = relativeItemBox.toString();
            console.log(`itemBox.src: ${itemBoxSrc}`);
            console.log(`url: ${url}`);
            console.log(`RelativeItemBox: ${relativeItemBox}`)
            console.log(`Relative url: ${relativeUrl}`);
            console.log(`convertURL: ${convertURL}`);
            console.log(`convertItemBox ${convertItemBox}`);
            if (convertURL == convertItemBox)
            {
                titleSelected.innerHTML = '';
                description.innerHTML = '';
                src = movies[i].bg;

                titleSelected.innerHTML = games[i].completeTitle;
                
                description.innerHTML = games[i].desc
                yearSelected.innerHTML = games[i].year;
                // console.log(bgList);
                bgList.src = src;  
                console.log("Elemento clicado!");
                bgList.classList.toggle('bgListAnimation');
                boxDesc.classList.toggle('animationBoxDesc');
            }
        }
        // This Section is for Github Pages***********************************************
    }
});


const handleClick = () =>
{
    // Alterna entre as classes 'hiddenSideAvailable' e 'visibleSideAvailable' no menu de títulos
    menuTitulos.classList.toggle('hiddenSideAvailable');
    menuTitulos.classList.toggle('visibleSideAvailable');

    
    if (menuTitulos.classList.contains('hiddenSideAvailable')) {
        hiddenOpcoes.classList.add('backAllTranslateHiddenOpcoes');
    }
     else {
        hiddenOpcoes.classList.remove('backAllTranslateHiddenOpcoes');
    }

    // Alterna entre as classes 'translateHiddenOpcoes1' e 'translateHiddenOpcoes2' no menu de opções escondido
    hiddenOpcoes.classList.toggle('translateHiddenOpcoes1');
    hiddenOpcoes.classList.toggle('translateHiddenOpcoes2');
};
document.querySelector('.botaoVerGames').addEventListener('click', handleClick);
document.querySelector('.arrowImg').addEventListener('click', handleClick);
