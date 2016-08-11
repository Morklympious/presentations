var  m     = require("mithril"),
  code     = require("../cmp/codemirror"),
  fragment = {class: "fragment"},
  css      = require("./index.css");


module.exports = [
  {
    view: function() {
      return m("section", {}, [
        m("section", [
          m("h1", "The Prototype"),
          m("h2", "What is even happening right now?"),
          m("img", {src: "dist/img/intro-cage.gif", class: css.gif})
        ]),
        m("section", [
          m("h1", "The Prototype"),
          m("h2", "Who is this man and why is he here to tell me what I already know?"),
          m("img", {src: "dist/img/intro-cage-2.gif", class: css.gif})
        ]),
        m("section", [
          m("h1", "The Prototype"),
          m("h2", "Somebody told me there was a Charizard in here and now I'm stuck in this office with you nerds."),
          m("img", {src: "dist/img/intro-cage-3.gif", class: css.gif})
        ])
         
      ]);
    }
  },

  {
    view: function() {
      return m("section", {}, [
        m("section",   [
          m("h1", "Who am I?"),
          m("ul", [
            m("li", fragment, "Bradley Stafford"),
            m("li", fragment, "Front-end Engineer @ Amazon (AUI Team)"),
            m("li", fragment, "Code Jester"),
            m("li", {class: "fragment " + css["padded-cage"]}, "Nicolas Cage enthusiast"),
            m("li", fragment, "Non-sequitur list creator"),
            m("li", fragment, "Hats")
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
        m("li", fragment, "Object allowing inheritance and reusability"),
        m("li", fragment, "Gives basic, free functionality of the major types"),
        m("li", fragment, "Each type has its respective prototype + object"),
        m("li", fragment, "\"Everything in javscript is an object\" (even Functions!)")
      ]),
      m("h2", fragment, "If you come from an OO background..."),
      m("ul", [
        m("li", fragment, m("code", "Class Type extends TypePrototype"))
      ])
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
       m("h2", fragment, "Asking for a friend"),
       m("ul", [
         m("li", fragment, "The Prototype chain"),
         m("li", fragment, "A singly-linked linked-list"),
         m("li", fragment, "Each with member properties"),
         m("li", fragment, "Each type in javascript has access to its prototype chain"),
         m("li", fragment, "Properties are immediately accessible to all objects of that type.")
       ])
     ]);
   }
  },

  { // Object with toBradley Example
   view: function() {
    return m("section", {}, [
      m("h1", "Talking about code sucks. (Pt. II -- The reckoning)"),
      m(code, {code: require("../examples/prototype-chain-example") })
    ]);
   }
  },

  {
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Prototypes unltd."),
          m("ul", [
            m("li", fragment, "Custom objects can have a prototype"),
            m("li", fragment, "Delegation is ideal for constant member props"),
            m("li", fragment, "Persistent data"),
            m("li", fragment, "Easy to override for use-cases")
          ])
        ]),
        m("section", [
          m("h1", {class: css["padded-cage"]}, "Inside the Cage"),
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
          m("h2", fragment, "For the modern dingus (like myself)"),
          m("p", fragment, "Yes, I'm THAT TERRIBLE."),
          m("ol", [
            m("li", fragment, "Is the stuff I'm trying to access on the current object/structure?"),
            m("li", fragment, "If not, is there a prototype I can look at?"),
            m("li", fragment, "If yes, look at that object and see if it's there"),
            m("li", fragment, "If not, return to step 2")
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
            m("li", fragment, "Delegation"),
            m("li", fragment, "Inheritance"),
            m("li", fragment, "Method borrowing"),
          ])
        ]),
        m("section", [
          m("h1", "Delegation"),
          m(code, {code: require("../examples/delegation-example")})
        ]),        
        m("section", [
          m("h1", "Inheritance"),
          m(code, {code: require("../examples/inheritance-example")})
        ]),
        m("section", [
          m("h1", "Method Borrowing"),
          m(code, {code: require("../examples/borrowing-example")})
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
            m("li", fragment, "This is like a blank check"),
            m("li", fragment, "full of different, shiny guns"),
            m("li", fragment, "...to shoot yourself in the foot")
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
          m("h2", "Tools for make you understand many better for great good"),
          m("p", "Different tools to achieve the same thing")
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
         m("h2", fragment, "AKA praise the sun he's almost finished"),
         m("ul", [
           m("li", fragment, "Prototypes are powerful"),
           m("li", fragment, "Prototypes are useful"),
           m("li", fragment, "Constructor pattern -> runtime prototype creation"),
           m("li", fragment, "Object.create -> compile-time prototype creation"),
           m("li", fragment, "Prototypes can be extensible, flexible, useful"),
           m("li", fragment, "All of these eyes on me burn")
         ])
       ])
     ]);
   }
 },

 { // Conclusion / Warning?
  view: function() {
    return m("section", [
      m("section", [
        m("h1", "Thanks for your time!"),
        m("h2", "Somebody get this man out of here"),
        m("ul", [
          m("li", fragment, "Twitter: @Bradleystafford"),
          m("li", fragment, "Github: Morklympious"),
          m("li", fragment, "Blog: https://morklympious.github.io"),
          m("li", fragment, "Like"),
          m("li", fragment, "Comment"),
          m("li", fragment, "Subscribe"),
          m("li", fragment, "Follow"),
          m("li", fragment, "Please don't follow me irl though."),
          m("li", fragment, "That's probably too creepy.")
        ]), 
      ])
    ]);
  }
 }


]
