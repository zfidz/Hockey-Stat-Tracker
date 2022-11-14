const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');
const isLoggedIn = require("../config/auth")

router.get('/', playersCtrl.index)
router.get('/new', isLoggedIn, playersCtrl.new)
router.post('/', playersCtrl.create)
router.get('/:id', playersCtrl.show)
router.get('/:id/edit', isLoggedIn, playersCtrl.edit)
router.put('/:id', playersCtrl.updatePlayer)
router.delete('/:id', isLoggedIn, playersCtrl.delete)
module.exports = router