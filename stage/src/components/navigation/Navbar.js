import React from 'react';

import "./Navbar.css"

import { NavLink } from 'react-router-dom';

function Navbar(props) {

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/accueil"> Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/employeurs"> Employeurs</NavLink>
            </li>
            <li>
                <NavLink to="/etudiants"> Etudiants</NavLink>
            </li>
            <li>
                <NavLink to="/stage"> Stage</NavLink>
                
            </li>
            <li>
                <NavLink to="/faq"> FAQ</NavLink>
                
            </li>
            
    </ul>);



}

export default Navbar;