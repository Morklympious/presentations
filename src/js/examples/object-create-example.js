module.exports = [
  "// Plain 'ol javascript object",
  "var one = Object.create(null),",
  "",
  "// two is an object with an array prototype (why? because javascript)",
  "var two = Object.create(new Array())",
  "",
  "// three is an object with an Object prototype and properties defined locally",
  "var three = Object.create(new Object(), { local: 'to this object' })", 
  ""
].join("\n")