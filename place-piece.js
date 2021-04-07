var turn = 1;

AFRAME.registerComponent('place-piece', {
  init: function() {
    let el = this.el;
    
    this.placePiece = function(e) {
      let p = e.detail.intersection.point;
      let x = p.x;
      let z = p.z;
      if (x <= -4 || x >= 4 || z <= -4 || z >= 4) { // in case of edge of the board
        return null;
      }

      if (round(x) === x || round(z) === z) { // right in the middle of two grid (extremely rare case)
        return null;
      }
      
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
      
      let boardY = document.getElementById("board").getAttribute('position').y;
      let xzPair = findNearestGridCenter(x, z);
      newPiece.setAttribute('position', {x: xzPair[0], y: boardY + PIECE_DEFAULT_Y - BOARD_DEFAULT_Y, z: xzPair[1]});
      newPiece.setAttribute('up-flip-down', {});
      newPiece.setAttribute('slide-up-down', {});
      document.querySelector('a-scene').appendChild(newPiece);
      
      turn += 1;
    }
    
    this.el.addEventListener('click', this.placePiece);
  },
  remove: function() {
    this.el.removeEventListener('click', this.placePiece);
  }
});
