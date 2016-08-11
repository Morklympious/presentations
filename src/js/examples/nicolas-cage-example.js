module.exports = [
  "// Constructor with properties on itself",
  "function NicolasCage() {",
  "  // this is a reference to the object this function creates when ",
  "  // inoked with the \"new\" keyword ",
  "  this.films      = ['Wicker Man', 'Drive Angry', 'Stolen'];",
  "  this.worth      = 100;",
  "  this.yelling    = true;",
  "  this.whispering = false;",
  "",
  "}",
  "",
  "var hero = new NicolasCage();",
  ""
].join("\n")