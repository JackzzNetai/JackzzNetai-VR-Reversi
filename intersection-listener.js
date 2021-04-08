var intersectedEl = null;

AFRAME.registerComponent('intersection-listener', {
  init: function() {
    this.updateIntersectedEl = function(e) {
      intersectedEl = e.detail.els[0];
    }
    
    this.removeIntersectedEl = function() {
      intersectedEl = null;
    }
    
    this.el.addEventListener('raycaster-intersection', this.updateIntersectedEl);
    this.el.addEventListener('raycaster-intersection-cleared', this.removeIntersectedEl);
  },
  remove: function() {
    this.el.removeEventListener('raycaster-intersection', this.updateIntersectedEl);
    this.el.removeEventListener('raycaster-intersection-cleared', this.removeIntersectedEl);
  }
})