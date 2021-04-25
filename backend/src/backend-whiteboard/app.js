let express = require('express');
let path = require('path');
let socket_io = require('socket.io');
let app = express();
let io = socket_io({wsEngine: 'ws'});
app.io = io;

let index = require('./routes/index')(io);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render("board.ejs");
});

module.exports = app;