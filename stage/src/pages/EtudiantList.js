import React, { useState, useEffect } from 'react';
import './EtudiantList.css';

const EtudiantList = () => {
  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    const fetchEtudiants = async () => {
      try {
        const response = await fetch('http://localhost:3000/etudiants');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Could not fetch etudiants.');
        }

        setEtudiants(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEtudiants();
  }, []);

  return (
    <div className="etudiant-list">
      <h1>Étudiants à la recherche de stages</h1>
      {etudiants.map((etudiant, index) => (
        <div key={index} className="etudiant-card">
          <div className="etudiant-row">
            <h2>Numéro DA:</h2>
            <p>{etudiant.numeroDA}</p>
          </div>
          <div className="etudiant-row">
            <h2>Nom:</h2>
            <p>{etudiant.nom}</p>
          </div>
          <div className="etudiant-row">
            <h2>Email:</h2>
            <p>{etudiant.email}</p>
          </div>
          <div className="etudiant-row">
            <h2>Profil:</h2>
            <p>{etudiant.profil}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EtudiantList;
