module.exports = [
  "Object.prototype.toBradley = function() {",
  "  return 'Brangley Standfrand';", 
  "}",
  "",
  "// Both of these objects now have a member function 'toBradley()' ",
  "var obj = {},",
  "    objTwo = new Object();"
].join("\n")