var fs = require('fs');
fs.open(__dirname + '/b.txt', 'w', function(err, fd){
  if (err) throw err;
  var writeBuffer = new Buffer('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz','utf8'),
    bufferOffset = 0,
    bufferLength = writeBuffer.length,
    filePosition = null;

  fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition,
      function(err, written){
        if (err) throw err;
      });
});
