import React, { useEffect } from 'react';
import "./Accueil.css"

const Accueil = () => {
  useEffect(() => {
    document.title = 'Accueil';
  }, []);
  return (
    <div className='page-accueil'>
  <header>
    <h1>Édition 2023</h1>
  </header>
  <main>
    <div className="section-box">
      <h2>Bienvenue sur le site des stages de fin d'études des techniques de l'informatique du Collège Montmorency!</h2>
      <p>À la fin de leurs études, les étudiants sont appelés à mettre en pratique les compétences acquises durant le programme. Cela se fait grâce à la participation d'entreprises de la région qui les accueillent afin de finaliser leurs formations.</p>
      <p>Le Collège Montmorency offre ainsi aux employeurs l'occasion d'obtenir une main-d'œuvre compétente, tout en leur permettant de participer à la formation finale des étudiants.</p>
      <p>Le stage de fin d'études est une expérience concrète permettant d'acquérir une expérience professionnelle formatrice.</p>
      <p>Les étudiants terminent la portion académique de leurs études en informatique selon une des deux voies de sortie du programme:</p>
      <ul>
        <li><a href="https://www.cmontmorency.qc.ca/programmes/nos-programmes-detudes/techniques/techniques-de-linformatique-specialisation-gestion-de-reseaux-informatiques/description-du-programme/">Réseaux et sécurité informatique</a></li>
        <li><a href="https://www.cmontmorency.qc.ca/programmes/nos-programmes-detudes/techniques/techniques-de-linformatique-specialisation-informatique-de-gestion/description-du-programme/">Développement d'applications informatiques</a></li>
      </ul>
    </div>
  </main>
</div>

  );
}

export default Accueil;
