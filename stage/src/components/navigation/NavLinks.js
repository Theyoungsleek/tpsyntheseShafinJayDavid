import React from 'react'
import "./NavLinks.css"
import { NavLink } from 'react-router-dom';

function NavLinks(props) {
    

        return (
            <div>

                
                
                
                    <a href="/accueil">
                        <img
                            className="image-cegep"
                            src="https://www.cmontmorency.qc.ca/wp-content/uploads/2018/03/Logomo_1400.png"
                            alt="Logo Cegep"
                            
                        />
                    </a>

                <ul className="link-navigateur">
                    
                    
                    <li>
                        <NavLink to="/accueil" > Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/employeurs" > Employeurs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/etudiants" > Étudiants</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" > FAQ</NavLink>
                        
                    </li>
                </ul>
            </div>
            );
    
    
    
    
}
export default NavLinks;