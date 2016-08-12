module.exports = [
  "// Mixins",
  "function mixin(base, protos) {",
  "  var self = this;",
  "",
  "  protos.forEach(function(proto) {",
  "    Object.assign({}, base, proto)",
  "  });",
  "}",
  "",
  "function FrankenType() {",
  "  // KILL IT. KILL IT WITH FIRE",
  "  mixin(this, [Object.prototype, Array.prototype, String.prototype])",
  "}",
  ""
].join("\n");