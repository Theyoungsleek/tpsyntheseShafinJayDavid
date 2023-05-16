import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className='page-faq'>
      <h1>Foire aux questions - FAQ</h1>

      <h3 onClick={() => toggleDropdown('q1')}>Est-ce que le stage est obligatoire?</h3>
      <div className={`dropdown-content ${activeDropdown === 'q1' ? 'active' : ''}`}>
        <p>Le stage de fin d'études en informatique est obligatoire pour l'obtention du diplôme collégial.</p>
      </div>

      <h3 onClick={() => toggleDropdown('q2')}>Quel est l'horaire de l'étudiant durant les stages?</h3>
      <div className={`dropdown-content ${activeDropdown === 'q2' ? 'active' : ''}`}>
        <p>L'étudiant doit respecter l'horaire de l'entreprise durant son stage.</p>
      </div>

      <h3 onClick={() => toggleDropdown('q3')}>Est-ce que l'étudiant travaille pendant les journées pédagogiques et les journées de rattrapage?</h3>
      <div className={`dropdown-content ${activeDropdown === 'q3' ? 'active' : ''}`}>
        <p>L'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce même durant les journées pédagogiques et de rattrapage.</p>
      </div>

      <h3 onClick={() => toggleDropdown('q4')}>Quelle est la durée d'un stage de fin d'études?</h3>
      <div className={`dropdown-content ${activeDropdown === 'q4' ? 'active' : ''}`}>
        <p>La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation).</p>
      </div>

      <h3 onClick={() => toggleDropdown('q5')}>Quelles sont les dates prévues pour les stages?</h3>
      <div className={`dropdown-content ${activeDropdown === 'q5' ? 'active' : ''}`}>
        <p>Les stages sont prévus du 21 janvier au 3 mai 2019.</p>
      </div>
    </div>
  );
};

export default FAQ;
