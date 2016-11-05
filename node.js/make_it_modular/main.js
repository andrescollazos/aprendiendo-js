var pathName = process.argv[2];
var ext = process.argv[3];

var filtrar = require('./filter');

filtrar(pathName, ext, function(err, data) {
  if (err) {
    return callback(err);
  }

  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});
