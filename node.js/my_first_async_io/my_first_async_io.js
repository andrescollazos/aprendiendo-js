var fs = require('fs');
var buf = fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  cantidad = data.split("\n").length - 1
  console.log(cantidad);
})
