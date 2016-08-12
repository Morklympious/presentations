module.exports = [
  "function variadic() {",
  "  // HELLO ARRAY YES PLEASE I NEED THIS THANK YOU",
  "  var args = Array.prototype.slice.call(arguments, 1)",
  "",
  "  return args;",
  "}",
  "",
  "// Joining a string!",
  "Array.prototype.join.call(\"AESTHETIC\", \" \") // --> A E S T H E T I C",
  ""
].join("\n")