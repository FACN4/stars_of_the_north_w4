var url = require("url");
var data = require("../data.json").stars;

function wordSearch(str) {
  var output = [];
  for (var i = 0, l = data.length; i < l && output.length < 5; i++) {
    var word = data[i];
    if (str === "") {
      return (output = []);
    }
    if (word.indexOf(str) === 0) {
      output.push(word);
    }
  }
  return output;
}

module.exports = wordSearch;
