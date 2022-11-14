const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  firstName: String,
  lastName: String,
  jerseyNo: Number,
  position: String,
  gamesPlayed: Number,
  points: Number,
  goals: Number,
  assists: Number,
  pim: Number,
  plusMinus: Number,
  team: [{ type: Schema.Types.ObjectId, ref: "Team" }],
  playerPic: {type: String, default: "/pictures/pngfind.com-white-question-mark-png-23867.png"}
});

module.exports = mongoose.model("Player", playerSchema);
