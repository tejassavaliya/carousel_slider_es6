import $ from 'jquery'
import EventEmitter from 'eventemitter3'

// import '../scss/style.scss';

class CarouselDots extends EventEmitter {
  constructor({root, dots}) {
    
    super()
    this.root = $(root)

    this.dotsCntrl = dots;
    
    this.dots = this.root.children(dots.dotClass)

    // Bind events
    this.dots.on('click', ev => this._handleClick(ev))
  }

  _handleClick(ev) {
    ev.preventDefault()

    const index = this.dots.index(ev.target)
    this.highlightDot(index)

    // Fire the clickdot event
    this.emit('clickdot', index)
  }

  highlightDot(index) {

    this.dots.removeClass(this.dotsCntrl.activeDot)
    this.dots.eq(index).addClass(this.dotsCntrl.activeDot)
  }
}

export default CarouselDots