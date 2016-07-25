var m = require("mithril"),
    codemirror = require("../cmp/codemirror.js");

var slide = {
  view: function() {
    return m("section", {}, [
        m("h1", {}, "The Prototype"),
        m("h2", "What is even happening right now?")
    ]);
  }
}

module.exports = slide;
