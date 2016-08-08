module.exports = [
  "function NicolasCage() {",
  "  if(!this instanceof NicolasCage) return new NicolasCage();", 
  "",
  "  this.films      = ['Wicker Man', 'Drive Angry', 'Stolen'];",
  "  this.netWorth   = 100;",
  "  this.yelling    = true;",
  "  this.whispering = false;",
  "",
  "}",
  "",
  "var hero   = new NicolasCage(),",
  "    lord   = new NicolasCage(),",
  "    savior = new NicolasCage();",
  ""
].join("\n")