const Player = require("../models/player");
const Team = require("../models/team");

module.exports = {
  new: newPlayer,
  create,
  show,
  index,
  edit,
  update,
  delete: deletePlayer
}

function index(req, res) {
  Player.find({}, function (err, players) {
    res.render("players/index", { title: "All Players", players });
  })
}

function create(req, res) {
  const player = new Player(req.body)
  player.team.push(req.body.team)
  player.save(function (err) {
    if (err) return res.redirect(`/players/new`)
    res.redirect("/players")
  })
}

function newPlayer(req, res) {
  Team.find({}, function (err, allTeams) {
    res.render("players/new", { title: "New Player", allTeams })
  });
}

function show(req, res) {
  Player.findById(req.params.id, function (err, player) {
    res.render("players/show", { title: "Player Detail", player });
    if (err) return res.redirect("/");
  });
}

function edit(req, res) {
  Player.findById(req.params.id, function(err, player) {
   Team.find({}, function (err, allTeams) {
  res.render("players/edit", { title: "Edit Player", allTeams, player })   
  })
  })
}

function update(req, res) {
  Player.updateOne({_id:req.params.id}, req.body, function(err, updatedPlayer){
    res.redirect('/players/')  
  })
  }

  function deletePlayer(req,res) {
    Player.deleteOne(Player)
    res.redirect("/players")
      }