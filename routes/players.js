const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');

router.get('/', playersCtrl.index)
router.get('/new', playersCtrl.new)
router.post('/', playersCtrl.create)
router.get('/:id', playersCtrl.show)

module.exports = router