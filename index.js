const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', socket => {
  let i = 1;

  setInterval(() => socket.emit('tick', i++), 1000);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
})
