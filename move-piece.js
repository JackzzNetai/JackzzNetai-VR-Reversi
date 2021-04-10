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

      let chosenPiece = intersectedEl.parentNode;
      let boardPosition = document.getElementById("board").getAttribute("position");
      gripped = true;
      setInterval(function() {
        let d = boardPosition.y + 0.7;
        let intersection = intersectionOfLaserAndBoard(el, d);
        chosenPiece.object3D.position.x = intersection[0];
        chosenPiece.object3D.position.y = boardPosition.y + 0.6;
        chosenPiece.object3D.position.z = intersection[2];
      }, 2);
    };

    this.el.addEventListener("gripdown", this.startGrip);
  },

  remove: function() {
    this.el.removeEventListener("gripdown", this.startGrip);
  }
});
