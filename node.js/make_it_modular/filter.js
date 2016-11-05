var fs = require('fs');
var path = require('path');

function filter(pathName, ext, callback) {
  fs.readdir(pathName, function(err, data) {
      if (err) {
        return callback(err);
      }

      var filtered = data.filter(function(file) {
          return path.extname(file) === '.' + ext
      });

      callback(null, filtered)
  });
}

module.exports = filter;
