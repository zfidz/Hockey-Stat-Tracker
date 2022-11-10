const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  firstName: String,
  lastName: String,
  position: String,
  gamesPlayed: Number,
  points: Number,
  goals: Number,
  assists: Number,
  pim: Number,
  plusMinus: Number,
  team: [{ type: Schema.Types.ObjectId, ref: "Team" }],
});

module.exports = mongoose.model("Player", playerSchema);
