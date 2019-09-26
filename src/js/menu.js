const menuButton = document.querySelector("#menu-toggler");  
const menu = document.querySelector(".side-nav");  
const container = document.querySelector('.page-container');
const logo = document.querySelector('.nav');

menuButton.addEventListener('click', ()=> {
    menu.classList.toggle('side-nav--open');
    logo.classList.toggle('moveBtn');
})
