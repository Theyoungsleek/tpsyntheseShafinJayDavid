const mongoose = require('mongoose');

const EtudiantSchema = new mongoose.Schema({
  numeroDA: {
    type: Number,
    required: true,
    min: [100000000, 'Numero de DA doit avoir 9 chiffres'],
    max: [999999999, 'Numero de DA doit avoir 9 chiffres']
  },
  nom: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[a-z\s]+$/i.test(v);
      },
      message: props => `Le nom doit comporter uniquement des lettres`
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v);
      },
      message: props => `Le courriel est dans un format invalide`
    },
  },
  profil: {
    type: String,
    required: true,
    enum: ['Réseaux et sécurité', 'Développement d’applications']
  },
  stage: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model('Etudiant', EtudiantSchema);
