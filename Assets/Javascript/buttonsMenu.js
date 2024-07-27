const buttons = {
    button1: document.querySelector('.button1'),
    button2: document.querySelector('.button2'),
    button3: document.querySelector('.button3'),
    button4: document.querySelector('.button4'),
    button5: document.querySelector('.button5')
};
    
const images = {
    images1: document.querySelectorAll('.breakfast'),
    images2: document.querySelectorAll('.mainDishes'),
    images3: document.querySelectorAll('.drinks'),
    images4: document.querySelectorAll('.dessert')
};

function hiddenImages(){
    Object.values(images).forEach(imagesList =>{
        imagesList.forEach(imagesAdd => {
            imagesAdd.style.cssText = 'display: none';
        });
    });
};

function showAllImages(){
    Object.values(images).forEach(imagesList =>{
        imagesList.forEach(imagesRemove => {
            imagesRemove.style.cssText = 'display: flex';
        });
    });
}

function showImages(imagesList){
    imagesList.forEach(imagesRemove =>{
        imagesRemove.style.cssText = 'display: flex';
    });
};

function resetButtonStyles() {
    Object.values(buttons).forEach(button =>{
        button.style.cssText = 'color: var(--greenItens-color); border: 1px solid #DBDFD0; background-color: transparent';
    });
}

function selectMenu(){

    const clickButton = event.target;

    hiddenImages();
    resetButtonStyles();

    switch(clickButton) {
        case buttons.button1: 
            showAllImages();
            buttons.button1.style.cssText = 'background-color: var(--redItens-color); color: #FFFFFF; border: 0;';
            break;
        case buttons.button2:
            showImages(images.images1);
            buttons.button2.style.cssText = 'background-color: var(--redItens-color); color: #FFFFFF; border: 0;';
            break;
        case buttons.button3:
            showImages(images.images2);
            buttons.button3.style.cssText = 'background-color: var(--redItens-color); color: #FFFFFF; border: 0;';
            break;
        case buttons.button4:
            showImages(images.images3);
            buttons.button4.style.cssText = 'background-color: var(--redItens-color); color: #FFFFFF; border: 0;';
            break;
        case buttons.button5:
            showImages(images.images4);
            buttons.button5.style.cssText = 'background-color: var(--redItens-color); color: #FFFFFF; border: 0;';
            break;
    }
}