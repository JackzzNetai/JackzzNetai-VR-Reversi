AFRAME.registerComponent('remove-piece', {
  init: function() {
    let el = this.el;
    
    this.removePiece = function() {
      
    };
    
    el.addEventListener('gripup', this.removePiece);
  },
  remove: function() {
    
  }
})