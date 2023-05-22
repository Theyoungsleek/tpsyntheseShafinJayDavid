const express = require('express');
const router = express.Router();
const employeurController = require('../Controllers/stageController');

router.post('/', employeurController.createEmployeur);
router.get('/:id', employeurController.getEmployeur);
router.put('/:id', employeurController.updateEmployeur);
router.delete('/:id', employeurController.deleteEmployeur);
router.get('/', employeurController.getEmployeurList);

module.exports = router;
