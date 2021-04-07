var turn = 1;

AFRAME.registerComponent('place-piece', {
  init: function() {
    let el = this.el;
    
    this.placePiece = function(e) {
      let p = e.detail.intersection.point;
      let scene = document.querySelector('a-scene');
      
      let = document.createElement
    }
    
    this.el.addEventListener('click', this.placePiece);
  },
  remove: function() {
    this.el.removeEventListener('click', this.placePiece);
  }
});