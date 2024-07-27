function navigation(page) {
    window.location.href = page;
}

function colorButton (){

    const selectPage = window.location.pathname;

    const buttons = {
        'index.html': document.querySelector('#buttonHome'),
        'About.html': document.querySelector('#buttonAbout'),
        'Book.html': document.querySelector('#buttonHome'),
        'Menu.html': document.querySelector('#buttonMenu'),
        'Contact.html': document.querySelector('#buttonContact'),
        'Blog.html': document.querySelector('#buttonBlog'),
        'The_details.html': document.querySelector('#buttonBlog')
    }

    const page = selectPage.split('/').pop();

    if(buttons[page]){
        buttons[page].style.cssText = 'background-color: #DBDFD0; border-radius: 35px; padding: 6px 14px;';
    }
};

window.onload = colorButton;