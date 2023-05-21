const mongoose = require('mongoose');


const StageSchema = new mongoose.Schema({ 
    nom : {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^[a-z\s]+$/i.test(v);
            },
            message: props => `Le nom doit comporter uniquement des lettres`
        }
    },
    courriel: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v);
            },
            message: props => `Le courriel est dans un format invalide`
          }
    },
    nomEntreprise: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^[a-z\s]+$/i.test(v);
            },
            message: props => `Le nom de l'entreprise doit comporter uniquement des lettres`
        }
    },
    adresseEntreprise: {
        type: String,
        required: true,
    }
    
} )