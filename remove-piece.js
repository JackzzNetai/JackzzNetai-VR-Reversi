AFRAME.registerComponent("remove-piece", {
  init: function() {
    this.removePiece = function() {
      if (
        intersectedEl != null &&
        intersectedEl.getAttribute("id") != "board" &&
        intersectedEl.parentNode.getAttribute("id") != "turn_indicator"
      ) {
        let piece = intersectedEl.parentNode;
        let grid = game.getGridByPieceId(piece.getAttribute("id"));
        game.pos[grid[0]][grid[1]] = null;
        game.gameset = false;
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