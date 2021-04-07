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
        easing: 'easeInOutQuad'
      };
      el.setAttribute('animation', params);
      setTimeout(function() {
        let currRotation = el.getAttribute('rotation');
        let params = {
          property: 'rotation',
          to: {
            x: currRotation.x + 180,
            y: currPosition.y,
            z: currRotation.z
          },
          dur: 500,
          easing: 'easeInOutQuad'
        };
        el.setAttribute('animation', params);
        setTimeout(function() {
          let params = {
            property: 'position',
            to: {
              x: x,
              y: y,
              z: z
            },
            dur: 500,
            easing: 'easeInOutQuad'
          };
          el.setAttribute('animation', params);
        }, 500);
      }, 500);
    };
    
    this.el.addEventListener('click', this.animateFlip);
  },
  remove: function() {
    this.el.removeEventListener('click', this.animateFlip);
  }
})