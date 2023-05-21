const Employeur = require('../models/employeur');

exports.createEmployeur = async (req, res) => {
  const newEmployeur = new Employeur(req.body);
  try {
    const employeur = await newEmployeur.save();
    res.status(201).json(employeur);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

exports.getEmployeur = async (req, res) => {
  try {
    const employeur = await Employeur.findById(req.params.id);
    if (employeur == null)
      return res.status(404).json({ message: "Employeur not found" });
    res.employeur = employeur;
    res.json(employeur);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEmployeurList = async (req, res) => {
  try {
      const employeurs = await Employeur.find();
      res.json(employeurs);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};


exports.updateEmployeur = async (req, res) => {
  if (req.body.nomContact != null) {
    res.employeur.nomContact = req.body.nomContact;
  }
  try {
    const updatedEmployeur = await res.employeur.save();
    res.json(updatedEmployeur);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteEmployeur = async (req, res) => {
  try {
    await res.employeur.remove();
    res.json({ message: "Employeur has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


