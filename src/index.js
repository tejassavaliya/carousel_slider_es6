import CarouselBlock from './js/CarouselBlock';

const carousel = new CarouselBlock({
    root: '.sliderContainer', 
    slider: {
        class: '.carousel-slider',
        sliderList: '.carousel-slider__slide-list',
        slides: '.carousel-slider__slide'
    }, 
    controls: {
        class: '.carousel-controls',
        btnClass: '.carousel-controls__button',
        nextBtn: 'carousel-controls__next' // no need to put . before class name
    }, 
    dots: {
        class: '.sliderDots .carousel-dots',
        dotClass: '.carousel-dots__dot',
        activeDot: 'carousel-dots__dot--active' // no need to put . before class name
    } 
});