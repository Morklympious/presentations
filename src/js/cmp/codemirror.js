var m = require("mithril"),
    editor = require("codemirror"),
    Reveal = require("reveal.js");

// Extra codemirror packages that need to be bundled.
require('codemirror/mode/javascript/javascript');
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/edit/closebrackets");
//srequire("codemirror/addon/selection/active-line");
//require("codemirror/addon/comment/continuecomment");

var component = {
  controller: function(options) {
    var ctrl = this;

    ctrl.code = (options && options.code) || {};

    ctrl.setup = function(element, initialized) {

      if(initialized) return;

      ctrl.editor = editor(element, {
        lineNumbers: true,
        lineWrapping: true,
        theme: "twilight",
        value: ctrl.code
      });


      setInterval(function() {
        ctrl.editor.refresh();
      }, 1000);
    }
  },

  view: function(ctrl, options) {
    return m("div", {config: ctrl.setup});
  }
}

module.exports = component;
