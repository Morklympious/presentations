var m = require("mithril");

var component = {
  view: function() {
    return m("div", {class: "slides"}, require("./deck"))
  }
}

module.exports = component;
