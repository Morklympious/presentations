module.exports = [
  ""
  "var one = Object.create(null),",
  "    two = Object.create(new Array())",
  "    three = Object.create(new Object(), { local: 'to this object' })" 
  "",
  "// one has literally no prototype, it's a POJO",
  "",
  "",
  "// two is an object with an array prototype (why? because javascript)",
  "",
  "",
  "// three is an object with an Object prototype and properties defined locally",
  "",
  "",
  ""
].join("\n")