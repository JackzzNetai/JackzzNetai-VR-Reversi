AFRAME.registerComponent('up-flip-down', {
  init: function () {
    let el = this.el;
    
    this.animateFlip = function() {
      let currPosition = el.getAttribute('position');
      let x = currPosition.x;
      let y = currPosition.y;
      let z = currPosition.z;
      let params = {
        property: 'position',
        to: {
          x: x,
          y: y + 3,
          z: z
        },
        dur: 500,
        easing: 'easeInQuad'
      };
      
      let curr
      let params2 = {
        property: 'rotation',
        to: {
          x: 180,
          y: 0,
          z: 0
        },
        dur: 500,
        easing: 'easeInQuad'
      }
      
      el.setAttribute('animation', params);
      el.setAttribute('animation__2', params2);
    }
    
    this.el.addEventListener('click', this.animateFlip);
  },
  remove: function() {
    this.el.removeEventListener('click', this.animateFlip);
  }
})