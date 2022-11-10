const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');

router.get('/', playersCtrl.index)
router.get('/new', playersCtrl.new)
router.post('/', playersCtrl.create)
router.get('/:id', playersCtrl.show)
router.get('/:id/edit', playersCtrl.edit)
router.put('/:id', playersCtrl.updatePlayer)
router.delete('/:id', playersCtrl.delete)
module.exports = router