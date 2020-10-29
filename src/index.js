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

// carousel.nextSlide()
// carousel.prevSlide()
// carousel.slideTo(0)


/**
 * 
 carousel-block : sliderContainer

carousel-slider: 
carousel-slider__slide-list : sliderData
carousel-slider__slide: sliderSlide

carousel-controls: sliderNavigation
carousel-controls__button carousel-controls__prev: sliderLeft
carousel-controls__button carousel-controls__next: sliderRight

carousel-dots : sliderDots, ul.slider-nav
carousel-dots__dot : ul.slider-nav
carousel-dots__dot.active: li.active

 */

const data = [{
    title: 'Mobile learning and apps',
    content: 'Learners expect experiences they can touch and tools which are accessible from anywhere. We use HTML5 to build responsive content which learners can navigate like the apps and websites they love. One experience on any device.'
}, {
    title: 'Animations and video',
    content: 'An eye-popping animation is a great way to open a course. It’s also a standalone asset to help you promote it. You can have a message from your CEO to open the training, video testimonials from some of your employees, interviews with your subject matter experts or dramatised scenarios using actors. You can film in a studio, on location or in virtual worlds (using green or blue screen).'
}, {
    title: 'Interaction and scenarios',
    content: 'What makes great classroom training great? Often it’s the instructor involving the audience, encouraging interaction – and making eye contact. We believe online training is no different. Our elearning solutions are fully interactive, using activities, quizzes and highly developed scenarios.'
}, {
    title: 'Gamification',
    content: 'Game mechanics in learning motivate achievement by satisfying psychological needs. We build in performance indicators that measure how well learners doing as they answer questions, complete tasks or make decisions. This flags up weaker areas early on and spurs them on when they’re on a roll.'
}]