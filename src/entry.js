var m      = require("mithril"),
    Reveal = require("reveal.js");

    // Presentation Slides.
    //slides = require("./js/slides");

// Global CSS output by Browserify via Modular CSS
require("./css/import-reveal.css");
require("./css/import-codemirror.css");

function configure(element, initialized) {
   if(initialized) return;
   console.log(element, initialized);
   Reveal.initialize({
     height: 700,
     width: 960,
     center: false
   });
}

m.render(document.body, m("div", {class: "reveal", config: configure }, require("./js/slides.js")) );
