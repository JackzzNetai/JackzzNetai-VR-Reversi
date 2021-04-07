AFRAME.registerComponent("slide-up-down", {
  init: function() {
    let el = this.el;

    this.slideDown = function() {
      let p = el.getAttribute("position");
      let params = {
        property: "position",
        to: {
          x: p.x,
          y: p.y - 1,
          z: p.z
        },
        dur: 500,
        easing: "linear"
      };
      el.setAttribute("animation", params);
    };

    this.slideUp = function() {
      let p = el.getAttribute("position");
      let params = {
        property: "position",
        to: {
          x: p.x,
          y: p.y + 1,
          z: p.z
        },
        dur: 500,
        easing: "linear"
      };
      el.setAttribute("animation", params);
    };

    this.slideUpDown = function(e) {
      if (e.detail.y > 0.95) {
        let p = el.getAttribute("position");
        let params = {
          property: "position",
          to: {
            x: p.x,
            y: p.y - 1,
            z: p.z
          },
          dur: 500,
          easing: "linear"
        };
        el.setAttribute("animation", params);
      }
      if (e.detail.y < -0.95) {
        let p = el.getAttribute("position");
        let params = {
          property: "position",
          to: {
            x: p.x,
            y: p.y + 1,
            z: p.z
          },
          dur: 500,
          easing: "linear"
        };
        el.setAttribute("animation", params);
      }
    };

    this.el.sceneEl.addEventListener("abuttondown", this.slideDown);
    this.el.sceneEl.addEventListener("bbuttondown", this.slideUp);
    this.el.sceneEl.addEventListener("thumbstickmoved", this.slideUpDown);
  },
  remove: function() {
    this.el.sceneEl.removeEventListener("abuttondown", this.slideDown);
    this.el.sceneEl.removeEventListener("bbuttondown", this.slideUp);
    this.el.sceneEl.removeEventListener("thumbstickmoved", this.slideUpDown);
  }
});
