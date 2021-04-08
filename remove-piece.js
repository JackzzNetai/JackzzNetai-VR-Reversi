AFRAME.registerComponent("remove-piece", {
  init: function() {
    this.removePiece = function() {
      if (intersectedEl != null && intersectedEl.getAttribute("id") != "board") {
        let piece = intersectedEl.parentNode;
        let grid = game.getGridByPieceId(piece.getAttribute("id"));
        game.pos[grid[0]][grid[1]] = null;
        piece.parentNode.removeChild(piece);
        intersectedEl = null;
      }
    };

    this.el.addEventListener("gripup", this.removePiece);
  },
  remove: function() {
    this.el.removeEventListener("gripup", this.removePiece);
  }
});
