AFRAME.registerComponent('up-flip-down', {
  init: function() {
    let el = this.el;
    
    this.animateFlip = function(e) {
      console.log(el.getAttribute('id'));
      let flipDirection = e.detail.flipDirection;
      
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
          x: xR + flipDirection.x/2,
          y: yR + flipDirection.y/2,
          z: zR + flipDirection.z/2
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
            x: xR + flipDirection.x,
            y: yR + flipDirection.y,
            z: zR + flipDirection.z
          },
          dur: 500,
          easing: 'linear'
        };
        
        el.setAttribute('animation', params);
        el.setAttribute('animation__2', params2);
      }, 500);
      
      // TODO make new pieces
    }
    
    this.el.addEventListener('flipEvent', this.animateFlip);
  },
  remove: function() {
    this.el.removeEventListener('flipEvent', this.animateFlip);
  }
})
