AFRAME.registerComponent("up-flip-down", {
  init: function() {
    let el = this.el;

    this.animateFlip = function(e) {
      let flipDirection = e.detail.flipDirection;
      let flipDuration = e.detail.flipDuration;

      let currPosition = el.getAttribute("position");
      let x = currPosition.x;
      let y = currPosition.y;
      let z = currPosition.z;
      let params = {
        property: "position",
        to: {
          x: x,
          y: y + 0.6,
          z: z
        },
        dur: flipDuration,
        easing: "linear"
      };

      let currRotation = el.getAttribute("rotation");
      let xR = currRotation.x;
      let yR = currRotation.y;
      let zR = currRotation.z;
      let params2 = {
        property: "rotation",
        to: {
          x: xR + flipDirection.x / 2,
          y: yR + flipDirection.y / 2,
          z: zR + flipDirection.z / 2
        },
        dur: flipDuration,
        easing: "linear"
      };

      el.setAttribute("animation", params);
      el.setAttribute("animation__2", params2);

      setTimeout(function() {
        params = {
          property: "position",
          to: {
            x: x,
            y: y,
            z: z
          },
          dur: flipDuration,
          easing: "linear"
        };
        params2 = {
          property: "rotation",
          to: {
            x: xR + flipDirection.x,
            y: yR + flipDirection.y,
            z: zR + flipDirection.z
          },
          dur: flipDuration,
          easing: "linear"
        };

        el.setAttribute("animation", params);
        el.setAttribute("animation__2", params2);

        setTimeout(function() {
          // make a new piece and place it at the right coordinate
          let newPiece = document.createElement("a-entity");
          let whiteCylinder = document.createElement("a-cylinder");
          whiteCylinder.setAttribute("radius", "0.4");
          whiteCylinder.setAttribute("height", "0.1");
          whiteCylinder.setAttribute("color", "#FFFFFF");
          let blackCylinder = document.createElement("a-cylinder");
          blackCylinder.setAttribute("radius", "0.4");
          blackCylinder.setAttribute("height", "0.1");
          blackCylinder.setAttribute("color", "#000000");
          let id = el.getAttribute("id");
          let pieceColor = null;
          if (id === "turn_indicator") {
            pieceColor = game.currPlayer;
          } else {
            pieceColor = game.getPieceAt(game.getGridByPieceId(id));
          }
          if (pieceColor == false) {
            //white's turn
            whiteCylinder.setAttribute("position", "0 .05 0");
            blackCylinder.setAttribute("position", "0 -.05 0");
          } else {
            //black's turn
            whiteCylinder.setAttribute("position", "0 -.05 0");
            blackCylinder.setAttribute("position", "0 .05 0");
          }
          newPiece.appendChild(whiteCylinder);
          newPiece.appendChild(blackCylinder);

          newPiece.setAttribute("position", { x: x, y: y, z: z });
          newPiece.setAttribute("id", id);
          newPiece.setAttribute("up-flip-down", {});
          newPiece.setAttribute("slide-up-down", {});
          newPiece.setAttribute("flip-emitter", {});
          document.querySelector("a-scene").appendChild(newPiece);

          el.parentNode.removeChild(el);
        }, flipDuration);
      }, flipDuration);
    };

    this.el.addEventListener("flipEvent", this.animateFlip);
  },
  remove: function() {
    this.el.removeEventListener("flipEvent", this.animateFlip);
  }
});
