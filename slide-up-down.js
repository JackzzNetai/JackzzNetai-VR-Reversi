AFRAME.registerComponent("slide-up-down", {
  init: function() {
    el = this.el;

    this.animateSlide = function(e) {
      if (e.detail.y > 0.95) {
        let p = el.getAttribute("position");
        let param = {
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
        let param = {
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

    this.el.sceneEl.addEventListener("thumbstickmoved", this.animateSlide);
  },
  remove: function() {
    this.el.sceneEl.removeEventListener("thumbstickmoved", this.animateSlide);
  }
});
