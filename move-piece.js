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

      let boardPosition = document.getElementById("board").getAttribute("position");
      gripped = true;
      setInterval(function() {
        let intersection = intersectionOfLaserAndBoard(el, boardPosition);
        intersectedEl.parentNode.object3D.position.x = intersection[0];
        intersectedEl.parentNode.object3D.position.x = intersection[0];
        intersectedEl.parentNode.object3D.position.z = intersection[2];
      }, 2);
    };

    this.el.addEventListener("gripdown", this.startGrip);
  },

  remove: function() {
    this.el.removeEventListener("gripdown", this.startGrip);
  }
});
