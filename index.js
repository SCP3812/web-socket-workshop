const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs')

var circle = {
  x: 0,
  y: 0, 
  color:""
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



http.listen(3000, function() {
  console.log('Listening on port 3000');
})

// Handle a new connection
io.on('connection', function(socket) {

  socket.on("new client", function() {
    console.log("a new client has connected")
    io.emit("new circle")
  })

  socket.on("new circle", function(newCircle) {
    io.emit('new circle', newCircle)
  })
})