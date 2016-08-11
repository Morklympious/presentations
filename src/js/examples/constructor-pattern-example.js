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
  ""
].join("\n")