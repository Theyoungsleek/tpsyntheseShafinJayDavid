import React, { useState, useRef } from 'react';
import './inscriptionE.css';

const FormulaireAjoutEtudiant = () => {
  const [donneesEtudiant, setDonneesEtudiant] = useState({
    numeroDA: '',
    nom: '',
    email: '',
    profil: '',
    stage:'',
  });

  const numDa = useRef(null);
  const nomEtudiant = useRef(null);
  const courrielEtudiant = useRef(null);
  const profilEtudiant = useRef(null);

  const buttonAjouterClick = async (event) => {
    event.preventDefault();

    // perform validation
    const numDaPattern = /^[0-9]{1,9}$/;
    const nomPattern = /^[A-Za-z]+$/;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!numDaPattern.test(donneesEtudiant.numeroDA)) {
      alert("Numéro de DA invalide!");
      return;
    }

    if (!nomPattern.test(donneesEtudiant.nom)) {
      alert("Nom invalide! Seules les lettres sont acceptées.");
      return;
    }

    if (!emailPattern.test(donneesEtudiant.email)) {
      alert("Courriel invalide!");
      return;
    }

    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/etudiants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(donneesEtudiant)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Could not add student.');
      }

      alert("Étudiant ajouté avec succès!");

      setDonneesEtudiant({
        numeroDA: '',
        nom: '',
        email: '',
        profil: '',
        stage:'',
      });

    } catch (error) {
      console.log(error);
      alert("There was an error while adding the student.");
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
