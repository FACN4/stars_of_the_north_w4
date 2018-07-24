var path = require ('path');
var fs = require('fs');
var handler = require('./handler');
var router = function(request,response){
  var url = request.url;

  console.log("url",url)

    if(url==='/'){
      var filePath = path.join(__dirname,'..','public','index.html');
       fs.readFile(filePath, function(error, file){
        if(error){

          response.writeHead(500, 'Content-type: text/html');
          response.end('<h1>Sorry, something went wrong</h1>');
        }
        console.log(file)
        response.writeHead(200, 'Content-type: text/html');
        response.end(file);

      });
}
else if (url.indexOf('/public/') !== - 1){
  var extension = url.split('.')[1];
  var extensionType = {
    css:'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon'

  };
  var filePath = path.join(__dirname, '..',url);
  fs.readFile(filePath,function(error,file){
    if(error){
      response.writeHead(500, 'Content-type: text/html');
      response.end('<h1>Sorry, something went wrong</h1>');
  }
  response.writeHead(200, {'Content-type': extensionType[extension]});
  response.end(file);
});
} else {response.writeHead(404, 'Content-type: text/html');
response.end('<h1>Sorry, something went wrong</h1>');

}
};

module.exports = router;
