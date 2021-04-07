AFRAME.registerComponent("controller", {
  config: {
    "oculus-quest-controls": {
      cursor: {
        downEvents: ["triggerdown", "gripdown"],
        upEvents: ["triggerup", "gripup"]
      }
    },
    
    "oculus-touch-controls": {
      cursor: {
        downEvents: ["triggerdown", "gripdown"],
        upEvents: ["triggerup", "gripup"]
      }
    },

    "generic-tracked-controller-controls": {
      cursor: {
        downEvents: ["triggerdown"],
        upEvents: ["triggerup"]
      }
    }
  }
});
