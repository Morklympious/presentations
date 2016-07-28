var m = require("mithril");

var slide = {
  view: function() {
    return m("section", {}, [
      m("section", [
        m("h1", "Ways to use the prototype"),
        m("ul", [
          m("li", {class: "fragment"}, "inheritance"),
          m("li", {class: "fragment"}, "method borrowing"),
          m("li", {class: "fragment"}, "delegation up the prototype chain")
        ])
      ]),
      m("section", [
        m("h1", "Inheritance"),

      ]),
      m("section", [
        m("h1", "Borrowing")
      ])
      m("section", [
        m("h1", "Delegating")
      ])
    ]);
  }
}

module.exports = slide;
