AFRAME.registerComponent("controller", {
  config: {
    "oculus-quest-controls": {
      cursor: {
        downEvents: ["triggerdown", "gripdown"],
        upEvents: ["triggerup", "gripup"]
      }
    }
  }
});
