var turn = 1;

AFRAME.registerComponent('place-piece', {
  init: function() {
    let el = this.el;
    
    this.placePiece = function(e) {
      let p = e.detail.intersection.point;
      let scene = document.querySelector('a-scene');
      let boardY = document.getElementById("board").getAttribute('position').y;
      console.log(boardY + PIECE_DEFAULT_Y - BOARD_DEFAULT_Y);
      
      let newPiece = document.createElement('a-entity');
      newPiece.setAttribute('', );
      
    }
    
    this.el.addEventListener('click', this.placePiece);
  },
  remove: function() {
    this.el.removeEventListener('click', this.placePiece);
  }
});



