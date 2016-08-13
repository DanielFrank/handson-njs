var http = require('http')
    fs   = require('fs');
//TODO check for argument; also check file exists

var options = {
  host: '127.0.0.1',
  port: 3000,
  path: '/',
  method: 'PUT'
};

var req = http.request(options);

fs.createReadStream(process.argv[2]).pipe(req);
