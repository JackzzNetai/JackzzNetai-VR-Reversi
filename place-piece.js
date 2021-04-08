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
      let move = game.convertXZCoordinateToPosIndex(xzPair);
      if (!game.isValidMove(move, game.currPlayer)) {
        return;
      }
      
      // make a new piece and place it at the right coordinate
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
      newPiece.setAttribute('position', {x: xzPair[0], y: boardY + PIECE_DEFAULT_Y - BOARD_DEFAULT_Y + 0.5, z: xzPair[1]});
      newPiece.setAttribute('id', "" + move[0] + move[1]);
      newPiece.setAttribute('up-flip-down', {});
      newPiece.setAttribute('slide-up-down', {});
      newPiece.setAttribute('flip-emitter', {});
      newPiece.setAttribute('animation', {
        property: "position",
        to: {
          x: xzPair[0],
          y: boardY + PIECE_DEFAULT_Y - BOARD_DEFAULT_Y,
          z: xzPair[1]
        },
        dur: 500,
        easing: "linear"
      })
      document.querySelector('a-scene').appendChild(newPiece);
      
      let piecesToBeFlipped = game.applyMove(move, game.currPlayer);
      for (let piece of piecesToBeFlipped) {
        let el = piece[0];
        console.log(el.getAttribute('id'));
        //el.emit('flipEvent', {flipDirection: piece[1], flipDuration: 350});
      }
      
      game.nextTurn();
      if (game.gameset) {
        game.annouceWinner();
      }
    }
    
    this.el.addEventListener('click', this.placePiece);
  },
  remove: function() {
    this.el.removeEventListener('click', this.placePiece);
  }
});
