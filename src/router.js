var staticHandler = require("./handler.js");

function router(request, response) {
  var endpoint = request.url;
  console.log(endpoint);
  if (endpoint === "/") {
    staticHandler.index(request, response);
  } else if (endpoint.indexOf("/search")===0) {
    staticHandler.search(request, response);
  } else {
    staticHandler.assets(request, response);
  }
}

module.exports = router;
