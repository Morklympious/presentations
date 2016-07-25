var m = require("mithril");

module.exports = [
  [
    m( 'h1', m.trust( 'Ember &amp; me' ) ),
  ],

  [
    m( 'h2', 'Context: Me' )
  ],

  [
    m( 'ul',
      m( 'li', 'Strong design leanings' ),
      m( 'li', 'Front-end specialist' ),
      m( 'li', 'Contractor' )
    )
  ],

  [
    m( 'ul',
      m( 'li', 'Opinionated' ),
      m( 'li', 'Arrogant' ),
      m( 'li', 'Reckless' )
    )
  ],

  [
    m( 'h2', '{{HTML-Barf}}' )
  ],

  [
    m( 'p',
      'Increasing potential, decreasing simplicity'
    ),

    m( 'ol',
      m( 'li',
        m( 'a[target=_blank]', {
          href   : 'https://github.com/jmurphyau/ember-truth-helpers#ember-truth-helpers-'
        },
          'Truth helpers'
        )
      ),

      m( 'li',
        m( 'a[target=_blank]', {
          href   : 'https://github.com/DockYard/ember-composable-helpers#ember-composable-helpers---'
        },
          'Composeable helpers'
        )
      ),

      m( 'li',
        m( 'a[target=_blank]', {
          href   : 'https://ember-twiddle.com/6a20a37f1c73fe7b8e21b3b72a8409c0?openFiles=templates.application.hbs%2C'
        },
          'Total nonsense'
        )
      )
    )
  ],

  [
    m( 'h2', m.trust( `
      <s>Ember data</s><br/>
      Ember <i>&amp;</i> data<br/>
      <small>(structures &amp; flow)</small>
    ` ) )
  ],

  [
    m( 'ul',
      m( 'li', 'Great core entities',
        m( 'ul',
          m( 'li', 'Services, adapters, components' )
        )
      ),

      m( 'li', 'Large API surface for low level entities',
        m( 'ul',
          m( 'li',
            m( 'code', `get` ),
            m( 'code', `set` ),
            m( 'code', `this` ), m( 'br' ),
            m( 'code', `Ember[ method ]` )
          )
        )
      )
    )
  ],

  [
    m( 'p', 'Decreasing complexity, decreasing potential' ),

    m( 'ul',
      m( 'li', 'DDAU' ),

      m( 'li',
        m( 'a[target=_blank]', {
          href   : 'https://gist.github.com/barneycarroll/3552d32eae0f3e35f803#file-viewprops-md'
        },
          'View properties'
        )
      ),

      m( 'li',
        m( 'a[target=_blank]', {
          href   : 'https://gist.github.com/barneycarroll/8f83c4234b2a9fe5c09c#file-ember-compute-js'
        },
          'Computers'
        )
      )
    )
  ],

  [
    m( 'p', `I definitely suffer from some of these problems.` ),
    m( 'p', `I feel like I really need a solution.` ),
    m( 'p', `Let's integrate some of these add-ons!` )
  ],

  [
    m( 'h2', `No. Wait. Stop.` )
  ],

  [
    m( 'p', 'The control flow problem may be at the end of the keyboard' )
  ],

  [
    m( 'ol', {
      style : { fontSize : '.75em' }
    },
      m( 'li', m.trust( `Ember's API surface is colossal &amp; verbose` ),
        m( 'ul',
          m( 'li', m.trust( `But judiciously updated &amp; well maintained` ) )
        )
      ),

      m( 'li', m.trust( `Let's create extra surface!` ),
        m( 'ul',
          m( 'li', 'Thereby increasing dependency, cognitive load, and maintenance debt' )
        )
      ),

      m( 'li', `Start again` )
    )
  ],

  [
    m( 'ol', {
      style : { fontSize : '.75em' }
    },
      m( 'li', m.trust( `Ember's API surface is colossal &amp; verbose` ),
        m( 'ul',
          m( 'li', {
            style : { opacity : .333 }
          },
            m.trust( `But judiciously updated &amp; well maintained` )
          )
        )
      )
    )
  ],

  [
    m( 'ol', {
      style : { fontSize : '.75em' }
    },
      m( 'li',
        m( 'span', {
          style : { opacity : .333 }
        },
          m.trust( `Ember's API surface is colossal &amp; verbose` )
        ),
        m( 'ul',
          m( 'li',
            m.trust( `But judiciously updated &amp; well maintained` )
          )
        )
      )
    )
  ],

  [
    m( 'h2', 'Predictions' )
  ],

  [
    m( 'ul', {
      style : { fontSize : '.75em' }
    },
      m( 'li', 'Observables / computed properties are relatively immature concepts',
        m( 'ul',
          m( 'li', 'Exotic to many users' ),
          m( 'li', 'Front-end streams? Are we ready?' ),
          m( 'li', `Ember's high-level abstraction can change all of this` )
        )
      )
    )
  ],

  [
    m( 'h2', m.trust( `
      kthxbai<br>
      #barneycarroll
    ` ) )
  ]
]