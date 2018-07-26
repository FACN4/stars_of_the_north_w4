var fs = require("fs");
var wordSearch = require("./search");
var path = require("path");

// indexHandler function manages the request for URL '/'

function indexHandler(response) {
  var filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, function(error, file) {
    if (error) {
      console.error(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>sorry, something went wrong</h1>");
    } else {
      response.writeHead(200, { "Content-type": "text/html" });
      response.write(file);
    }
    response.end();
  });
}

// assetsHandler function manages the request for files across an array of extensionTypes including the project CSS, images, JS and JSON.

function assetsHandler(url, response) {
  var extension = url.split(".")[1];
  var extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    jpg: "image/jpeg",
    png: "image/png",
    json: "application/json"
  };
  var filePath = path.join(__dirname, "..", "public", url);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>sorry, something went wrong</h1>");
    } else {
      response.writeHead(200, { "Content-Type": extensionType[extension] });
      response.end(file);
    }
  });
}

// searchHandler function deals with the search request and returns array of words matching the user's search to be passed back to the client.

function searchHandler(url, response) {
  url = decodeURI(url);
  var queryString = url.split("q=")[1];
  var returnArray = wordSearch(queryString);
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(returnArray));
}

module.exports = {
  index: indexHandler,
  assets: assetsHandler,
  search: searchHandler
};
