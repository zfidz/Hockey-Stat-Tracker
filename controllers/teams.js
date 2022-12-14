const Team = require("../models/team");
const Player = require("../models/player");
module.exports = {
  index,
  new: newTeam,
  create,
  show,
  delete: deleteTeam,
  edit,
  updateTeam,
};

function index(req, res) {
  Team.find({}, function (err, teams) {
    res.render("teams/index", { title: "All Teams", teams });
  });
}

function newTeam(req, res) {
  res.render("teams/new", { title: "Add Team" });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key]=== "") delete req.body[key]
  }
  const team = new Team(req.body);
  team.save(function (err) {
    if (err) return res.redirect("teams/new");
    res.redirect("/teams");
  });
}

function show(req, res) {
  Team.findById(req.params.id, function (err, team) {
    Player.find().then((foundPlayers) => {
      let filter = [];
      foundPlayers.forEach((player) => {
        if (player.team.includes(team._id)) {
          filter.push(player);
        }
      });
      res.render("teams/show", { title: team.name, players: filter, team });
    });
  });
}

function deleteTeam(req, res) {
  Team.findByIdAndDelete(req.params.id, function (err, team) {
    res.redirect("/teams");
  });
}

function edit(req, res) {
  Team.findById(req.params.id, function (err, team) {
    res.render("teams/edit", { title: "Edit Team", team });
  });
}

function updateTeam(req, res) {
  Team.updateOne({ _id: req.params.id }, req.body, function (err, updatedTeam) {
    res.redirect("/teams/");
  });
}
