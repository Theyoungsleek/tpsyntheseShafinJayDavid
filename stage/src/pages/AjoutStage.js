import React, { useState } from 'react';

const AjoutStage = () => {
  const [donneesEmployeur, setDonneesEmployeur] = useState({
    nomContact: '',
    courrielContact: '',
    telephoneContact: '',
    nomEntreprise: '',
    adresseEntreprise: '',
    typeStage: '',
    nombrePostes: 1,
    descriptionStage: '',
    remuneration: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonneesEmployeur((donneesPrecedentes) => ({
      ...donneesPrecedentes,
      [name]: value,
    }));
  };

  const buttonAjouterClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/employeurs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(donneesEmployeur)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Couldn't add employer.");
      }

      alert("Employeur ajouté avec succès!");

      setDonneesEmployeur({
        nomContact: '',
        courrielContact: '',
        telephoneContact: '',
        nomEntreprise: '',
        adresseEntreprise: '',
        typeStage: '',
        nombrePostes: 1,
        descriptionStage: '',
        remuneration: 0,
      });

    } catch (error) {
      console.log(error);
      alert("Une erreur est survenue lors de l'ajout de l'employeur.");
    }
  }

  return (
    <form onSubmit={buttonAjouterClick}>
      <label>
        Nom du contact :
        <input
          type="text"
          name="nomContact"
          value={donneesEmployeur.nomContact}
          onChange={handleChange}
          required
        />
      </label>
      
      <label>
        Courriel du contact :
        <input
          type="email"
          name="courrielContact"
          value={donneesEmployeur.courrielContact}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Téléphone du contact :
        <input
          type="text"
          name="telephoneContact"
          value={donneesEmployeur.telephoneContact}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Nom de l'entreprise :
        <input
          type="text"
          name="nomEntreprise"
          value={donneesEmployeur.nomEntreprise}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Adresse de l'entreprise :
        <input
          type="text"
          name="adresseEntreprise"
          value={donneesEmployeur.adresseEntreprise}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Type de stage :
        <select
          name="typeStage"
          value={donneesEmployeur.typeStage}
          onChange={handleChange}
          required
        >
          <option></option>
          <option>Réseaux et sécurité</option>
          <option>Développement d’applications</option>
        </select>
      </label>

      <label>
        Nombre de postes :
        <input
          type="number"
          name="nombrePostes"
          value={donneesEmployeur.nombrePostes}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description du stage :
        <textarea
          name="descriptionStage"
          value={donneesEmployeur.descriptionStage}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Rémunération :
        <input
          type="number"
          name="remuneration"
          value={donneesEmployeur.remuneration}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Ajouter l'employeur</button>


    </form>
  );
};

export default AjoutStage;
