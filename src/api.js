import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function subscribeToClock(cb) {
  socket.on('clock', timestamp => cb(null, timestamp));
  socket.emit('subscribeToClock', 1000);
}

export { subscribeToClock };
