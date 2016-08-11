module.exports = [
  "// In the formal definition, inheritance isn't present in javascript",
  "var presenter = {",
  "  name: \"Unknown\",",
  "  cool: false,",
  "  volume: \"normal\"",
  "}",
  "",
  "// Currently still delegating",
  "function Speaker(props) {",
  "  // Merging properties to make local overrides",
  "  Object.assign({}, this, props)",
  "}",
  "",
  "Speaker.prototype = presenter;",
  "", 
  "var bradley = new Speaker({volume: \"loud\", cool: \"true\", custom: \"property\"});",
  "",
  "/*",
  "{",
  "  volume: \"loud\",     // --> Passed in to override Speaker.prototype.volume",
  "  cool: \"true\",       // --> Passed in to override Speaker.prototype.cool",
  "  custom: \"property\", // --> Local to this property",
  "  name: \"Unknown\"     // --> Delegating to Speaker.prototype",
  "}",
  "*/"
].join("\n")