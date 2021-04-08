var intersectedEls = null;

AFRAME.registerComponent('intersection-listener', {
  init: function () {
    let el = this.el;
    
    this.updateIntersectedEl = function(e) {
      intersectedEls = e.detail.els;
    }
    
    this.removeIntersectedEl = function() {
      intersectedEls = null;
    }
    
    this.el.addEventListener('raycaster-intersection', this.updateIntersectedEl);
    this.el.addEventListener('raycaster-intersection-cleared', this.removeIntersectedEl);
  },
  remove: function() {
    this.el.removeEventListener('raycaster-intersection', this.updateIntersectedEl);
    this.el.removeEventListener('raycaster-intersection-cleared', this.removeIntersectedEl);
  }
})