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

  const getStageSelonTypes = (typeStages) => {
    const filtre = [];
    stages.map((stage) => {
      if (stage.typeStage === typeStages) {
        filtre.push(stage);
      }
    })
    console.log("filtre", filtre);
    return filtre
  }


  const handleAssignEtudiant = async () => {
    try {
      console.log("selectedEtudiantId", selectedEtudiantId._id)
      const response = await fetch(`http://localhost:3000/etudiants/${selectedEtudiantId._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stageId: selectedStageId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur pour assigner un etudiant a stage.');
      }

      const updatedEtudiants = etudiants.map((etudiant) => {
        if (etudiant._id === selectedEtudiantId) {
          return { ...etudiant, stageId: selectedStageId };
        }
        return etudiant;
      });

      setEtudiants(updatedEtudiants);

      const responseStage = await fetch(`http://localhost:3000/stages/${selectedStageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ etudiantId: selectedEtudiantId._id }),
      });
      const dataStage = await responseStage.json();

    if (!responseStage.ok) {
      throw new Error(dataStage.message || 'Erreur pour ajouter un etudiant au stage.');
    }
    const updatedStages = stages.map((stage) => {
      if (stage._id === selectedStageId) {
        return { ...stage, etudiants: [...stage.etudiants, selectedEtudiantId._id] };
      }
      return stage;
    });

    setStages(updatedStages);

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
              setSelectedEtudiantId(etudiant);
            }}
          >
            Assigner
          </button>
        </div>
      ))}

      {selectedEtudiantId && (
        <div className="overlay">
          <div className="stage-selection">
            <h4>Sélectionner le stage:</h4>
            <select
              value={selectedStageId}
              onChange={(event) => setSelectedStageId(event.target.value)}
            >
              {console.log(getStageSelonTypes(selectedEtudiantId.profil))}
              {console.log(stages)}
              <option value="">Sélectionner un stage</option>
              {getStageSelonTypes(selectedEtudiantId.profil).map((stage) => {
                console.log("Profile de l'étudiant", stage.profil)
                return (
                  <option key={stage._id} value={stage._id}>
                  {stage.nomContact}
                </option>
                )
              }
              )}
              
            </select>
            <button onClick={handleAssignEtudiant}>Assigner le stage</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EtudiantList;
