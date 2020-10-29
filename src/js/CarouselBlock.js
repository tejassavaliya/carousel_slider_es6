import $ from 'jquery'

// import '../scss/styles.scss';
import CarouselControls from './CarouselControls'
import CarouselDots from './CarouselDots'
import CarouselSlider from './CarouselSlider'
import mod from './lib/lib-mod' // custom modulo function

class CarouselBlock {
  constructor({root, slider, controls, dots}) {
    
    this.root = $(root)

    // Instantiate sub-components
    this.slides = new CarouselSlider({
      root: this.root.children(slider.class)[0],
      slider
    })
    this.controls = new CarouselControls({
      root: this.root.children(controls.class)[0],
      controls
    })
    this.dots = new CarouselDots({
      root: this.root.find(dots.class)[0],
      dots
    })

    this.currentIndex = 0

    this.controls.on('clicknext', () => this.nextSlide())
    this.controls.on('clickprev', () => this.prevSlide())
    this.dots.on('clickdot', index => this.slideTo(index))
  }

  slideTo(index) {
    this.slides.slideTo(index)
    this.dots.highlightDot(index)
    this.currentIndex = index
  }

  nextSlide() {
    console.log("NEXT SLIDE ", this.currentIndex,this.slides )
    // We use modulo here to keep index from going out of bounds.
    let nextIndex = mod(this.currentIndex + 1, this.slides.slideCount)
    console.log("nextIndex ", nextIndex)
    this.slideTo(nextIndex)
  }

  prevSlide() {
    console.log("PREV SLIDE ", this.currentIndex,this.slides )
    let prevIndex = mod(this.currentIndex - 1, this.slides.slideCount)
    this.slideTo(prevIndex)
  }
}

export default CarouselBlock