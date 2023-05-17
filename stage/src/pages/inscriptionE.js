import React, { useState } from 'react';
import './inscriptionE.css';

const FormulaireAjoutEtudiant = () => {
  const [donneesEtudiant, setDonneesEtudiant] = useState({
    numeroDA: '',
    nom: '',
    email: '',
    profil: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonneesEtudiant((donneesPrecedentes) => ({
      ...donneesPrecedentes,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(donneesEtudiant);
    setDonneesEtudiant({
      numeroDA: '',
      nom: '',
      email: '',
      profil: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Numéro de DA de l'étudiant :
        <input
          type="text"
          name="numeroDA"
          value={donneesEtudiant.numeroDA}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Nom de l'étudiant :
        <input
          type="text"
          name="nom"
          value={donneesEtudiant.nom}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Courriel de l'étudiant :
        <input
          type="email"
          name="email"
          value={donneesEtudiant.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Profil de sortie de l'étudiant :
        <textarea
          name="profil"
          value={donneesEtudiant.profil}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Ajouter l'étudiant</button>
    </form>
  );
};

export default FormulaireAjoutEtudiant;
