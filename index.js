const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });
// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//   });

// io.on('connection', (socket) => {
// socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
// });
// });

// broadcast message to all servers connected to 'io'
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });