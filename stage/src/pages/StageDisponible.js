import React, { useState, useEffect } from 'react';
import './StageDisponible.css';

const StageList = () => {
  const [stages, setStages] = useState([]);
  const [displayedStages, setDisplayedStages] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchStages = async () => {
      try {
        const response = await fetch('http://localhost:3000/employeurs');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Could not fetch stages.');
        }

        setStages(data);
        setDisplayedStages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStages();
  }, []);

  useEffect(() => {
    if (sortOption === '') {
      setDisplayedStages(stages);
    } else {
      const filteredStages = stages.filter(stage => stage.typeStage === sortOption);
      setDisplayedStages(filteredStages);
    }
  }, [sortOption, stages]);

  const handleSort = (event) => {
    setSortOption(event.target.value);
  }

  return (
    <div className="stage-list">
      <h1>Stages disponibles</h1>
      <select onChange={handleSort}>
        <option value="">Tous les stages</option>
        <option value="Réseaux et sécurité">Réseaux</option>
        <option value="Développement d’applications">Développement</option>
      </select>
      {displayedStages.map((stage, index) => (
        <div key={index} className="stage-card">
          <div className="stage-row">
            <h2>Nom du contact:</h2>
            <p>{stage.nomContact}</p>
          </div>
          <div className="stage-row">
            <h2>Courriel du contact:</h2>
            <p>{stage.courrielContact}</p>
          </div>
          <div className="stage-row">
            <h2>Téléphone du contact:</h2>
            <p>{stage.telephoneContact}</p>
          </div>
          <div className="stage-row">
            <h2>Nom de l'entreprise:</h2>
            <p>{stage.nomEntreprise}</p>
          </div>
          <div className="stage-row">
            <h2>Adresse de l'entreprise:</h2>
            <p>{stage.adresseEntreprise}</p>
          </div>
          <div className="stage-row">
            <h2>Type de stage:</h2>
            <h5>{stage.typeStage}</h5>
          </div>
          <div className="stage-row">
            <h2>Nombre de postes:</h2>
            <p>{stage.nombrePostes}</p>
          </div>
          <div className="stage-row">
            <h2>Description du stage:</h2>
            <p>{stage.descriptionStage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StageList;
