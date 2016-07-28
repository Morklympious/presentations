var m = require("mithril");
var codemirror = require("../cmp/codemirror");

var slide = {
  view: function() {
    return m("section", {}, [
      m("section", [
        m("h1", "What are Prototypes?"),
        m("ul", [
          m("li", "Prototypes are essentially \"blueprints.\""),
          m("li", "Every major type has a prototype")
        ]),
        m(codemirror, {code: "this this this"})
      ]),
      m("section", [
        m("h1", "Bradley Stafford"),
        m("ul", [
          m("li", {class: "fragment"}, "Front-end Engineer at Amazon"),
          m("li", {class: "fragment"}, "Nicolas Cage enthusiast")
        ])
      ]),
      m("section", [
        m("h1", "Anyways...")
      ])
    ]);
  }
}

module.exports = slide;
