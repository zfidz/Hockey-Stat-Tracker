const Player = require('../models/player')
const Team = require('../models/team')

module.exports = {
    new: newPlayer,
    create
}


function create(req, res){
    Team.findById(req.params.id, function(err, team) {
        const player = new Player(req.body)
        player.save(function(err) {
          if (err) return res.redirect(`/teams/${team._id}/players/new`)
          res.redirect(`/teams/${team._id}`)
        })
    console.log(team)
      })
    }


function newPlayer(req,res) {
            Team.findById(req.params.id, function(err, team) {
                res.render('players/new', {title: 'New Player', team})
            })
}
