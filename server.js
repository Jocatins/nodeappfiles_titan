var http = require('http');

var server = http.createServer(function(req, res){
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Heyy joca');
});

server.listen(4050, '127.0.0.1');
console.log('this is port 4050');
