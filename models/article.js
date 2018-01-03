const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true},
  
  date: { type: Date }
});

// username: "Guest1",
// password: "guestone",
// wins: 0,
// losses: 0,
// koikoiHi: 0,
// warHi: 0,
// memHi: 0,
// date: new Date(Date.now())

const Cards = mongoose.model("Cards", cardSchema);

module.exports = Cards;
