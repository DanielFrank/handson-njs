var fs = require('fs');
fs.open(__dirname + '/a.txt', 'r', function(err, fd){
  if (err) throw err;
  var readBuffer = new Buffer(5),
    bufferOffset = 0,
    bufferLength = readBuffer.length,
    filePosition = 10;

  fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition,
      function(err, readBytes){
        if (err) throw err;
        if (readBytes > 0) {
          console.log(readBuffer.slice(0,readBytes));
        }
      });
});
