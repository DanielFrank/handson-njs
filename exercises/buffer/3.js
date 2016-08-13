var buffer = new Buffer(100);
for (var i =0; i< buffer.length;i++) {
  buffer[i] = i;
}
console.log(buffer);

var slice = new Buffer(20);
buffer.copy(slice,0,40,60);
console.log(slice);
