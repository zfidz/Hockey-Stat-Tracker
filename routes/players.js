const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/teams');

router.get('/:id/teams/new', playersCtrl.new)
router.post('/:id/players', playersCtrl.create)

module.exports = router