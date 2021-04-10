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
      
      let chosenPiece = intersectedEl.parentNode;
      let boardPosition = document.getElementById("board").getAttribute("position");
      inInterval = setInterval(function() {
        let d = boardPosition.y + 0.4;
        let intersection = intersectionOfLaserAndBoard(el, d);
        let x = intersection[0];
        let z = intersection[2];
        if (game.withinBoardArea(x, z)) {
          let neartestGrid = findNearestGridCenter(x, z);
          x = neartestGrid[0];
          z = neartestGrid[1];
        }
        chosenPiece.object3D.position.x = x;
        chosenPiece.object3D.position.y = boardPosition.y + 0.6;
        chosenPiece.object3D.position.z = z;
      }, 2);
    };
    
    this.drop = function() {
      clearInterval(inInterval);
    }

    this.el.addEventListener("gripdown", this.startGrip);
    this.el.addEventListener()
  },

  remove: function() {
    this.el.removeEventListener("gripdown", this.startGrip);
  }
});
