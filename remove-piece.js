AFRAME.registerComponent('remove-piece', {
  init: function() {
    let el = this.el;
    
    this.removePiece = function() {
      let intersectedEls = el.getAttribute('raycaster').intersectedEls;
      alert(intersectedEls);
    };
    
    this.el.addEventListener('gripup', this.removePiece);
  },
  remove: function() {
    this.el.removeEventListener('gripup', this.removePiece);
  }
})