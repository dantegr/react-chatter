var app = require('http').createServer();
var io =module.exports.io = require('socket.io')(app);

const PORT = process.env.PORT || 3231 ;

const SocketManager = require('./SockerManager');

io.connection('connection', SocketManager);

app.listen(Port, () => {
  console.log('connected to port:' + PORT);
});