var m      = require("mithril"),
    Reveal = require("reveal.js");

    // Presentation Slides.
    //slides = require("./js/slides");

// Global CSS output by Browserify via Modular CSS
require("./css/import-reveal.css");
require("./css/import-codemirror.css");
require("./css/global.css");


function configure(element, initialized) {

   if(initialized) return;

   Reveal.initialize({
     height: 600,
     width: 1200,
     minScale: 1,
     maxScale: 1,
     transition: "fade",
     center: false
   });
}

m.render(document.body, m("div", {class: "reveal", config: configure}, require("./js/slides.js")));
