AFRAME.registerComponent("remove-piece", {
  init: function() {
    this.removePiece = function() {
      if (intersectedEl != null && intersectedEl.getAttribute("id") != "board") {
        intersectedEl.parentNode.removeChild(intersectedEl);
        intersectedEl = null;
      }
    };

    this.el.addEventListener("gripup", this.removePiece);
  },
  remove: function() {
    this.el.removeEventListener("gripup", this.removePiece);
  }
});
