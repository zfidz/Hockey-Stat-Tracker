const Team = require("../models/team");
const Player = require("../models/player");
const team = require("../models/team");
module.exports = {
  index,
  new: newTeam,
  create,
  show,
  delete: deleteTeam,
}

function index(req, res) {
  Team.find({}, function (err, teams) {
    res.render("teams/index", { title: "All Teams", teams })
  })
}

function newTeam(req, res) {
  res.render("teams/new", { title: "Add Team" })
}

function create(req, res) {
  const team = new Team(req.body)
  team.save(function (err) {
    if (err) return res.redirect("teams/new")
    res.redirect("/teams")
  })
}

function show(req, res) {
  Team.findById(req.params.id, function (err, team) {
    Player.find().then((foundPlayers) => {
      let filter = []
      foundPlayers.forEach((player) => {
        if (player.team.includes(team._id)) {
          filter.push(player)
        }
      })
      res.render("teams/show", { title: team.name, players: filter, team })
    })
  })
}

function deleteTeam(req,res) {
Team.deleteOne(team)
res.redirect("/teams")
  }