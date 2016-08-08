var  m = require("mithril"),
  code = require("../cmp/codemirror");


module.exports = [
  {
    view: function() {
      return m("section", {}, [
          m("h1", "The Prototype"),
          m("h2", "What is even happening right now?")
      ]);
    }
  },

  {
    view: function() {
      return m("section", {}, [
        m("section",   [
          m("h1", "Who am I?"),
          m("ul", [
            m("li", "Bradley Stafford"),
            m("li", "Front-end Engineer @ Amazon (AUI Team)"),
            m("li", "Code Jester"),
            m("li", "Nicolas Cage enthusiast"),
            m("li", "Non-sequitur list creator"),
            m("li", "Hats")
          ])
        ]),
      ]);
    }
  },

  {
    view: function() {
     return m("section", {}, [
      m("h1", "Before we talk about Prototypes"),
      m("h2", "Let's get some things straight"),
      m("ul", [
        m("li", "Everything is effectively an object in javascript"),
        m("li", "No, not EVERYTHING, but yes, everything."),
        m("li", "Objects? Duh."),
        m("li", "Arrays? Absolutely"),
        m("li", "Strings, Booleans, Numbers? Mostly.")
      ])
     ]);
    }
  },

  {
    view: function() {
     return m("section", {}, [
      m("h1", "Let's talk about Prototypes"),
      m("h2", "What is a prototype?"),
      m("ul", [
        m("li", "Object allowing inheritance and reusability"),
        m("li", "gives basic, free functionality of the major types"),
        m("li", "Each type has its respective prototype + object")
      ]),
      m("h2", "If you come from an OO background..."),
      m("code", "Class Object extends Object.prototype")
     ]);
    }
  },

  {
    view: function() {
     return m("section", {}, [
       m("h1", "Talking about code sucks."),
       m(code, {code: "var obj = {one: 'nicolas', two: 'cage'};"})
     ]);
   },

  },

  { // After demonstrating the object using a property not immediate to itself.
   view: function() {
     return m("section", {}, [
       m("h1", "What the hell was that?"),
       m("h2", "Wow Brad what is this third grade?"),
       m("ul", [
         m("li", "We used the object's prototype to gain access to a method"),
         m("li", "Prototypes are cool because they're a single point of contact across types"),
         m("li", "This was all possible thanks to the prototype chain!")
       ])
     ]);
   }
  },

  { // Explain the Prototype Chain
   view: function() {
     return m("section", [
       m("section", [
         m("h1", "The Prototype Chain"),
         m("ul", [
           m("li", "It's some kind of... chain"),
           m("li", "for prototypes"),
           m("li", "happy trail of weird looking objects"),
           m("li", "trail of tears if you don't like javascript"),
         ])
       ])
     ]);
   }
  },

  { // Object with toBradley Example
   view: function() {
    return m("section", {}, [
      m("h1", "Talking about code sucks. (Pt. II)"),
      m("p", "The Reckoning."),
      m(code, {code: require("../examples/toBradley-example") })
    ]);
   }
  },

  { // Example with object get/set for overview
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "It's not just basic types"),
          m("ul", [
            m("li", "Creating a custom object can have a prototype"),
            m("li", "more ideal than a million member properties"),
            m("li", "persistent data"),
            m("li", "easily overridden")
          ])
        ]),
        m("section", [
          m("h1", "inside the Cage"),
          m(code, {code: require("../examples/nicolas-cage-example")})
        ])
      ]);
    }
  },

  { // Example with object get/set for overview
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Prototype delegation"),
          m("h2", "Makes for performant javascript"),
          m("ol", [
            m("li", "Is the stuff I'm trying to access on the current object/structure?"),
            m("li", "If not, is there a prototype I can look at?"),
            m("li", "If yes, look at that object and see if it's there"),
            m("li", "If not, return to step 2")
          ]),
          
        ])
      ]);
    }
  },

  { // Ways to use the prototype
   view: function() {
     return m("section", [
       m("section", [
         m("h1", "Ways to use Prototypes"),
         m("ul", [
           m("li", "Inheritance"),
           m("li", "Method borrowing"),
           m("li", "Delegation")
         ])
       ])
     ]);
   }
 },

  { // Ways to misuse the prototype
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Ways to MISUSE Prototypes"),
          m("ul", [
            m("li", "Adding a bunch of crap to the Prototype"),
            m("li", "Completely stomping the Prototype"),
            m("li", "Binding")
          ])
        ])
      ]);
    }
  },

  { // Ways to misuse the prototype
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Funsies"),
        ]),
        m("section", [
          m("h1", "Constructor Pattern"),
          m(code)
        ]),
        m("section", [
          m("h1", "Object.create()"),
          m(code)
        ])
      ]);
    }
  },

  { // Conclusion / Warning?
   view: function() {
     return m("section", [
       m("section", [
         m("h1", "Some takeaways (AKA praise the sun he's almost finished)"),
         m("ul", [
           m("li", "Prototypes are powerful"),
           m("li", "Prototypes are useful"),
           m("li", "custom prototypes are dynamically interpreted"),
           m("li", "extending an existing Prototype gives functionality to all instances"),
           m("li", "creating a new Prototype gives you full flexibility"),
           m("li", "hats")
         ])
       ])
     ]);
   }
 },

 { // Conclusion / Warning?
  view: function() {
    return m("section", [
      m("section", [
        m("h1", "Thanks!")
      ])
    ]);
  }
 }


]
