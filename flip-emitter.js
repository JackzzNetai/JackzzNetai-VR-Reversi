AFRAME.registerComponent("flip-emitter", {
  init: function() {
    let el = this.el;
    this.flipCall = function() {
      if (el.getAttribute("id") === "turn_indicator") {
        game.currPlayer = !game.currPlayer;
      } else {
        game.gameset = false;
        let grid = game.getGridByPieceId(el.getAttribute("id"));
        game.pos[grid[0]][grid[1]] = !game.pos[grid[0]][grid[1]];
      }
      el.emit("flipEvent", {
        flipDirection: { x: 540, y: 0, z: 0 },
        flipDuration: 300
      });
    };
    this.el.addEventListener("click", this.flipCall);
  },
  remove: function() {
    this.el.removeEventListener("click", this.flipCall);
  }
});
