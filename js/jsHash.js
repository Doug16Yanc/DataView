
const imgsContainer = document.querySelector('.container');
const input = document.querySelector('.sectionSearch');
const valueInput = document.querySelector('.searchMovie')
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
const btnShowName = document.querySelector('.proteinaNome');
const addButton = document.createElement('button');

class AddImagesSlider {
    constructor(imgArray, imgName) {
        this.imgArray = imgArray;
        this.imgName = imgName;
    }

    addInArray() {
        const pathFileImg = `../images/imgVetores/${this.imgName}`;
        this.imgArray.push(pathFileImg);
    }

    showProteinName(index) {
        const proteinName = proteins[index].nome;
        document.querySelector('.proteinaNome').value = `Nome da Proteína: ${proteinName}`;
    }

    createImageElement() {
        this.imgArray.forEach((imgSrc, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('imageContainer');

            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('maxWidthSliders');
            img.classList.add('slider');

            const btnShowName = document.createElement('button');
            btnShowName.textContent = 'Mostrar Nome';
            btnShowName.classList.add('greenButton');
            btnShowName.addEventListener('click', () => {
                this.showProteinName(index);
            }); 
           
            imgContainer.appendChild(img);
            imgContainer.appendChild(btnShowName);
            imgsContainer.appendChild(imgContainer);

            btnShowName.addEventListener('click', () => {
                this.showProteinName(index);
            });
        });
    }
}

const images = [];

for (let i = 0; i < 8; i++){
    const addImg = new AddImagesSlider(images, 'icons-slide${i + 1}.png');
    addImg.createImageElement();

}

const proteins = [
    {id: 0, nome: "ATG-CGA-TCA", imagem: "../images/imgHash/hemoglobina.jpg", valor: "hemoglobina"},
    {id: 1, nome: "CCA-GGA-TTC", imagem: "../images/imgHash/queratina.jpg", valor: "queratina"},
    {id: 2, nome: "GTG-TTC-AGA", imagem: "../images/imgHash/albumina.jpg", valor: "albumina"},
    {id: 3, nome: "GCC-CAA-TAC", imagem: "../images/imgHash/colageno.png", valor: "colágeno"},
    {id: 4, nome: "ATC-TGG-GGT", imagem: "../images/imgHash/amilase.jpg", valor: "amilase"},
    {id: 5, nome: "GGA-CCA-TAG", imagem: "../images/imgHash/citocromo.png", valor: "citocromo C"}
   /* {id: 6, nome: "Hunter", imagem: "../images/imgVetores/hunter.jpg"},
    {id: 7, nome: "Mass Effect", imagem: "../images/imgVetores/mass_effect.jpg"},
    {id: 8, nome: "The Elder", imagem: "../images/imgVetores/theElder.jpg"},
    {id: 9, nome: "Warcraft", imagem: "../images/imgVetores/warcraft.jpg"},
    {id: 10, nome: "The Witcher", imagem: "../images/imgVetores/witcher.jpg"},
    {id: 11, nome: "Stardew Valley", imagem: "../images/imgVetores/stardew.jpg"},
    {id: 12, nome: "Divinity", imagem: "../images/imgVetores/divinity.jpg"} */

]

const containerAvailable = document.querySelector('.containerAvailable');


proteins.forEach((proteina) => {
    
    const itemBox = document.createElement('div');
    itemBox.classList.add('itemBox'); 
    itemBox.style.flexDirection = 'column';

    const img = document.createElement('img');
    img.classList.add('itemList', 'listAvailable'); 
    img.src = proteina.imagem; 
    img.alt = 'img list'; 
    
    const span = document.createElement('span');
    span.classList.add('name'); 
    span.textContent = proteina.nome; 

    containerAvailable.appendChild(itemBox);

    containerAvailable.appendChild(itemBox); 
    
    containerAvailable.appendChild(itemBox);
    itemBox.appendChild(img);
    itemBox.appendChild(span);
    const addButton = document.createElement('button');
    addButton.classList.add('btnAdicionar');
    addButton.textContent = 'Visualizar valor';

    itemBox.appendChild(img);
    itemBox.appendChild(span);
    itemBox.appendChild(addButton);

});


const itemBox = document.querySelector('.itemBox');
const imgItemBoxElement = document.createElement('img');
const spanItemBoxElement = document.createElement('span');

const valorProteinaElement = document.querySelector('.proteinaNome');


let index;
const imgAddedName = [];
let tempImgAddedName;


const createDynamicElement = (proteina) => {
    const spanElement = document.createElement('span');
    const divElement = document.createElement('div');
    divElement.className = 'itemBox';

    spanElement.className = 'numb';

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.classList.add('classUserList');
    imgElement.src = proteina.imagem;
    imgElement.alt = 'img list';

    const btnRemoveElement = document.createElement('button');
    btnRemoveElement.className = 'btnRemove';
    btnRemoveElement.textContent = '-';

    divElement.appendChild(spanElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(btnRemoveElement);

    listBox.appendChild(divElement);

    imgElement.addEventListener('click', () => {
        mostrarNomeProteina(proteina.nome);
    });

    return divElement;
};

containerAvailable.appendChild(itemBox);


addButton.addEventListener('click', () => {
const index = proteins.findIndex(p => p.nome === span.textContent);
if (index !== -1) {
    valorProteinaElement.textContent = `Valor da Proteína: ${proteins[index].valor}`;
}
});

itemBox.addEventListener('click', (event) => { 
    if (event.target.classList.contains('classUserList')) { 
        const itemBox = event.target.closest('.classUserList'); 

        if (itemBox === selectedElement) { 
            itemBox.classList.remove('imgSelected'); 
            selectedElement = null;
        } else { 
            if (selectedElement) { 
                selectedElement.classList.remove('imgSelected'); 
            } 
            itemBox.classList.add('imgSelected'); 
            selectedElement = itemBox; 
        }

        const index = Array.from(itemBox.parentNode.children).indexOf(itemBox);
        const protein = proteins[index];

        titleSelected.innerHTML = '';
        description.innerHTML = '';
        src = protein.imagem;
        titleSelected.innerHTML = protein.nome;

        bgList.src = src;
        console.log("Elemento clicado!");
        bgList.classList.toggle('bgListAnimation');
        boxDesc.classList.toggle('animationBoxDesc');
    }
});
/*
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
}); */
const handleClick = () =>
{
    // Alterna entre as classes 'hiddenSideAvailable' e 'visibleSideAvailable' no menu de títulos
    menuTitulos.classList.toggle('hiddenSideAvailable');
    menuTitulos.classList.toggle('visibleSideAvailable');

    // Adiciona ou remove a classe 'backAllTranslateHiddenOpcoes' no menu de opções escondido
    if (menuTitulos.classList.contains('hiddenSideAvailable')) {
        hiddenOpcoes.classList.add('backAllTranslateHiddenOpcoes');
    } else {
        hiddenOpcoes.classList.remove('backAllTranslateHiddenOpcoes');
    }

    // Alterna entre as classes 'translateHiddenOpcoes1' e 'translateHiddenOpcoes2' no menu de opções escondido
    hiddenOpcoes.classList.toggle('translateHiddenOpcoes1');
    hiddenOpcoes.classList.toggle('translateHiddenOpcoes2');
};
document.querySelector('.botaoVerGames').addEventListener('click', handleClick);
document.querySelector('.').addEventListener('click', handleClick);