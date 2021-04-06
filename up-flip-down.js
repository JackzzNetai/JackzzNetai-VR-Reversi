AFRAME.registerComponent('up-flip-down', {
  init: function () {
    let el = this.el;
    this.animateFlip = function(e) {
      console.log(e.detail.intersection.point);
      let currPosition = el.getAttribute('position');
      let params = {
        property: 'position',
        to: {
          x: currPosition.x,
          y: currPosition.y+3,
          z: currPosition.z
        },
        dur: 1000,
        easing: 'easeInOutQuad'
      };
      el.setAttribute('animation', params);
      params = {
        property: 'position',
        to: {
          x: currPosition.x,
          y: currPosition.y+4,
          z: currPosition.z
        },
        dur: 1000,
        easing: 'easeInOutQuad'
      };
      el.setAttribute('animation', params);
    }
    
    this.el.addEventListener('click', this.animateFlip);
  },
  remove: function() {
    this.el.removeEventListener('click', this.animateFlip);
  }
})