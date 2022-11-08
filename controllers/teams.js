const Team = require('../models/team')

module.exports = {
index,
}

function index(req, res) {
    Team.find({}, function(err, movies) {
        res.render('teams/index', {title: 'All Teams', teams})
    })
}
