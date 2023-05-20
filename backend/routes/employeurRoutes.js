const express = require('express');
const router = express.Router();
const employeurController = require('../Controllers/employeurController');

router.post('/', employeurController.createEmployeur);
router.get('/:id', employeurController.getEmployeur);
router.put('/:id', employeurController.updateEmployeur);
router.delete('/:id', employeurController.deleteEmployeur);

module.exports = router;
