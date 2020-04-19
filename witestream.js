var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + 'filename', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + 'filename');

myReadStream.on('data', function(chunk){
  console.log('new data recieved');
  myWriteStream.write(chunk);
});
