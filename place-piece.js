var turn = 1;

AFRAME.registerComponent('place-piece', {
  init: function() {
    let el = this.el;
    
    this.placePiece = function(e) {
      let p = e.detail.intersection.point;
      let scene = document.querySelector('a-scene');
      let boardY = document.getElementById("board").getAttribute('position').y;
      
      let newPiece = document.createElement('a-entity');
      let whiteCylinder = document.createElement('a-cylinder');
      whiteCylinder.setAttribute('radius', "0.4");
      whiteCylinder.setAttribute('height', "0.1");
      whiteCylinder.setAttribute('color', "#FFFFFF");
      let blackCylinder = document.createElement('a-cylinder');
      blackCylinder.setAttribute('radius', "0.4");
      blackCylinder.setAttribute('height', "0.1");
      blackCylinder.setAttribute('color', "#000000");
      if (turn % 2 == 1) { //white's turn
        whiteCylinder.setAttribute('position', "0 .05 0");
        blackCylinder.setAttribute('position', "0 -.05 0");
      } else { //black's turn
        whiteCylinder.setAttribute('position', "0 -.05 0");
        blackCylinder.setAttribute('position', "0 .05 0");
      }
      newPiece.appendChild(whiteCylinder);
      newPiece.appendChild(blackCylinder);
      
      newPiece.setAttribute('position', {x: p.x, y: boardY + PIECE_DEFAULT_Y - BOARD_DEFAULT_Y, z: p.z});
      newPiece.setAttribute('up-flip-down');
      newPiece.setAttribute('slide-up-down');
      scene.appendChild(newPiece);
      
      turn += 1;
    }
    
    this.el.addEventListener('click', this.placePiece);
  },
  remove: function() {
    this.el.removeEventListener('click', this.placePiece);
  }
});
