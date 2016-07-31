var m = require("mithril");
var codemirror = require("../cmp/codemirror");

module.exports = [
  {
    view: function() {
      return m("section", {}, [
        m("section", [
          m("h1", "The Prototype"),
        ])
      ]);
    }
  },

  {
    view: function() {
      return m("section", {}, [
        m("section",   m("h1", "Agenda")),
        m("section", [
          m("ul", [
            m("li", "What are Prototypes?"),
            m("li", "How to use Prototypes"),
            m("li", "How not to use Prototypes"),
            m("li", "Other fun stuff")
          ])
        ])
      ]);
    }
  },

  {
    view: function() {
     return m("section", {}, [
       m("section", [
         m("h1", "Who is this clown?")
       ]),
       m("section", [
         m("h1", "Bradley Stafford"),
         m("ul", [
           m("li", {class: "fragment"}, "Front-end Engineer at Amazon"),
           m("li", {class: "fragment"}, "Nicolas Cage enthusiast")
         ])
       ]),
       m("section", [
         m("h1", "Anyways...")
       ])
     ]);
    }
  },

 {
    view: function() {
     return m("section", {}, [
       m("section", [
         m("h1", "What is the Prototype?"),
         m("ul", [
           m("li", "Prototypes are essentially \"blueprints.\""),
           m("li", "Every major type has a prototype")
         ]),
         m(codemirror, {code: "this this this"})
       ]),
       m("section", [
         m("h1", "Bradley Stafford"),
         m("ul", [
           m("li", {class: "fragment"}, "Front-end Engineer at Amazon"),
           m("li", {class: "fragment"}, "Nicolas Cage enthusiast")
         ])
       ]),
       m("section", [
         m("h1", "Anyways...")
       ])
     ]);
    }
   },

   {
     view: function() {
       return m("section", {}, [
         m("section", [
           m("h1", "Ways to use the prototype"),
           m("ul", [
             m("li", {class: "fragment"}, "inheritance"),
             m("li", {class: "fragment"}, "method borrowing"),
             m("li", {class: "fragment"}, "delegation up the prototype chain")
           ])
         ]),
         m("section", [
           m("h1", "Inheritance"),

         ]),
         m("section", [
           m("h1", "Borrowing")
         ]),
         m("section", [
           m("h1", "Delegating")
         ])
       ]);
     }
   },

   {
     view: function() {
       return m("section", {}, [
         m("section", [
           m("h1", "Ways to misuse the prototype"),
           m("ul", [
             m("li", {class: "fragment"}, "Adding cruft"),
             m("li", {class: "fragment"}, "Overwriting"),
           ])
         ]),
         m("section", [
           m("h1", "Adding"),

         ]),
         m("section", [
           m("h1", "Overwriting")
         ])
       ]);
     }
   },

   {
    view: function() {
      return m("section", {}, [
        m("section", [
          m("h1", "Custom/Funsies")
        ]),
        m("section", [
          m("h1", "Constructing new instances"),
        ]),
        m("section", [
          m("h1", "Constructing new prototypes")
        ])
      ]);
    }
  }


]
