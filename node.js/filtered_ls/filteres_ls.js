var fs = require('fs');
var f = function(item, idx, arr) {
  item = item.split(".")
  if (item[1] == process.argv[3]) {
    console.log(item.join("."));
  }
}
var buf = fs.readdir(process.argv[2], function(err, list) {
  //cantidad = data.split("\n").length - 1
  list.forEach(f)
});
