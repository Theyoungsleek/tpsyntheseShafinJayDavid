import React, { useState, useEffect } from 'react';
import './EtudiantList.css';

const EtudiantList = () => {
  const [etudiants, setEtudiants] = useState([]);
  const [stages, setStages] = useState([]);
  const [selectedEtudiantId, setSelectedEtudiantId] = useState('');
  const [selectedStageId, setSelectedStageId] = useState('');

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

    const fetchStages = async () => {
      try {
        const response = await fetch('http://localhost:3000/employeurs');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Could not fetch stages.');
        }

        setStages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEtudiants();
    fetchStages();
  }, []);

  const handleAssignEtudiant = async () => {
    try {
      const response = await fetch(`http://localhost:3000/etudiants/${selectedEtudiantId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stageId: selectedStageId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Could not assign etudiant to stage.');
      }

      const updatedEtudiants = etudiants.map((etudiant) => {
        if (etudiant._id === selectedEtudiantId) {
          return { ...etudiant, stageId: selectedStageId };
        }
        return etudiant;
      });

      setEtudiants(updatedEtudiants);

      setSelectedEtudiantId('');
      setSelectedStageId('');

      alert('Étudiant assigné au stage avec succès !');
    } catch (error) {
      console.error(error);
      alert("Une erreur s'est produite lors de l'assignation de l'étudiant au stage.");
    }
  };

  return (
    <div className="etudiant-list">
      <h1>Étudiants en recherche de stage</h1>
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
          <button
            onClick={() => {
              setSelectedEtudiantId(etudiant._id);
            }}
          >
            Assigner
          </button>
        </div>
      ))}

      {selectedEtudiantId && (
        <div className="overlay">
          <div className="stage-selection">
            <h3>Sélectionner le stage:</h3>
            <select
              value={selectedStageId}
              onChange={(event) => setSelectedStageId(event.target.value)}
            >
              <option value="">Sélectionner un stage</option>
              {stages.map((stage) => (
                <option key={stage._id} value={stage._id}>
                  {stage.nomStage}
                </option>
              ))}
            </select>
            <button onClick={handleAssignEtudiant}>Assigner</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EtudiantList;
