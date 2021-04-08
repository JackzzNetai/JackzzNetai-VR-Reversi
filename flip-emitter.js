AFRAME.registerComponent('flip-emitter', {
  init: function() {
    let el = this.el;
    this.flipCall = function() {
      el.emit('flipEvent', {flipDirection: {x: 540, y: 0, z: 0}});
    }
    this.el.addEventListener('click', this.flipCall);
  },
  remove: function() {
    this.el.removeEventListener('click', this.flipCall);
  }
})