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
          y: y + 1,
          z: z
        },
        dur: 500,
        easing: 'easeInQuad'
      };
      
      let currRotation = el.getAttribute('rotation');
      let params2 = {
        property: 'rotation',
        to: {
          x: currRotation.x + 180,
          y: currRotation.y,
          z: currRotation.z
        },
        dur: 500,
        easing: 'easeInQuad'
      }
      
      el.setAttribute('animation', params);
      el.setAttribute('animation__2', params2);
      
      setTimeout(function () {
        
      }, 500);
    }
    
    this.el.addEventListener('click', this.animateFlip);
  },
  remove: function() {
    this.el.removeEventListener('click', this.animateFlip);
  }
})