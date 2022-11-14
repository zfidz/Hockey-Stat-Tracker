const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  city: String,
  arena: String,
  year: Date,
  cups: Number,
  points: Number,
  gamesPlayed: Number,
  wins: Number,
  losses: Number,
  otl: Number,
  logo: {type:String, default: "/pictures/pngfind.com-white-question-mark-png-23867.png"}
});

module.exports = mongoose.model("Team", teamSchema);
