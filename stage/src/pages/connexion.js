import React, { useState } from 'react';


function Connexion() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("Employeur"); 

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom d'utilisateur:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Mot de passe:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Type de compte:
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="Employeur">Employeur</option>
                        <option value="Etudiant">Etudiant</option>
                        <option value="Coordinateur">Coordinateur</option>
                    </select>
                </label>
                <input type="submit" value="Se connecter" />
            </form>
        </div>
    );
}

export default Connexion;
