var turn = 1;

AFRAME.registerComponent('place-piece', {
  init: function() {
    let el = this.el;
    
    this.placePiece = function(e) {
      let p = e.detail.intersection.point;
      let scene = document.querySelector('a-scene');
      let boardY = document.getElementById("board").getAttribute('position').y;
      console.log(y + PIECE_DEFAULT_Y );
      
      let new_piece = document.createElement('a-entity');
    }
    
    this.el.addEventListener('click', this.placePiece);
  },
  remove: function() {
    this.el.removeEventListener('click', this.placePiece);
  }
});



