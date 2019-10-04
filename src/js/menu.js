const menuButton = document.querySelector("#menu-toggler");  
const menu = document.querySelector(".side-nav");  
const heroSection = document.querySelector('.hero');
const container = document.querySelector('.page-container');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.side-nav a');
const logo = document.querySelector('.nav .logo');
const toggler = document.querySelector('.nav .hamburger-menu');

const pushMenu = () => {
    menu.classList.toggle('side-nav--open');
    logo.classList.toggle('moveBtn');
    toggler.classList.toggle('moveBtn');
}
menuButton.addEventListener('click', ()=> {
   pushMenu();
})
navLink.forEach( link => {
    link.addEventListener('click', ()=> {
        pushMenu()
    })
})


const heroObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach( entry => {
        if(!entry.isIntersecting) {
            nav.classList.add('nav--fixed');
        }
        else {
            nav.classList.remove('nav--fixed');
        }
    }) 
}, {rootMargin: "-100px 0px 0px 0px"})

heroObserver.observe(heroSection);