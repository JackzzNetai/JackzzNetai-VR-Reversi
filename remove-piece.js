AFRAME.registerComponent('remove-piece', {
  init: function() {
    let el = this.el;
    
    this.removePiece = function() {
      if (intersectedEl != null) {
        if (intersectedEl.getAttribute('id') != "board") {
          intersectedEl.parentNode.removeChild(intersectedEl);
        }
      }
    };
    
    this.el.sceneEl.addEventListener('gripup', this.removePiece);
  },
  remove: function() {
    this.el.sceneEl.removeEventListener('gripup', this.removePiece);
  }
})