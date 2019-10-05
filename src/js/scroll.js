import SmoothScroll from 'smooth-scroll';
const offset = window.innerWidth > 660 ? 180 : 80;

const scroll = new SmoothScroll(['.nav a[href*="#"]', '.side-nav .side-menu-list__item[href*="#"]'],  {
    speed: 600,
    speedAsDuration: true,
    offset: offset
});



const scroll2 = new SmoothScroll('section .btn[href*="#"]',  {
    speed: 1100,
    offset: offset
});