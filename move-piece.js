AFRAME.registerComponent("move-piece", {
  init: function() {
    let el = this.el;
    let raycaster = el.getAttribute("raycaster");

    this.startGrab = function() {
      if (intersectedEl.parentNode.getAttribute("id") != "white_container" &&
        intersectedEl.parentNode.getAttribute("id") != "black_container") {
        return;
      }
      let d = document.getElementById("board").getAttribute("position").y + 0.4;
      let originCoordinate = [
        el.position[0] + raycaster.origin[0],
        el.position[1] + raycaster.origin[1],
        el.position[2] + raycaster.origin[2]
      ];
      let direction = [
        raycaster.direction[0],
        raycaster.direction[1],
        raycaster.direction[2]
      ];

      let intersection = findIntersection([0, 1, 0], d, originCoordinate, direction);
      //intersectedEl.parentNode.object3D.position.x = intersection[0];
      //intersectedEl.parentNode.object3D.position.z = intersection[2];
    };

    this.el.addEventListener("gripdown", this.startGrab);
  },

  remove: function() {
    this.el.removeEventListener("gripdown", this.startGrab);
  }
});
