var m = require("mithril");

var slide = {
  view: function() {
    return m("section", {}, [
      m("section", [
        m("h1", "Ways to misuse the prototype"),
        m("ul", [
          m("li", {class: "fragment"}, "Adding cruft"),
          m("li", {class: "fragment"}, "Overwriting"),
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
