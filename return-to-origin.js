AFRAME.registerComponent('return-to-origin', {
  init: function() {
    let el = this.el;
    
    this.backToOrigin = function() {
      let p = el.getAttribute('position');
      el.setAttribute('animation', {
        property: 'position',
        to: {
          x: p.x,
          y: 0,
          z: p.y
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