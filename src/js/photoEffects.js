import hoverEffect from 'hover-effect';

new hoverEffect({
    parent: document.querySelector('.img-section__photo'),
    intensity: 0.1,
    speedIn: 2,
    angle1: 135,
    angle2: 135,
    image1: 'assets/imgs/photo1.jpg',
    image2: 'assets/imgs/photo2.jpg',
    displacementImage: 'assets/imgs/stripe1.jpg'
}) 