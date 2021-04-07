AFRAME.registerComponent('return-to-origin', {
  init: function() {
    let el = this.el;
    
    this.backToOrigin = function() {
      el.setAttribute('animation', {
        property: 'position',
        to: {
          x: 0,
          y: 0,
          z: 0
        },
        dur: 1000,
        easing: 'easeInOutQuad'
      });
    };
    
    this.el.sceneEl.addEventListener('thumbstickdown', this.backToOrigin);
  },
  remove: function() {
    this.el.sceneEl.removeEventListener('thumbstickdown', this.backToOrigin);
  }
})