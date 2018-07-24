var handlePublic= function(request, response){
   if(url === '/public/main.css'){
    var filePath = path.join(__dirname, '..', 'public', 'main.css');
    fs.readFile(filePath,function(error,file){
      if(error){
        response.writeHead(500, 'Content-type: text/html');
        response.end('<h1>Sorry, something went wrong</h1>');
    }
    response.writeHead(200, 'Content-type: text/css');
    response.end(file);

  });
}
}
module.exports = handlePublic;
