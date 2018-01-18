const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const http = require("http");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var io = require("socket.io")(http);
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'whatever' }));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// passport config
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hanafuda",
  {
    useMongoClient: true
  }
);

var socket = require('socket.io');

server = app.listen(PORT, function(){
    console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});

// io.on("connection", function(socket){
//   console.log("A user connected!");
//   socket.on("disconnect", function(){
//   	console.log("user disconnected");
//   });
// });

// Start the API server
// http.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
