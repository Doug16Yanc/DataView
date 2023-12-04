const imgContainer = document.querySelector('.container');

class AddImagesSlider{
    constructor(imgArray, imgName){
        this.imgArray = imgArray;
        this.imgName = imgName;
    }

    addInArray(){
        const pathFileImg = '../images/imgArray/${this.imgName}'
        this.imgArray.push(pathFileImg);
    }
    createImageElement(){
        this.imgArray.forEach(imgSrc => 
            {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.classArray.add('maxWidthSliders');
                img.classList.add('slider');
                imgsContainer.appendChild(img);
            });
    }
};

const images = [];

for (let i = 0; i < 8; i++){
    const addImg = new ImagesSlider(images, 'icons-slide${i + 1}.png');
    addImg.addInArray();
}

cons 