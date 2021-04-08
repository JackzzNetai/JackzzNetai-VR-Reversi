AFRAME.registerComponent('flip-emitter', {
  init: function() {
    let el = this.el;
    this.flipCall = function() {
      el.emit('flipEvent', {flipDirection: {x: 0, y: -90, z: -180}});
    }
    this.el.addEventListener('click', this.flipCall);
  },
  remove: function() {
    this.el.removeEventListener('click', this.flipCall);
  }
})