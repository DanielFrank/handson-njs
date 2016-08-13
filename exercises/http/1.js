var fs = require('fs');

require('http').createServer(function(req, res){
  var file = req.url;
  fs.stat(file, function(err, stat){
    if (err !== null) {
      if(err.code == 'ENOENT') {
        res.writeHead(404);
        res.end('Not found');
      } else if (err !== null) {
          throw err;
      }
    } else {
      if (stat.isDirectory()) {
        res.writeHead(403);
        res.end('Forbidden path');
      } else {
        rs = fs.createReadStream(file);
        res.writeHead(200);
        rs.pipe(res);
      }
    }
  });
}).listen(4000);
