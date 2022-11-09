const Team = require('../models/team')
const Player = require('../models/player')
module.exports = {
    index,
    new: newTeam,
    create,
    show
    }
    
    function index(req, res) {
        Team.find({}, function(err, teams) {
            res.render('teams/index', {title: 'All Teams', teams })
        })
    }
    
    function newTeam(req,res) {
        res.render('teams/new', { title : 'Add Team'})
    }
    
    function create(req,res) {
        const team = new Team(req.body)
        team.save(function(err) {
            if (err) return res.redirect('teams/new')
            res.redirect('/teams')
        })
    }
    
    function show(req,res) {
        Team.findById(req.params.id, function(err, team) {
            Player.find({team: team._id}, function(err, players){
            res.render('teams/show', { title: 'Team Detail', team, players}) 
            if(err) return res.redirect('/')   
            })
        })
    }