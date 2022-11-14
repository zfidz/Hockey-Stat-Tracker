const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');
const isLoggedIn = require("../config/auth")

router.get('/', teamsCtrl.index)
router.get('/new', isLoggedIn, teamsCtrl.new)
router.post('/', teamsCtrl.create)
router.get('/:id', teamsCtrl.show)
router.get('/:id/edit', isLoggedIn, teamsCtrl.edit)
router.put('/:id', teamsCtrl.updateTeam)
router.delete('/:id', isLoggedIn, teamsCtrl.delete)

module.exports = router