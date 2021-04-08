var intersectedEl = null;

AFRAME.registerComponent('intersection-listener', {
  init: function () {
    let el = this.el;
    this.updateIntersectedEl = function(e) {
      intersectedEl = e.detail.getIntersection(this.el);
    }
    
    this.el.sceneEl.addEventListener('raycaster-intersected', this.updateIntersectedEl);
  },
  remove: function() {
    this.el.sceneEl.removeEventListener('raycaster-intersected', this.updateIntersectedEl);
  }
})