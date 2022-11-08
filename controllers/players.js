const Player = require('../models/player')
const Team = require('../models/team')

module.exports = {
    new: newPlayer,
    create
}


function create(req, res){

    }


function newPlayer(req,res) {
            Team.findById(req.params.id, function(err, team) {
                res.render('players/new', {title: 'New Player', team})
            })
}
