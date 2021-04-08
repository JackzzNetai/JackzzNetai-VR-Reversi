AFRAME.registerComponent('remove-piece', {
  init: function() {
    let el = this.el;
    
    this.removePiece = function() {
      if (intersectedEls != null) {
        if (intersectedEls.getAttribute('id') != "board") {
          intersectedEls.parentNode.removeChild(intersectedEls);
          intersectedEls = null;
        }
      }
    };
    
    this.el.addEventListener('gripup', this.removePiece);
  },
  remove: function() {
    this.el.removeEventListener('gripup', this.removePiece);
  }
})