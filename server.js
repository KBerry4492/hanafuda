const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const http = require("http").Server(app);
var io = require("socket.io")(http);
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hanafuda",
  {
    useMongoClient: true
  }
);

// io.on("connection", function(socket){
//   console.log("A user connected!");
//   socket.on("disconnect", function(){
//   	console.log("user disconnected");
//   });
// });

var socket = require('socket.io');



server = app.listen(PORT, function(){
    console.log('server is running on port 3001')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});


// Start the API server
// http.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
