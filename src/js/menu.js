import { TimelineMax } from "gsap";

const menuButton = document.querySelector("#menu-toggler");  
const menu = document.querySelector(".side-nav");  
const heroSection = document.querySelector('.hero');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav .logo');
const navLink = document.querySelectorAll('.side-nav a');
const toggler = document.querySelector('.nav .hamburger-menu');
const menuItems = document.querySelectorAll('.side-menu-list__item');

const pushMenu = () => {
    if(window.pageYOffset > 880) {
        toggler.classList.toggle('moveBtn--bigger'); 
    } else if (window.innerWidth < 550) {
        toggler.classList.toggle('moveBtn--bigger'); 
        logo.classList.toggle('moveBtn--bigger');
    }
    else {
        toggler.classList.toggle('moveBtn'); 
    }

    menu.classList.toggle('side-nav--open');
    const tlMenu = new TimelineMax();
    
    tlMenu.set(menuItems, {x: 250, opacity: 0})
          .staggerTo(menuItems, .5, {ease: Expo.easeOut, x: 0, opacity: 1}, .1)
}

const tooglerAnimation = ()=> {
    const tlHamburger = new TimelineMax();
    const bars = menuButton.querySelector('.bar');
    
}
menuButton.addEventListener('click', ()=> {
   tooglerAnimation();
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
            toggler.classList.add('nav--fixed');
        }
        else {
            toggler.classList.remove('nav--fixed');
        }
    }) 
}, {rootMargin: "-80px 0px 0px 0px"})

heroObserver.observe(heroSection);