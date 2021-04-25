let app = require('./app');
let http = require('http');
let port = 3000
app.set('port', port);

let server = http.createServer(app);

server.listen(port);

let io = app.io;
io.attach(server);