var fs = require("fs");
var autocomplete = [];

function read(callback) {
  fs.readFile(__dirname + "/../data.json", 'utf8', function(error, data) {
    autocomplete = data.split('\n');
    callback(autocomplete);
  });

}

module.exports = read;
