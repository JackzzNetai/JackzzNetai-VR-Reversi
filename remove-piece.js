AFRAME.registerComponent("remove-piece", {
  init: function() {
    this.removePiece = function() {
      if (
        intersectedEl != null &&
        intersectedEl.getAttribute("id") != "board" &&
        intersectedEl.parentNode.getAttribute("id") != "turn_indicator" &&
        intersectedEl.parentNode.getAttribute("id") != "white_container" &&
        intersectedEl.parentNode.getAttribute("id") != "black_container"
      ) {
        let piece = intersectedEl.parentNode;
        let grid = game.getGridByPieceId(piece.getAttribute("id"));
        game.pos[grid[0]][grid[1]] = null;
        game.gameset = false;
        game.turn -= 1;
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