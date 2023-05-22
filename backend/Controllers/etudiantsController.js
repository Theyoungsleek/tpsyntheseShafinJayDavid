const Etudiant = require('../models/Etudiants');

exports.createEtudiant = async (req, res) => {
  const newEtudiant = new Etudiant(req.body);
  try {
    const etudiant = await newEtudiant.save();
    res.status(201).json(etudiant);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};


exports.getEtudiant = async (req, res) => {
  try {
    const etudiant = await Etudiant.findById(req.params.id);
    if (etudiant == null)
      return res.status(404).json({ message: "Etudiant pas trouve" });
    res.etudiant = etudiant;
    res.json(etudiant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getListEtudiants = async (req, res) => {
  try {
    const etudiants = await Etudiant.find();
    res.json(etudiants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateEtudiant = async (req, res) => {
  if (req.body.numeroDA != null) {
    res.etudiant.numeroDA = req.body.numeroDA;
  }
  try {
    const updatedEtudiant = await res.etudiant.save();
    res.json(updatedEtudiant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteEtudiant = async (req, res) => {
  try {
    await res.etudiant.remove();
    res.json({ message: "Etudiant a etait supprimer" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

