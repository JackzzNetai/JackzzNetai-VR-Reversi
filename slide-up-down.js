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

    this.el.sceneEl.addEventListener("abuttondown", this.slideDown);
  },
  remove: function() {
    this.el.sceneEl.removeEventListener("abuttondown", this.slideDown);
  }
});
