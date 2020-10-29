import $ from 'jquery'

class CarouselSlider {
  constructor({root,slider}) {    
    // Select HTML nodes
    this.root = $(root)
    this.slideList = this.root.children(slider.sliderList)
    this.slides = this.root.find(slider.slides)
    
  }

  get slideCount() {
    return this.slides.length
  }

  slideTo(index) {
    // The transform property controls the position of the slider
    this.slideList.css({transform: `translateX(-${100 * index}%)`});
  }
}

export default CarouselSlider