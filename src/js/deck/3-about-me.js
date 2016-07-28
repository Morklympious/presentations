var m = require("mithril");

var slide = {
  view: function() {
    return m("section", {}, [
      m("section", [
        m("h1", "Who is this clown?")
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
