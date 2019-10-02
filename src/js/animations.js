import { TimelineMax } from "gsap";
import { Power1 } from "gsap/TweenMax";

//Hero Animation
const tl1 = new TimelineMax();
const bg = document.querySelector('.bg');
const heroText = document.querySelector('.hero .info-section');
const navBar = document.querySelector('.nav');
const heroImgSection = document.querySelector('.hero .img-section'); 
const frame = document.querySelectorAll('.img-section__frame'); 
const frame1 = document.querySelectorAll('.img-section--frame1');
const frame2= document.querySelectorAll('.img-section--frame2');

window.addEventListener('DOMContentLoaded', (event) => {
    tl1.set(heroText, {opacity: 0, y:20})
    .set(heroImgSection, {opacity: 0, x:200})
    .set(frame1, {y:35, }) 
    .set(frame2, {x:35,})
    .set(frame, { opacity: 0 })
    .to(bg, 2, {ease: Expo.easeOut, x:'0', delay: .2})
    .to(heroText, 1, {ease: Expo.easeOut, opacity: 1, y:0}, )
    .to(navBar, 1, {ease: Expo.easeOut, opacity: 1})
    .to(heroImgSection, 1, {ease: Power1.easeOut, opacity: 1, x: 0}, "-=1")
    .to(frame1, .5, {y: 0, opacity: 1, scale: 1,})
    .to(frame2, .5, {x:0, opacity: 1, scale: 1} )
});



//Stack Animation
const tl = new TimelineMax();
const stack = document.querySelector('.stack');
const allIcons = document.querySelectorAll('.icon-box--second');
const stackTextDesc = document.querySelector('.stack .section-description');
const stackTextTitle = document.querySelector('.stack .section-title');
const stackBtn= document.querySelector('.stack .btn');
const ng = document.querySelector('.angular');
const xPosition = window.innerWidth > 660 ? -100 : -40;

tl.set(allIcons, {scale: .85, opacity: 0, x: 40, y: 30 })
   .set(ng, {opacity: 0, x: xPosition, y: '-30px'})
   .set([stackTextDesc, stackTextTitle], { y: 70, opacity: .4 })
   .set(stackBtn, {opacity: .2, x: 50});

const stackAnimation = () => {
    tl.to(ng, .6, {ease: Power1.easeOut, opacity: 1,  scale: 1.6, delay: .5})
    .to(ng, 1, {ease: Power1.easeOut, x: '0', y: '0', scale: 1, delay: .3})
    .to(allIcons, .5, {ease: Power1.easeOut, x: '0', y: '0', scale: .9, opacity: 1}, "-=.1")
    .to([stackTextDesc, stackTextTitle], 1.5, {ease: Power1.easeOut,  y: 0, opacity: 1}, "-=2.8")
    .to(stackBtn, 1.5, {ease: Power1.easeOut,  x: 0, opacity: 1}, "-=2.8")
}

 

const stackObserver = new IntersectionObserver((entries, observer) => {
    if(entries[0].isIntersecting) {
        stackAnimation();
        stackObserver.unobserve(stack);
    }
}, {rootMargin: "0px 0px -200px 0px"})

stackObserver.observe(stack);