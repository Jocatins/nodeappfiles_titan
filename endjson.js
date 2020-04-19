var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made:' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
        name: 'joca',
        job: 'coder',
        age: 28
};
    res.end(JSON.stringify(myObj));
});
server.listen(4000, '127.0.0.1');
console.log('yo niggas you are now onto port 4000');