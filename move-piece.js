AFRAME.registerComponent("move-piece", {
  init: function() {
    let el = this.el;
    let raycaster = el.getAttribute("raycaster");

    this.startGrip = function() {
      if (intersectedEl == null) {
        return;
      }
      
      if (intersectedEl.parentNode.getAttribute("id") != "white_container" &&
        intersectedEl.parentNode.getAttribute("id") != "black_container") {
        return;
      }
      let d = document.getElementById("board").getAttribute("position").y + 0.4;
      let position = el.getAttribute('position');
      let originCoordinate = [
        position.x + raycaster.origin.x,
        position.y + raycaster.origin.y,
        position.z + raycaster.origin.z
      ];
      let direction = [
        raycaster.direction.x,
        raycaster.direction.y,
        raycaster.direction.z
      ];
      let intersection = findIntersection([0, 1, 0], d, originCoordinate, direction);
      console.log(intersection); // TODO
      //intersectedEl.parentNode.object3D.position.x = intersection[0];
      //intersectedEl.parentNode.object3D.position.z = intersection[2];
    };

    this.el.addEventListener("gripdown", this.startGrip);
  },

  remove: function() {
    this.el.removeEventListener("gripdown", this.startGrip);
  }
});
