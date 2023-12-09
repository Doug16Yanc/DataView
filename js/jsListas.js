
const imgsContainer = document.querySelector('.container');

class AddImagesSlider
{
    constructor(imgList, imgName)
    {
        this.imgName = imgName;
        this.imgList = imgList;
    }

    addInList()
    {
        const pathFileImg = `../images/imgListas/${this.imgName}`
        this.imgList.push(pathFileImg);
        
    }

    createImageElement()
    {
        this.imgList.forEach(imgSrc =>
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

for (let j = 0; j < 5; j++) {
    const addImg = new AddImagesSlider(images, `icon-slide${j + 1}.png`);
    addImg.addInList();
}

const final = new AddImagesSlider(images, '');
final.createImageElement();

// Função para animação de lista de imagens iniciais
const startSliderAnimation = () =>
{
    const images = document.querySelectorAll('.slider'); // Pegar elemento do DOM
    let currentIndex = 0;

    function animateSlider()
    {
        const currentImage = images[currentIndex];

        setTimeout(() =>
        {
            currentImage.classList.add('focus');
            currentImage.classList.remove('maxWidthSliders');

            setTimeout(() =>
            {
                currentImage.classList.remove('focus');
                currentImage.classList.add('maxWidthSliders');

                currentIndex = (currentIndex + 1) % images.length; // Próxima imagem ou reinicia se atingir o final

                animateSlider(); // Chama recursivamente para a próxima imagem
            }, 1500);
        }, 0);
    }
    animateSlider(); 
}
startSliderAnimation();
console.log(images)


const movies = [
    {name: 'Ad Astra', pathFile : '../images/imgListas/list/Ad-Astra.png'},
    {name: 'Akira', pathFile : '../images/imgListas/list/Akira.png'},
    {name: 'Alien', pathFile : '../images/imgListas/list/Alien.png'},
    {name: 'Aniquilação', pathFile : '../images/imgListas/list/Aniquilacao.png'},
    {name: 'Arrival', pathFile : '../images/imgListas/list/Arrival.png'},
    {name: 'UOE', pathFile : '../images/imgListas/list/ASO.png'},
    {name: 'A.I', pathFile : '../images/imgListas/list/IA.png'},
    {name: 'Inception', pathFile : '../images/imgListas/list/Inception.png'},
    {name: '13° Andar', pathFile : '../images/imgListas/list/TTT.png'}
]

const userList = [];

const createDynamicElement = (numb, imagePath) =>
{
    const divElement = document.createElement('div');
    divElement.className = 'itemBox';

    const spanElement = document.createElement('span');
    spanElement.className = 'numb';
    spanElement.textContent = numb;

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.src = imagePath;
    imgElement.alt = 'img list';

    const btnRemoveElement = document.createElement('button');
    btnRemoveElement.className = 'btnRemove';
    btnRemoveElement.textContent = '-';

    btnRemoveElement.addEventListener('click', () => {
        const index = userList.indexOf(divElement);
        removeElement(index);
    });


    divElement.appendChild(spanElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(btnRemoveElement);

    document.querySelector('.listBox').appendChild(divElement);

    return divElement;
}


let i = 0;
document.querySelector('.btnAdd').addEventListener('click', () => {
    const element = createDynamicElement(parseInt(i) + 1, movies[i].pathFile);
    userList.push(element);
    i++;
    console.log(userList[userList.length - 1]);
})

const removeElement = (index) => {
    if (index >= 0 && index < userList.length) {
    const removedElement = userList.splice(index, 1)[0];
    removedElement.remove();
    console.log('Elemento removido:', removedElement);
    }
}

document.querySelector('.listBox').addEventListener('click', (event) => {
    if (event.target.classList.contains('btnRemove')) {
        const index = userList.indexOf(event.target.closest('.itemBox'));
        removeElement(index);
    }
});

const handleClick = () => {
    document.querySelector('.menuTitulos').classList.toggle('hiddenMenuList');
};

document.querySelector('.botaoVerTitulos').addEventListener('click', handleClick);
document.querySelector('.arrowImg').addEventListener('click', handleClick);

document.querySelector('.btnFechar').addEventListener('click', () => {
    document.querySelector('.hiddenOpcoes').classList.toggle('hiddenInput');
    
});

document.querySelectorAll('.listAvailable').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.hiddenOpcoes').classList.remove('hiddenInput');
    });
});
