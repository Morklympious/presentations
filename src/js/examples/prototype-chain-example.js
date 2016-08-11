module.exports = [
  "// The Prototype Chain in action",
  "Object.prototype.toBradley = function() {",
  "  return 'Brangley Standfrand';", 
  "}",
  "",
  "// Both of these objects can delegate 'toBradley()' to the prototype",
  "var one = {},",
  "    two = new Object();"
].join("\n")