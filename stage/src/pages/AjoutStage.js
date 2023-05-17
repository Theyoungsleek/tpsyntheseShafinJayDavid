import React, { useState } from 'react';

const FormulaireAjoutStage = () => {
  const [nomContact, setNomContact] = useState('');
  const [courrielContact, setCourrielContact] = useState('');
  const [telephoneContact, setTelephoneContact] = useState('');
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [adresseEntreprise, setAdresseEntreprise] = useState('');
  const [typeStage, setTypeStage] = useState('');
  const [nombrePostes, setNombrePostes] = useState('');
  const [descriptionStage, setDescriptionStage] = useState('');
  const [remuneration, setRemuneration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Stage added successfully!');
   
    setNomContact('');
    setCourrielContact('');
    setTelephoneContact('');
    setNomEntreprise('');
    setAdresseEntreprise('');
    setTypeStage('');
    setNombrePostes('');
    setDescriptionStage('');
    setRemuneration('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom de la personne contact:
          <input
            type="text"
            value={nomContact}
            onChange={(e) => setNomContact(e.target.value)}
            required
          />
        </label>
        <label>
          Courriel de la personne contact:
          <input
            type="email"
            value={courrielContact}
            onChange={(e) => setCourrielContact(e.target.value)}
            required
          />
        </label>
        <label>
          Numéro de téléphone de la personne contact:
          <input
            type="tel"
            value={telephoneContact}
            onChange={(e) => setTelephoneContact(e.target.value)}
            required
          />
        </label>
        <label>
          Nom de l'entreprise:
          <input
            type="text"
            value={nomEntreprise}
            onChange={(e) => setNomEntreprise(e.target.value)}
            required
          />
        </label>
        <label>
          Adresse de l'entreprise:
          <input
            type="text"
            value={adresseEntreprise}
            onChange={(e) => setAdresseEntreprise(e.target.value)}
            required
          />
        </label>
        <label>
          Type de stage:
          <select value={typeStage} onChange={(e) => setTypeStage(e.target.value)} required>
            <option value="">Sélectionner le type de stage</option>
            <option value="Réseaux et sécurité">Réseaux et sécurité</option>
            <option value="Développement d'applications">Développement d'applications</option>
          </select>
        </label>
        <label>
          Nombre de postes disponibles:
          <input
            type="number"
            value={nombrePostes}
            onChange={(e) => setNombrePostes(e.target.value)}
            required
          />
        </label>
        <label>
          Description du stage:
          <textarea
            value={descriptionStage}
            onChange={(e) => setDescriptionStage(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          Rémunération:
          <input
            type="text"
            value={remuneration}
            onChange={(e) => setRemuneration(e.target.value)}
            required
            />
            </label>
            <button type="submit">Ajouter le stage</button>
            </form>
            </div>
            );
            };
            
            export default FormulaireAjoutStage;

