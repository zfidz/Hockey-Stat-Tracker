const Player = require('../models/player')
//const Team = require('../models/team')

module.exports = {
    new: newPlayer,
    create,
    show,
    index
}

  function index(req,res) {
    Player.find({}, function(err, players) {
      res.render('players/index', {title: 'All Players', players })
  })
}

function create(req, res){
        const player = new Player(req.body)
        player.save(function(err) {
          if (err) return res.redirect(`/players/new`)
          res.redirect('/players')
        })
      }

function newPlayer(req,res) {
res.render('players/new', {title: 'New Player'})
            }

function show(req,res) {
  Player.findById(req.params.id, function(err, player) {
      res.render('players/show', { title: 'Player Detail', player}) 
      if(err) return res.redirect('/')   
      })
  }

