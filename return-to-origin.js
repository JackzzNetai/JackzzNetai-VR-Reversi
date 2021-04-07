var BOARD_DEFAULT_Y = 0;
var PIECE_DEFAULT_Y = 0.5;

AFRAME.registerComponent('return-to-origin', {
  init: function() {
    let el = this.el;
    
    this.backToOrigin = function() {
      let p = el.getAttribute('position');
      el.setAttribute('animation', {
        property: 'position',
        to: {
          x: p.x,
          y: el.getAttribute('id') === 'board' ? BOARD_DEFAULT_Y : PIECE_DEFAULT_Y,
          z: p.z
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