var m = require("mithril"),
    editor = require("codemirror");

// Extra codemirror packages that need to be bundled. 
require('codemirror/mode/javascript/javascript');
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/edit/closebrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/addon/comment/continuecomment");

var component = {
  controller: function(options) {
    var ctrl = this;

    ctrl.setup = function(element, initialized) {
      if(initialized) return;

      ctrl.code = editor(element, {
        lineNumbers: true
      });
    }
  },

  view: function(ctrl, options) {
    return m('div', {config: ctrl.setup});
  }
}

module.exports = component;