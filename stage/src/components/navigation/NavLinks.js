import React from 'react'
import "./NavLinks.css"
import { NavLink } from 'react-router-dom';

function NavLinks(props) {
    

        return (
            <ul className="link-navigateur">
                <li>
                    <NavLink to="/" > Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/employeurs" > Employeurs</NavLink>
                </li>
                <li>
                    <NavLink to="/etudiants" > Etudiants</NavLink>
                </li>
                <li>
                    <NavLink to="/faq" > FAQ</NavLink>
                    
                </li>
        </ul>);
    
    
    
    
}
export default NavLinks;