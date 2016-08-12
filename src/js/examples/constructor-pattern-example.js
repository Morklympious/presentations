module.exports = [
  "function NicolasCage() {",
  "  // ...stuff ",
  "}",
  "",
  "function LiterallyTrash() {",
  " // __prototype__ = LiterallyTrash.prototype",
  "}",
  "",
  "LiterallyTrash.prototype = new NicolasCage()",
  "LiterallyTrash.prototype.onFire = false;",
  "", 
  "var stopDoingNicCageExamples = new LiterallyTrash();",
  "",
  "// the new object now has NicolasCage in its prototype chain (runtime)",
  ""
].join("\n")