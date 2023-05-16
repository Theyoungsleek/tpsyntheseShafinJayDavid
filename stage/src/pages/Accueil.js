import React from 'react';
import "./Accueil.css"

const Accueil = () => {
  return (
    <div className='page-accueil'>
      <header>
        <h1>Édition 2023</h1>
      </header>
      <main>
        <h2>Bienvenue sur le site des stages de fin d'études des techniques de l'informatique du Collège Montmorency!</h2>
        <p>À la fin de leurs études, les étudiants sont appelés à mettre en pratique les compétences acquises durant le programme. Cela se fait grâce à la participation d'entreprises de la région qui les accueillent afin de finaliser leurs formations.</p>
        <p>Le Collège Montmorency offre ainsi aux employeurs l'occasion d'obtenir une main-d'œuvre compétente, tout en leur permettant de participer à la formation finale des étudiants.</p>
        <p>Le stage de fin d'études est une expérience concrète permettant d'acquérir une expérience professionnelle formatrice.</p>
        <p>Les étudiants terminent la portion académique de leurs études en informatique selon une des deux voies de sortie du programme:</p>
        <ul>
          <li>Réseaux et sécurité informatique</li>
          <li>Développement d'applications informatiques</li>
        </ul>
      </main>
    </div>
  );
}

export default Accueil;
