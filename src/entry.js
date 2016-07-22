var m      = require("mithril"),
    reveal = require("reveal"),
    
    // Presentation Slides. 
    slides = require("./js/slides");

// Global CSS output by Browserify via Modular CSS
require("./css/global.css");

// Initialize
function configure (element, initialized) {
  if(initialized) return;

  reveal.initialize({
    minScale: 1.0,
    maxScale: 1.5
  });
}

m.render(document.body, m("div", {class: "reveal", config: configure}, m(slides, { data : [ 1, 2, 3 ] })));

