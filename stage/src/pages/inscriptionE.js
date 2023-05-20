import React, { useState, useRef } from 'react';
import './inscriptionE.css';

const FormulaireAjoutEtudiant = () => {
  const [donneesEtudiant, setDonneesEtudiant] = useState({
    numeroDA: '',
    nom: '',
    email: '',
    profil: '',
  });

  const numDa = useRef(null);
  const nomEtudiant = useRef(null);
  const courrielEtudiant = useRef(null);
  const profilEtudiant = useRef(null);

  //Bouton Ajouter étudiant
  const buttonAjouterClick = (event) => {
    event.preventDefault();

    try {
      if (!/^\d{1,9}$/.test(donneesEtudiant.numeroDA)) {
        throw new Error('Le numéro de DA doit comporter jusqu\'à 9 chiffres');
      }

      if (!/^[a-z\s]+$/i.test(donneesEtudiant.nom)) {
        throw new Error('Le nom doit comporter uniquement des lettres');
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(donneesEtudiant.email)) {
        throw new Error('Le courriel est dans un format invalide');
      }

      console.log(donneesEtudiant);
      setDonneesEtudiant({
        numeroDA: '',
        nom: '',
        email: '',
        profil: '',
      });

    } catch(e) {
      alert(e.message)
      console.log(e)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonneesEtudiant((donneesPrecedentes) => ({
      ...donneesPrecedentes,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={buttonAjouterClick}>
      <label>
        Numéro de DA de l'étudiant :
        <input
          type="text"
          name="numeroDA"
          value={donneesEtudiant.numeroDA}
          onChange={handleChange}
          ref={numDa}
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
          ref={nomEtudiant}
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
          ref={courrielEtudiant}
          required
        />
      </label>

      <label>
        Profil de sortie de l'étudiant :
        <select
          name="profil"
          value={donneesEtudiant.profil}
          onChange={handleChange}
          ref={profilEtudiant}
          required
        >

          <option></option>
          <option>Réseaux et sécurité</option>
          <option>Développement d’applications</option>

        </select>
      </label>

      <button type="submit">Ajouter l'étudiant</button>
    </form>
  );
};

export default FormulaireAjoutEtudiant;
