var Ticker = function() {
  var self = this;
  setInterval(function() {
      self.emit('tick');
  }, 1000);
};
