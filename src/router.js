var handlers = require("./handler.js");

function router(request, response) {
  var url = request.url;
  if (url === "/") {
    handlers.index(response);
  } else if (url.indexOf("/search?q=") === 0) {
    handlers.search(url, response);
  } else {
    handlers.assets(url, response);
  }
}

module.exports = router;
