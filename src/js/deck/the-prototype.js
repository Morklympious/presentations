var m = require("mithril"),
    codemirror = require("../cmp/codemirror.js");

    css = require("../../css/slide.css");

var slide = {
  view: function() {
    return m("section", {}, [
        m("h1", { class: css.heading }, "The Prototype"),
        m("span", "What is even happening right now?")
    ]);
  }
}

module.exports = slide;