import hoverEffect from 'hover-effect';

new hoverEffect({
    parent: document.querySelector('.img-section__photo'),
    intensity: 0.1,
    speedIn: 2,
    angle1: 135,
    angle2: 135,
    image1: 'dist/imgs/photo.jpg',
    image2: 'dist/imgs/photo2.png',
    displacementImage: 'dist/imgs/stripe1.png'
}) 