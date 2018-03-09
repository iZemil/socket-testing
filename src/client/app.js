import io from 'socket.io-client';

var socket = io('http://localhost:3000');

socket.on('data files', function (data) {
  console.log(data);
});

var rootForm = document.querySelector('#rootForm'),
    eBtn = document.querySelector('#eBtn');

rootForm.addEventListener('submit', function(e) {
  e.preventDefault();

  var inputVal = e.target.elements.input.value;

  socket.emit('sending', inputVal);
});