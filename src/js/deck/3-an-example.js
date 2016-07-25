var m = require("mithril"),
    codemirror = require("../cmp/codemirror.js");

var slide = {
  view: function() {
    return m("section", {}, [
        m("h1", {}, "What are prototypes?"),
        m("ul", [
          m("li", "Prototypes are essentially blueprints"),
          m("li", [
            m("p", "Every major type in javascript has a prototype"),
            m("ul", [
              m("li", "Object"),
              m("li", "Array"),
              m("li", "Number"),
              m("li", "Boolean"),
              m("li", "String")
            ])
          ])
        ])
    ]);
  }
}

module.exports = slide;
