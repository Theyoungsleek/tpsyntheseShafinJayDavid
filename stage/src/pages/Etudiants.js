import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Etudiant.css"
import FormulaireAjoutEtudiant from './inscriptionE';


const Etudiants = () => {
  useEffect(() => {
    document.title = 'Employeurs';
  }, []);
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);

  const handleInscriptionClick = () => {
    setShowForm(true);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  const handleDisponibleClick = () => {
    history.push("/etudiantlist");
  };

  return (
    <div className="page-etudiants">
      <header>
        <h1>Édition  - Directives pour les étudiants</h1>
      </header>
      <main>
       
        <h2>
          Tâches à effectuer par l'étudiant à la session d'automne (c'est-à-dire maintenant):
        </h2>
        <ul>
          <li>
            Au plus tard le mardi 18 septembre à 12h00: Produire un CV que vous devez remettre au
            coordonnateur des stages (Sylvain Labranche).
          </li>
          <li>
            En format "Word" ou en format PDF que vous allez remettre sur Moodle pour le cours
            "2018-2019 : Stages de fin d'études en informatique". Vous devez remettre un seul
            fichier .ZIP (pas d'autre format accepté) nommé NomFamillePrenom.ZIP (pas d'espace, ni
            d'accent dans le nom du fichier)
          </li>
          <li>
            Contacter les employeurs pour leur proposer vos services. Pour chaque employeur que
            vous contactez vous devez inscrire ses coordonnées sur le formulaire{' '}
            <a href="../documents/contact_employeurs.pdf">Fichier en format Word.</a>
          </li>
          <li>
            Lorsque vous rencontrez un employeur (entrevue) vous devez remplir le formulaire{' '}
            <a href="../documents/rencontre_employeur.pdf">&laquo;rencontre employeur&raquo;</a>.
            Fichier en format{' '}
            <a href="../documents/rencontre_employeur.docx">Word.</a>
          </li>
          <li>
            Vous devez rencontrer au moins trois (3) employeurs, à moins bien sûr que vous ayez
            trouvé votre stage avant. Vous devriez avoir au moins trois formulaires &laquo;rencontre&raquo;,
            un par employeur rencontré.
          </li>
          <li>
            Au plus tard le vendredi 2 novembre à 12h00: remettre vos formulaires &laquo;contact
            employeurs&raquo; et &laquo;rencontre employeur&raquo; remplis: Dans colnet (dans un fichier .ZIP,
            comme indiqué ci-haut, n'oubliez pas d'inclure tous les formulaires &laquo;contact&raquo;
            et &laquo;rencontre&raquo; en format Word)
          </li>
          <li>
            Ainsi le 2 novembre, vous devriez avoir trouvé votre stage.
          </li>
        </ul>
        
        <h4>Sites Web pour vous aider:</h4>
        <ul>
          <li>
            À l'hiver Pour comprendre le fonctionnement général des projets de fin d'études (stages)
            je vous invite à consulter les différentes sections du site Web dans le menu de droite.
          </li>
          <li>
            Lisez ce document concernant{' '}
            <a href="../documents/Code_ethique_presentation_stages.pdf">
              l'éthique et les dates (pour Hiver 2019)
            </a>
          </li>
          <li>
            <p style={{ textAlign:"left" }}>
Plus de détails pour les <a href="rapports_techniques.php">rapports techniques</a>
</p>
</li>
<li>
<p>
<strong>TRÈS IMPORTANT:</strong> pour toute communication par courriel avec le
coordonnateur vous devez inscrire dans le sujet du message:
</p>

<ul className="retrait petit">
<li>SUJET: Stages profil #DA nom - raison</li>
<li>profil est soit réseaux, soit prog</li>
<li>#DA est votre numéro d'admission</li>
<li>nom est votre nom</li>
<li>par exemple: Stages réseaux 201014109 Joe Larue - contenu CV</li>
<li>N'oubliez pas d'inscrire la raison du message (après le tiret).</li>
<li>Si ces conditions ne sont pas respectées, j'ignorerai le courriel et je ne répondrai pas.</li>
</ul>
</li>
</ul>
<h4>Déroulement des stages / Horaire de travail</h4>
      <p>
        Les stages ont lieu durant la session d'hiver. Ils sont d'une durée de 15 semaines, du x
        janvier au y mai 2024. Vous trouverez les détails dans la section "Les profils du
        programme informatique, les dates et les spécificités des stages".
      </p>
      <p>
        Le stagiaire est tenu de respecter l'horaire régulier de l'entreprise et des employés
        occupant des fonctions similaires. Pendant une semaine normale de travail, un stagiaire
        doit faire entre 35 et 40 heures. Les étudiants qui ne respectent pas le nombre d'heures
        établies pour une semaine normale doivent reprendre les heures manquantes en débutant
        leur stage plus tôt ou en terminant plus tard (après entente avec le coordonnateur des
        stages et le professeur-superviseur). Un étudiant qui profite de cette règle ne peut
        terminer son stage après la date de présentation des stages. Les étudiants qui font plus
        de 40 heures par semaine pourront terminer leur stage plus tôt (après entente avec le
        coordonnateur et le professeur-superviseur).
      </p>
      <p>
        Pendant les journées pédagogiques et les journées de rattrapage (lecture) identifiées sur
        le calendrier scolaire, le stagiaire est tenu d'être présent en milieu de stage. Il est
        possible de débuter le stage plus tôt (que la date prévue) après entente entre l'étudiant,
        le coordonnateur et l'employeur (un stage ne peut débuter plus tôt que le premier lundi de
        janvier de l'année du stage).
      </p>
      <p>
        Il y aura deux rencontres obligatoires en ligne : Vendredi 12h00-13h00 en janvier avant le
        début des stages et Vendredi 12h00-13h00 vers le milieu du stage (la date sera communiquée
        plus tard).
      </p>
      <p>
        Les étudiants doivent remettre un rapport hebdomadaire décrivant leurs tâches de la semaine au plus tard le lundi suivant avant 11h00 AM (il est suggéré de remettre ce rapport le vendredi en fin d'après-midi en terminant la semaine). Ce rapport est envoyé par courriel au professeur superviseur. Le format du rapport sera discuté avec le professeur superviseur de l'étudiant.

Le professeur superviseur contactera l'étudiant (selon l'horaire préalablement établi avec l'étudiant) à chaque semaine. Le professeur-superviseur rencontre les étudiants à chaque deux semaines (à moins d'une entente particulière avec le superviseur de l'entreprise).

À la fin des stages (habituellement dans la semaine d'évaluation, une à deux semaines après les stages), les stagiaires seront appelés à présenter leurs projets de fin d'études aux professeurs et aux autres stagiaires. Les superviseurs en entreprise sont les bienvenus à ces présentations (les personnes intéressées devraient convenir de l'horaire avec le professeur-superviseur).</p>
<button onClick={handleInscriptionClick}>S'inscrire</button>
        {showForm && (
          <div className="form-container">
            <h2>Ajouter un étudiant en recherche de stage</h2>
            <FormulaireAjoutEtudiant onCancel={handleFormCancel} />

          </div>
          )}
<button className="button-list-etud"  onClick={handleDisponibleClick}>Afficher les étudiants</button>

   </main>
</div>
);
   }

export default Etudiants;
