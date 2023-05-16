import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "./Employeurs.css"

const Employeurs = () => {
  useEffect(() => {
    document.title = 'Employeurs';
  }, []);
  const history = useHistory();

  const handleInscriptionClick = () => {
    history.push('/stageInscription');
  };
  return (
    <div className='page-employeurs'>
      <header>
        <h1>Employeurs</h1>
      </header>
      <main>
      <div className="section-box">
        <h4>Formulaire d'inscription de milieu de stage</h4>
        <p>
          Stages réguliers ayant lieu à la session hiver. Les stages sont du 21 janvier au 3 mai 2019
          (il est toutefois possible après entente avec le coordonnateur de débuter le stage un peu plus tôt).
        </p>
        <p>
          Sur réception de ce formulaire, le coordonnateur des stages entrera en contact avec le responsable en entreprise pour discuter du stage.
        </p>
        <p>
          Veuillez vous référez à la page <a href="/profil-sortie">Profil de sortie</a> pour connaître le profil de sortie et les compétences des étudiants.
        </p>
        </div>
        <button onClick={handleInscriptionClick}>Inscrire Stage</button>
      </main>
    </div>
  );
};

export default Employeurs;
