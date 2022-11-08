const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');

router.get('/:id/players/new', playersCtrl.new)
router.post('/:id/players', playersCtrl.create)

module.exports = router