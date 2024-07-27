const menuHeader = document.querySelector('.header__navigation-mobile');

if(menuHeader){
    function openMenu(){
        menuHeader.classList.toggle('open');
    };
}