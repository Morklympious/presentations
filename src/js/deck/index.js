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
      m("code", "class Object extends Object.prototype")
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
           m("li", "like a happy trail of weird looking objects"),
           m("li", "or a trail of tears if you don't like javascript"),
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
      m(code, {code: "Object.prototype.toBradley = function() { return 'Brangley Standfrand'; } "})
    ]);
   }
  },

  { // Example with object get/set for overview
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Another example"),
          m(code)
        ]),
        m("section", [
          m("h1", "Accessing stuff"),
          m("ul", [
            m("li", "Is the stuff I'm trying to access on the current object?"),
            m("li", "If not, is there a prototype I can look at or whatever?"),
            m("li", "No? Oh. Sorry dude, it doesn't exist."),
            m("li", "Snake up the prototype chain and look for the property you need.")
          ])
        ])
      ]);
    }
  },

  { // Ways to use the prototype
   view: function() {
     return m("section", [
       m("section", [
         m("h1", "Ways to use the prototype")
       ])
     ]);
   }
 },

  { // Ways to misuse the prototype
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Ways to MISUSE the prototype")
        ])
      ]);
    }
  },

  { // Conclusion / Warning?
   view: function() {
     return m("section", [
       m("section", [
         m("h1", "All in all")
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
