var gripped = false;

AFRAME.registerComponent("move-piece", {
  init: function() {
    let el = this.el;
    let raycaster = el.getAttribute("raycaster");

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

      gripped = true;
      setInterval(function() {
        let intersection = intersectionOfLaserAndBoard(el, raycaster);
        intersectedEl.parentNode.object3D.position.x = intersection[0];
        intersectedEl.parentNode.object3D.position.z = intersection[2];
      }, 5);
    };

    this.el.addEventListener("gripdown", this.startGrip);
  },

  remove: function() {
    this.el.removeEventListener("gripdown", this.startGrip);
  }
});
