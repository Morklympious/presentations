module.exports = [
  "var object = { ",
  "  hasOwnProperty: function() { ",
  "    return \"lololololol\"; ",
  "  }",
  "}",
  "",
  "alert(object.hasOwnProperty('hasOwnProperty'))",             
].join("\n")