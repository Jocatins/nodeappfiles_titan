var fs = require('fs');

//read file sync
var read = fs.readFileSync('filename', 'utf8');
console.log(read);

//write file sync

var read = fs.readFileSync('filename', 'utf8');
fs.writeFileSync('filename', read);


//read file async

fs.readFile('filename', 'utf8', function(err,data){
  console.log(data);
});

fs.readFile('filename', 'utf8', function(err,data){
  fs.writeFile('filename', data);
});
