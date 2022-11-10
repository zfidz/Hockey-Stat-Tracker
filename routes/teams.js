const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');

router.get('/', teamsCtrl.index)
router.get('/new', teamsCtrl.new)
router.post('/', teamsCtrl.create)
router.get('/:id', teamsCtrl.show)
router.get('/:id/edit', teamsCtrl.edit)
router.put('/:id', teamsCtrl.update)
router.delete('/:id', teamsCtrl.delete)
module.exports = router