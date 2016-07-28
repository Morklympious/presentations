var m = require("mithril");

var slide = {
  view: function() {
    return m("section", {}, [
      m("section", [
        m("h1", "The Prototype"),
      ]),
      m("section", [
        m("h1", "The Prototype"),
        m("span", {class: "fragment"}, "What do?")
      ]),
      m("section", [
        m("h1", "The Prototype"),
        m("span", {class: "fragment"}, "How do I even?"),
      ]),
      m("section", [
        m("h1", "The Prototype"),
        m("span", {class: "fragment"}, "Hello, I stumbled in because some dude told me there was a Charizard here")
      ])
    ]);
  }
}

module.exports = slide;
