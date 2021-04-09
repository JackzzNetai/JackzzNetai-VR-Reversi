AFRAME.registerComponent('move-piece', {
  init: function() {
    let el = this.el;
    let raycaster = el.getAttribute('raycaster');
    
    this.startGrab = function() {
      let d = ;
      let originCoordinate = [el.position[0], el.position[1], el.position[2]];
      let direction = [raycaster.direction[0], raycaster.direction[1], raycaster.direction[2]];
      
      findIntersection([0, 1, 0], d, originCoordinate, direction);
    }
    
    this.el.addEventListener('triggerdown', this.startGrab);
  },
  
  remove: function() {
    
  }
})