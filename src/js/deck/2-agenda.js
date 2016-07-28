var m = require("mithril");

var slide = {
  view: function() {
    return m("section", {}, [
      m("h1", "Agenda"),
      m("ul", [
        m("li", {class: "fragment"}, "What are Prototypes?"),
        m("li", {class: "fragment"}, "How to use Prototypes"),
        m("li", {class: "fragment"}, "How not to use Prototypes"),
        m("li", {class: "fragment"}, "Other fun stuff")
      ])
    ]);
  }
}

module.exports = slide;
