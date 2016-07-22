var m       = require("mithril"),
    slide   = require("./slide");


var component = {
  controller : function(options) {
    var ctrl = this;

    ctrl.data = options.data;
  },

  view : function(ctrl) {
    return m("div", { class : "slides" }, ctrl.data.map(function(datum) { 
        return m(slide, { data : datum });
      })
    );
  }
};

module.exports = component;
