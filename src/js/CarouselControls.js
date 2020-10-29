import $ from 'jquery'
import EventEmitter from 'eventemitter3';

// import '../scss/style.scss';

class CarouselControls extends EventEmitter {
  constructor({root, controls}) {
    super()
    this.root = $(root)
    this.controls = controls;

    this.buttons = this.root.children(controls.btnClass)
    console.log("CONTROL ", root, this.root, controls.btnClass)
    this.buttons.on('click', ev => this._handleClick(ev))
  }

  _handleClick(ev) {
    ev.preventDefault()

    const target = $(ev.currentTarget)

    if (target.hasClass(this.controls.nextBtn)) {
      this.emit('clicknext')
    } else {
      this.emit('clickprev')
    }
  }
}

export default CarouselControls