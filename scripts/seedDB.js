const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    username: "Guest1",
    password: "guestone",
    wins: 0,
    losses: 0,
    koikoiHi: 0,
    warHi: 0,
    memHi: 0,
    date: new Date(Date.now())
  },

  
];