const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const etudiantRoutes = require('./routes/etudiantRoutes');
const employeurRoutes = require('./routes/employeurRoutes');

app.use('/etudiant', etudiantRoutes);
app.use('/employeur', employeurRoutes);

app.use((requete, reponse, next) =>{
    reponse.setHeader("Access-Control-Allow-Origin", "*");
    reponse.setHeader("Access-Control-Allow-Headers", "*");
    reponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
})


