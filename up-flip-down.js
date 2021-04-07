AFRAME.registerComponent('up-flip-down', {
  init: function() {
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
          y: y + 0.6,
          z: z
        },
        dur: 500,
        easing: 'linear'
      };
      
      let currRotation = el.getAttribute('rotation');
      let xR = currRotation.x;
      let yR = currRotation.y;
      let zR = currRotation.z;
      let params2 = {
        property: 'rotation',
        to: {
          x: xR + 90,
          y: yR,
          z: zR
        },
        dur: 500,
        easing: 'linear'
      }
      
      el.setAttribute('animation', params);
      el.setAttribute('animation__2', params2);
      
      setTimeout(function() {
        params = {
          property: 'position',
          to: {
            x: x,
            y: y,
            z: z
          },
          dur: 500,
          easing: 'linear'
        };
        params2 = {
          property: 'rotation',
          to: {
            x: xR + 180,
            y: yR,
            z: zR
          },
          dur: 500,
          easing: 'linear'
        };
        
        el.setAttribute('animation', params);
        el.setAttribute('animation__2', params2);
      }, 500);
    }
    
    this.el.addEventListener('click', this.animateFlip);
  },
  remove: function() {
    this.el.removeEventListener('click', this.animateFlip);
  }
})
