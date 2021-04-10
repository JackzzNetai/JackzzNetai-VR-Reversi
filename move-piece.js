var chosenPiece = null;
var inInterval = null;

AFRAME.registerComponent("move-piece", {
  init: function() {
    let el = this.el;

    this.startGrip = function() {
      if (intersectedEl == null) {
        return;
      }

      if (
        intersectedEl.parentNode.getAttribute("id") != "white_container" &&
        intersectedEl.parentNode.getAttribute("id") != "black_container"
      ) {
        return;
      }

      // Illustration during piece movement:
      //↑y
      // + 0.8
      // + 0.7   piece top surface
      // + 0.6   piece center
      // + 0.5   board edge highest (piece lower surface)
      // + 0.4   board surface
      // + 0.3
      // + 0.2
      // + 0.1
      // + 0.0   board center

      chosenPiece = intersectedEl.parentNode;
      let boardPosition = document.getElementById("board").object3D.position;
      inInterval = setInterval(function() {
        let d = boardPosition.y + 0.4;
        let intersection = intersectionOfLaserAndBoard(el, d);
        let x = intersection[0];
        let z = intersection[2];
        if (game.withinBoardArea(x, z)) {
          let nearestGrid = findNearestGridCenter(x, z);
          x = nearestGrid[0];
          z = nearestGrid[1];
        }
        chosenPiece.object3D.position.x = x;
        chosenPiece.object3D.position.y = boardPosition.y + 0.6;
        chosenPiece.object3D.position.z = z;
      }, 2);
    };

    this.drop = function() {
      if (chosenPiece == null) {
        return;
      }
      let piecePosition = chosenPiece.object3D.position;
      let pieceColor =
        chosenPiece.getAttribute("id") === "white_container" ? false : true;
      
      let pieceY =
          document.getElementById("board").object3D.position.y +
          PIECE_DEFAULT_Y -
          BOARD_DEFAULT_Y;
      if (game.withinBoardArea(piecePosition.x, piecePosition.z)) {
        // Drop a piece
        let x = piecePosition.x;
        let z = piecePosition.z;
        let grid = game.convertXZCoordinateToPosIndex([x, z]);

        let newPiece = document.createElement("a-entity");
        let whiteCylinder = document.createElement("a-cylinder");
        whiteCylinder.setAttribute("radius", "0.4");
        whiteCylinder.setAttribute("height", "0.1");
        whiteCylinder.setAttribute("color", "#FFFFFF");
        let blackCylinder = document.createElement("a-cylinder");
        blackCylinder.setAttribute("radius", "0.4");
        blackCylinder.setAttribute("height", "0.1");
        blackCylinder.setAttribute("color", "#000000");
        if (pieceColor) {
          // black
          whiteCylinder.setAttribute("position", "0 -.05 0");
          blackCylinder.setAttribute("position", "0 .05 0");
        } else {
          // white
          whiteCylinder.setAttribute("position", "0 .05 0");
          blackCylinder.setAttribute("position", "0 -.05 0");
        }
        newPiece.appendChild(whiteCylinder);
        newPiece.appendChild(blackCylinder);

        newPiece.setAttribute("position", {
          x: x,
          y: pieceY + 0.1,
          z: z
        });
        newPiece.setAttribute("id", "" + grid[0] + grid[1]);
        newPiece.setAttribute("up-flip-down", {});
        newPiece.setAttribute("slide-up-down", {});
        newPiece.setAttribute("flip-emitter", {});
        newPiece.setAttribute("animation", {
          property: "position",
          to: {
            x: x,
            y: pieceY,
            z: z
          },
          dur: 200,
          easing: "linear"
        });
        document.querySelector("a-scene").appendChild(newPiece);
      }
      
      clearInterval(inInterval);
      piecePosition.x = 5;
      piecePosition.y =
        document.getElementById("board").object3D.position.y +
        PIECE_DEFAULT_Y -
        BOARD_DEFAULT_Y;
      if (pieceColor) {
        // black_container
        piecePosition.z = 3.5;
      } else {
        // white_container
        piecePosition.z = 2.5;
      }
      chosenPiece = null;
      inInterval = null;
    };

    this.el.addEventListener("gripdown", this.startGrip);
    this.el.addEventListener("gripup", this.drop);
  },

  remove: function() {
    this.el.removeEventListener("gripdown", this.startGrip);
    this.el.removeEventListener("gripup", this.drop);
  }
});
