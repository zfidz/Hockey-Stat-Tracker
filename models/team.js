const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    city: String,
    arena: String,
    year: Date,
    cups: Number,
    gamesPlayed: Number,
    wins: Number,
    losses: Number,
    players: String
})

module.exports = mongoose.model('Team', teamSchema)