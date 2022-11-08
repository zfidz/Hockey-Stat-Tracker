const Team = require('../models/team')
const { move } = require('../routes')

module.exports = {
index,
new: newTeam,
create
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