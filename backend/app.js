const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const etudiantsRoutes = require('./routes/etudiantsRoutes');
const employeursRoutes = require('./routes/employeurRoutes');
const HttpErreur = require('./models/http-erreur');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const MongoClient = require('mongodb');

app.use(bodyParser.json());

app.use('/etudiants', etudiantsRoutes);
app.use('/employeurs', employeursRoutes);

app.use((requete, reponse, next) => {
    return next(new HttpErreur("Route non trouvée", 404));
});

app.use((error, requete, reponse, next) => {
    if (reponse.headerSent) {
      return next(error);
    }
    reponse.status(error.code || 500);
    reponse.json({
      message: error.message || "Une erreur inconnue est survenue",
    });
});

mongoose
.connect(`mongodb+srv://jaysanjeev239:c8UYejS8Obl63RqR@cluster0.yjkwkr2.mongodb.net/?retryWrites=true&w=majority`)

.then(() => {
    app.listen(3000)
    console.log("Connexion à la base de données réussie");
})
.catch(erreur => {
    console.log(erreur);
});

app.use(bodyParser.json());
