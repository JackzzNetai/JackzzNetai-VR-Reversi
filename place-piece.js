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
      newPiece.appendChild(whiteCylinder);
      newPiece.setAttribute('', );
      
      turn += 1;
    }
    
    this.el.addEventListener('click', this.placePiece);
  },
  remove: function() {
    this.el.removeEventListener('click', this.placePiece);
  }
});


<a-entity position=".5 .5 -1.5" up-flip-down slide-up-down>
        <a-cylinder
          position="0 .05 0"
          radius="0.4"
          height="0.1"
          color="#FFFFFF"
        ></a-cylinder>
        <a-cylinder
          position="0 -.05 0"
          radius="0.4"
          height="0.1"
          color="#000000"
        ></a-cylinder>
      </a-entity>
