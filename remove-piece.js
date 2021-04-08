AFRAME.registerComponent('remove-piece', {
  init: function() {
    let el = this.el;
    test = el;
    
    this.removePiece = function() {
      let intersectedEls = el.getAttribute('raycaster').intersectedEls;
      console.log(intersectedEls);
    };
    
    this.el.sceneEl.addEventListener('click', this.removePiece);
  },
  remove: function() {
    this.el.sceneEl.removeEventListener('click', this.removePiece);
  }
})