const express = require('express');
const router = express.Router();
const etudiantController = require('../Controllers/etudiantsController');

router.post('/', etudiantController.createEtudiant);
router.get('/:id', etudiantController.getEtudiant);
router.put('/:id', etudiantController.updateEtudiant);
router.delete('/:id', etudiantController.deleteEtudiant);

module.exports = router;
