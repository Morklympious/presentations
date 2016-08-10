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
       m(code, {code: require("../examples/first-prototype-example")})
     ]);
   },

  },

  { // After demonstrating the object using a property not immediate to itself.
   view: function() {
     return m("section", {}, [
       m("h1", "Why does this work?"),
       m("h2", "Asking for a friend"),
       m("ul", [
         m("li", "The Prototype chain"),
         m("li", "A singly-linked linked-list"),
         m("li", "Each with member properties"),
         m("li", "Properties are immediately accessible to all objects of that type."),
         m("li", "Each type in javascript has access to its prototype chain")
       ])
     ]);
   }
  },

  { // Object with toBradley Example
   view: function() {
    return m("section", {}, [
      m("h1", "Talking about code sucks. (Pt. II)"),
      m(code, {code: require("../examples/prototype-chain-example") })
    ]);
   }
  },

  {
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "It's not just basic types"),
          m("ul", [
            m("li", "Custom objects can have a prototype"),
            m("li", "more ideal than a million member properties"),
            m("li", "persistent data"),
            m("li", "easy to override for use-cases")
          ])
        ]),
        m("section", [
          m("h1", "Inside the Cage"),
          m(code, {code: require("../examples/nicolas-cage-example")})
        ])
      ]);
    }
  },

  {
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Prototype delegation checklist"),
          m("h2", "For the modern dingus (like the dude that's talking)"),
          m("p", "...He totally wrote that"),
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
            m("li", "Delegation"),
            m("li", "Inheritance"),
            m("li", "Method borrowing"),
          ])
        ]),
        m("section", [
          m("h1", "Delegation"),
          m(code)
        ]),        
        m("section", [
          m("h1", "Inheritance"),
          m(code)
        ]),
        m("section", [
          m("h1", "Method Borrowing"),
          m(code)
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
            m("li", "This is like a blank check"),
            m("li", "full of different, shiny guns"),
            m("li", "...to shoot yourself in the foot")
          ])
        ])
      ]);
    }
  },

  {
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Funsies, not footguns"),
        ]),
        m("section", [
          m("h1", "Constructor Pattern"),
          m(code, {code: require("../examples/constructor-pattern-example")})
        ]),
        m("section", [
          m("h1", "Object.create()"),
          m(code, {code: require("../examples/object-create-example")})
        ])
      ]);
    }
  },

  { // Conclusion / Warning?
   view: function() {
     return m("section", [
       m("section", [
         m("h1", "Some takeaways"),
         m("h2", "AKA praise the sun he's almost finished"),
         m("ul", [
           m("li", "Prototypes are powerful"),
           m("li", "Prototypes are useful"),
           m("li", "Constructor pattern -> runtime prototype creation"),
           m("li", "Object.create -> compile-time prototype creation"),
           m("li", "Prototypes can be extensible, flexible, useful"),
           m("li", "All of these eyes on me burn")
         ])
       ])
     ]);
   }
 },

 { // Conclusion / Warning?
  view: function() {
    return m("section", [
      m("section", [
        m("h1", "Thanks for your time!")
      ])
    ]);
  }
 }


]
