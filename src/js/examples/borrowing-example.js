module.exports = [
  "function memoize(fn) {",
  "  var cache = {}",
  "",
  "  // HELLO ARRAY YES PLEASE I NEED THIS THANK YOU",
  "  var args = Array.prototype.slice.call(arguments, 1)",
  "",
  "  return function() { ",
  "    var key = JSON.stringify(arguments)",
  "",
  "    return cache[key] ? cache[key] : fn.apply(null, args.concat.arguments)",
  "  }",
  "}"
].join("\n")