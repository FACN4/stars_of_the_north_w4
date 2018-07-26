var fs = require("fs");
var wordSearch = require("./search");
var path = require("path");

function indexHandler(request, response) {
  fs.readFile(__dirname + "/../public/index.html", function(error, file) {
    if (error) {
      console.error(error);
      response.writeHead(404);
    } else {
      response.writeHead(200, { "Content-type": "text/html" });
      response.write(file);
    }
    response.end();
  });
}

function assetsHandler(request, response) {
  var url = request.url;
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
      response.writeHead(500, "Content-Type: text/html");
      response.end("<h1>sorry, something went wrong</h1>");
    }
    response.writeHead(200, { "Content-Type": extensionType[extension] });
    response.end(file);
  });
}

function searchHandler(request, response) {
  var url = request.url;
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
