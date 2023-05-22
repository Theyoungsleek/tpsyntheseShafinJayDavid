const mongoose = require('mongoose');

const EmployeurSchema = new mongoose.Schema({
  nomContact: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[a-z\s]+$/i.test(v);
      },
      message: props => `Le nom doit comporter uniquement des lettres`
    },
  },
  courrielContact: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v);
      },
      message: props => `Le courriel est dans un format invalide`
    },
  },
  telephoneContact: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/i.test(v);
      },
      message: props => `Le numéro de téléphone doit avoir 10 chiffres`
    },
  },
  nomEntreprise: {
    type: String,
    required: true,
  },
  adresseEntreprise: {
    type: String,
    required: true,
  },
  typeStage: {
    type: String,
    required: true,
    enum: ['Réseaux et sécurité', 'Développement d’applications']
  },
  nombrePostes: {
    type: Number,
    required: true,
    min: [1, 'Le nombre de postes doit être supérieur à 0']
  },
  descriptionStage: {
    type: String,
    required: true,
  },
  remuneration: {
    type: Number,
    required: true,
    min: [0, 'La rémunération ne peut pas être négative']
  },
  listEtudiant: {
    type: [String],
    default: []

  }
});

module.exports = mongoose.model('Employeur', EmployeurSchema);
