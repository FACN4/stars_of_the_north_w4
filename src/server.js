
var http = require('http');
var port = 6001;
var router = require('./router.js');
var {stars} = require("./data");
console.log(stars[100])
console.log(router)
var server = http.createServer(router);
server.listen(port ,function(){
  console.log('server is running on port:', port);
});
