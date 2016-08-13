var fs = require('fs');
fs.open('/var/log/test.log', 'a', function(err, fd){
  if (err) throw err;
  var writeBuffer = new Buffer('writing this string'),
    bufferOffset = 0,
    bufferLength = writeBuffer.length,
    filePosition = null;

  fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition,
      function(err, written){
        if (err) throw err;
        console.log('wrote ' + written + ' bytes');
      });
});
