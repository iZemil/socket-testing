var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var data = [];

io.on('connection', function (socket) {
  socket.on('my client event', function (data) {
    console.log(data);
  });

  socket.on('sending', function(value) {
    console.log('sending: ', value);
    data.push(value);

    socket.emit('data files', data);
  });

});
    