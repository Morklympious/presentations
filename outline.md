# Prototypes

## What are prototypes

- Prototypes are essentially blueprints.
- Every major type has a prototype
  - Number, String, Boolean
  - Object, Array

- Prototypes are useful
- Prototypes can affect all instances of a given type at runtime
(Nicolas Cage on object prototype joke) ("this will come in handy later")

- What happens when you call a method on an object?

## Ways to use prototypes

- Inheritance
- Method Borrowing
- Prototype Delegation

### Extending/Inheritance

- Adding to the prototype directly
- Extending object functionality

### Borrowing

- Borrowing from another prototype via `call`, `apply`, and `bind`;
  - `Array.prototype.slice.call`

### Delegating

- Using a method on a child object that exists up the prototype chain.

```js
  var cage = new Nicolas({
    yell: "HOW'D IT GET BURNED?"
    whisper: "how'd it get burned?"
  })

  Nicolas.prototype.yell = "NOT THE BEES"
  Nicolas.prototype.whisper = "not the bees"

  cage.yell(); //=> HOW'D IT GET BURNED?


```

## Ways to misuse prototypes

- Adding a bunch of crap to the native prototype
  - Make sure that what you're adding is useful
  - Make sure that what you're adding has far reach (use-case discretion)
- Completely overwriting the native prototype (Stomping)
- Binding

### Adding to native

- You have a crappy function.
- You want Array, Number, etc. to have your functionality
- Not optimal, probably.
- Stop it.

### Overwriting

- ARE YOU SERIOUSLY DOING THIS RIGHT NOW.
- Overwriting an existing prototype method is the "Hold my beer" of web development

### Binding?

- You can bind custom prototype methods of instances to some other data or
whatever.

## Custom stuff

### Basic function with properties

- Constructor pattern (Woo!)

### Object.create() for new prototypes

- `Object.create(null)` for naked prototypes.
- `Object.create(new Person())` for instanceof prototypes


## Conclusion

- Prototypes are powerful
- Prototypes are useful

- Prototypes are dynamically interpreted (runtime)
- Extending a prototype gives you extra functionality
  - More performant than instances with copies of the function
  - Don't overuse this pattern.
- Creating a new prototype gives you full flexibility
