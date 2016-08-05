var m = require("mithril"),
    editor = require("codemirror");

// Extra codemirror packages that need to be bundled.
require('codemirror/mode/javascript/javascript');
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/edit/closebrackets");


var component = {
  controller: function(options) {
    var ctrl = this;

    ctrl.code = (options && options.code) || undefined;
    console.log(ctrl.code);
    ctrl.setup = function(element, initialized) {

      if(initialized) return;

      ctrl.editor = editor(element, {
        lineNumbers: true,
        lineWrapping: true,
        value: 'var self = this' //ctrl.code ? ctrl.code : ''
      });

      console.log('ctrl.editor', ctrl.editor)


      setInterval(function() {
        ctrl.editor.refresh();
      }, 1000);
    }
  },

  view: function(ctrl) {
    return m("div", {
      config: ctrl.setup,
      ondblclick: function() {
        eval("(function() {" + ctrl.editor.getValue() + "})()")
      }
    });
  }
}

module.exports = component;
