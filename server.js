const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToClock', (interval) => {
    setInterval(() => {
      client.emit('clock', createDateAsUTC(new Date()));
    }, interval);
  });
});

function createDateAsUTC(date) {
    return new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      )
    );
}

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
