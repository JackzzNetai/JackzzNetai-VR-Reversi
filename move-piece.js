var gripped = false;

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

      //↑y
      //  0.8
      //  0.7
      //  0.6
      //  0.5
      //  0.4
      //  0.3
      //  0.2
      //  0.1
      //  0.0   board center
      
      let chosenPiece = intersectedEl.parentNode;
      let boardPosition = document.getElementById("board").getAttribute("position");
      gripped = true;
      setInterval(function() {
        let d = boardPosition.y + 0.4;
        let intersection = intersectionOfLaserAndBoard(el, d);
        let x = intersection[0];
        let z = intersection[2];
        if (-4 < x && x < 4 && -4 < z && z < 4) { // within the board range
          let neartestGrid = findNearestGridCenter(x, z);
          x = neartestGrid[0];
          z = neartestGrid[1];
        }
        chosenPiece.object3D.position.x = x;
        chosenPiece.object3D.position.y = boardPosition.y + 0.6;
        chosenPiece.object3D.position.z = z;
      }, 2);
    };

    this.el.addEventListener("gripdown", this.startGrip);
  },

  remove: function() {
    this.el.removeEventListener("gripdown", this.startGrip);
  }
});
