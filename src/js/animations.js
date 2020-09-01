import { TimelineMax } from 'gsap';
import { Power1 } from 'gsap/TweenMax';

//Hero Animation
const tlHero = new TimelineMax();
const bg = document.querySelector('.bg');
const heroText = document.querySelector('.hero .info-section');
const navBar = document.querySelector('.nav');
const heroImgSection = document.querySelector('.hero .img-section');
const frame = document.querySelectorAll('.img-section__frame');
const frame1 = document.querySelectorAll('.img-section--frame1');
const frame2 = document.querySelectorAll('.img-section--frame2');

window.addEventListener('DOMContentLoaded', event => {
  tlHero
    .set(heroText, { opacity: 0, y: 20 })
    .set(heroImgSection, { opacity: 0, x: 200 })
    .set(frame1, { y: 35 })
    .set(frame2, { x: 35 })
    .set(frame, { opacity: 0 })
    .to(bg, 1.5, { ease: Expo.easeOut, x: '0', delay: 0.2 })
    .to(heroText, 1, { ease: Expo.easeOut, opacity: 1, y: 0 })
    .to(navBar, 1, { ease: Expo.easeOut, opacity: 1 }, '-=1')
    .to(heroImgSection, 1, { ease: Power1.easeOut, opacity: 1, x: 0 }, '-=1')
    .to(frame1, 0.3, { y: 0, opacity: 1, scale: 1 })
    .to(frame2, 0.3, { x: 0, opacity: 1, scale: 1 });
});

//Stack Animation
const tlStack = new TimelineMax();
const stack = document.querySelector('.stack');
const allIcons = document.querySelectorAll('.icon-box--second');
const stackTextDesc = document.querySelector('.stack .section-description');
const stackTextTitle = document.querySelector('.stack .section-title');
const stackBtn = document.querySelector('.stack .btn');
const ng = document.querySelector('.angular');
const xPosition = window.innerWidth > 660 ? -100 : -35;
const yPosition = window.innerWidth > 660 ? -30 : 0;

tlStack
  .set(allIcons, { scale: 0.85, opacity: 0, x: 0, y: 0 })
  .set(ng, { opacity: 0, x: xPosition, y: yPosition })
  .set([stackTextDesc, stackTextTitle], { y: 70, opacity: 0 })
  .set(stackBtn, { opacity: 0, x: 50 });

const stackAnimation = () => {
  tlStack
    .to(ng, 0.6, { ease: Power1.easeOut, opacity: 1, scale: 1.2, delay: 0.2 })
    .to(ng, 1, { ease: Power1.easeOut, x: '0', y: '0', scale: 1, delay: 0.3 })
    .to(
      allIcons,
      0.7,
      { ease: Power1.easeOut, x: '0', y: '0', scale: 0.9, opacity: 1 },
      '-=.5'
    )
    .to(
      [stackTextDesc, stackTextTitle],
      1.5,
      { ease: Power1.easeOut, y: 0, opacity: 1 },
      '-=1.8'
    )
    .to(stackBtn, 1, { ease: Power1.easeOut, x: 0, opacity: 1 }, '-=1.2');
};

const stackObserver = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      stackAnimation();
      stackObserver.unobserve(stack);
    }
  },
  { rootMargin: '0px 0px -200px 0px' }
);

stackObserver.observe(stack);

//Projects animations
const tlProjects = new TimelineMax();
const project = document.querySelector('.projects');
const projectsTextDesc = document.querySelector(
  '.projects .section-description'
);
const projectsTextTitle = document.querySelector('.projects .section-title');
const projectsItem = document.querySelectorAll('.projects-grid__item');

tlProjects
  .set([projectsTextDesc, projectsTextTitle], { y: 70, opacity: 0 })
  .set(projectsItem, { y: 70, opacity: 0, scale: 0.9 });

const projectsAnimation = () => {
  tlProjects
    .to([projectsTextDesc, projectsTextTitle], 1, {
      ease: Power1.easeOut,
      y: 0,
      opacity: 1,
    })
    .to(
      projectsItem,
      0.5,
      { ease: Power1.easeOut, y: 0, opacity: 1, scale: 1 },
      '-=.5'
    );
};

const projectsObserver = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      projectsAnimation();
      projectsObserver.unobserve(project);
    }
  },
  { rootMargin: '0px 0px -250px 0px' }
);

projectsObserver.observe(project);

//Design Animation
const tlDesign = new TimelineMax();
const design = document.querySelector('.design');
const designTextDesc = document.querySelector('.design .section-description');
const designTextTitle = document.querySelector('.design .section-title');
const designkBtn = document.querySelector('.design .btn');
const designTools = document.querySelectorAll('.design-tools__box');

tlDesign
  .set([designTextDesc, designTextTitle], { y: 70, opacity: 0 })
  .set(designkBtn, { opacity: 0.2, x: 50 })
  .set(designTools, { opacity: 0, x: 50 });

const designAnimation = () => {
  tlDesign
    .to([designTextDesc, designTextTitle], 1.5, {
      ease: Power1.easeOut,
      y: 0,
      opacity: 1,
    })
    .to(designkBtn, 1, { ease: Power1.easeOut, x: 0, opacity: 1 }, '-=1.2')
    .to(designTools, 1, { ease: Power1.easeOut, x: 0, opacity: 1 }, '-=1.2');
};

const designObserver = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      designAnimation();
      designObserver.unobserve(design);
    }
  },
  { rootMargin: '0px 0px -200px 0px' }
);

designObserver.observe(design);

//Design Animation
const tlGallery = new TimelineMax();
const gallery = document.querySelector('.gallery');
const galleryTextDesc = document.querySelector('.gallery .section-description');
const galleryTextTitle = document.querySelector('.gallery .section-title');
const imgs = document.querySelectorAll('.element-item > img');

tlGallery
  .set([galleryTextDesc, galleryTextTitle], { y: 70, opacity: 0 })
  .set(imgs, { opacity: 0, scale: 0.5 });

const galleryAnimation = () => {
  tlGallery
    .to([galleryTextDesc, galleryTextTitle], 1, {
      ease: Power1.easeOut,
      y: 0,
      opacity: 1,
    })
    .to(imgs, 0.5, { ease: Power1.easeOut, opacity: 1, scale: 1 }, '-=.5');
};

const galleryObserver = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      galleryAnimation();
      galleryObserver.unobserve(gallery);
    }
  },
  { rootMargin: '0px 0px -200px 0px' }
);

galleryObserver.observe(gallery);
