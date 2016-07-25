var m      = require("mithril"),
    slides = require("./js/deck");
    
    // Presentation Slides. 
    //slides = require("./js/slides");
    
// Global CSS output by Browserify via Modular CSS
require("./css/presentation.css");


// Adopted from @BarneyCarroll's Ember London Slide Deck. 
let resolution = undefined;
let buffer     = '';

window.addEventListener( "keydown", ( { key, which } ) => {
  var slide = parseInt( m.route.param( "slide" ));

  if( which > 36 && which < 41 )
    m.route( "/" + Math.max( 0,
      Math.min( slides.length - 1,
        slide + ( which > 38 ? 1 : -1 )
      )
    ) )

  else if( typeof parseInt( key ) === "number" ) {

    buffer += key;

    clearTimeout(resolution);

    resolution = setTimeout( () => {
      var destination = parseInt( buffer )

      if( destination in slides )
        m.route( "/" + destination )

      buffer = ""
    }, 100);
  }
  else return;

  m.redraw();
});

m.route( document.body, "/0", {
  "/:slide" : {
    controller : function(){
      const slide = parseInt( m.route.param( "slide" ));

      if( !slide && slide !== 0 )
        m.route( "/0" )

      m.redraw.strategy( "diff" )

      return { slide }
    },

    view : ( { slide } ) =>
      m( "article", {
        style : {
          transform : "translateY("+  -slide * 100 + "vh)"
        }
      },
        slides.map( ( content, index ) =>
          m( "section",
            m( "main", content ),
            m( "aside", index + 1 )
          )
        )
      )
  }
})


