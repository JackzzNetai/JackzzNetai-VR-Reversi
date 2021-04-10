var gripped = false;

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
      
      gripped = true;     
      while (gripped) {
        let intersection = intersectionOfLaserAndBoard(el, raycaster)
        intersectedEl.parentNode.object3D.position.x = intersection[0];
        intersectedEl.parentNode.object3D.position.z = intersection[2];
      }
    };

    this.dropPiece = function() {
      gripped = false;
    }
    
    this.el.addEventListener("gripdown", this.startGrip);
    this.el.addEventListener("gripup", this.dropPiece);
  },

  remove: function() {
    this.el.removeEventListener("gripdown", this.startGrip);
    this.el.removeEventListener("gripup", this.dropPiece);
  }
});
