var m = require("mithril"),
    codemirror = require("../cmp/codemirror.js");

var slide = {
  view: function() {
    return m("section", {}, [

      m("section", {}, [
          m("h1", {}, "The Prototype"),
          m("span", "What is even happening right now?")
      ]),
      m("section", {}, [
          m("h1", {}, "The Prototype"),
          m("span", "What is even happening right now?")
      ]),
      m("section", [
        m("h1", "fucking get ready"),
        m(codemirror)
      ]),


    ]);
  }
}

module.exports = slide;
