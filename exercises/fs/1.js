var fs = require('fs');

fs.stat(__dirname + '/a.txt', function(err, stats){
  if (err) {console.log(err.message); return;}
  console.log(stats.size);
});
