var game = new Game();

AFRAME.registerComponent('place-piece', {
  init: function() {
    let el = this.el;
    
    this.placePiece = function(e) {
      let p = e.detail.intersection.point;
      let x = p.x;
      let z = p.z;
      if (x <= -4 || x >= 4 || z <= -4 || z >= 4) { // in case of edge of the board
        return;
      }

      if (Math.round(x) === x || Math.round(z) === z) { // right in the middle of two grid (extremely rare case)
        return;
      }
      
      //check validity
      let xzPair = findNearestGridCenter(x, z);
      if (!game.isValidMove(game.convertXZCoordinateToPosIndex(xzPair), game.currPlayer)) {
        return;
      }
      
      // make a new piece
      let newPiece = document.createElement('a-entity');
      let whiteCylinder = document.createElement('a-cylinder');
      whiteCylinder.setAttribute('radius', "0.4");
      whiteCylinder.setAttribute('height', "0.1");
      whiteCylinder.setAttribute('color', "#FFFFFF");
      let blackCylinder = document.createElement('a-cylinder');
      blackCylinder.setAttribute('radius', "0.4");
      blackCylinder.setAttribute('height', "0.1");
      blackCylinder.setAttribute('color', "#000000");
      if (game.currPlayer == false) { //white's turn
        whiteCylinder.setAttribute('position', "0 .05 0");
        blackCylinder.setAttribute('position', "0 -.05 0");
      } else { //black's turn
        whiteCylinder.setAttribute('position', "0 -.05 0");
        blackCylinder.setAttribute('position', "0 .05 0");
      }
      newPiece.appendChild(whiteCylinder);
      newPiece.appendChild(blackCylinder);
      
      let boardY = document.getElementById("board").getAttribute('position').y;
      newPiece.setAttribute('position', {x: xzPair[0], y: boardY + PIECE_DEFAULT_Y - BOARD_DEFAULT_Y, z: xzPair[1]});
      newPiece.setAttribute('up-flip-down', {});
      newPiece.setAttribute('slide-up-down', {});
      newPiece.setAttribute('flip-emitter', {});
      document.querySelector('a-scene').appendChild(newPiece);
      
      game.nextTurn();
    }
    
    this.el.addEventListener('click', this.placePiece);
  },
  remove: function() {
    this.el.removeEventListener('click', this.placePiece);
  }
});
