import React from 'react'
import "./NavLinks.css"
import { NavLink } from 'react-router-dom';

function NavLinks(props) {
    

        return (
            <div>

                
                
                
                    

                <ul className="link-navigateur">
                    <a href="/accueil">
                            <img
                                className="image-cegep"
                                src="https://www.cmontmorency.qc.ca/wp-content/uploads/2018/03/Logomo_1400.png"
                                alt="Logo Cegep"
                                
                            />
                    </a>
                    
                    <li>
                        <NavLink to="/"> Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/employeurs" > Employeurs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/etudiants" > Étudiants</NavLink>
                    </li>
                    <li>
                        <NavLink to="/stage" >Stage</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/faq" > FAQ</NavLink>
                        
                    </li>

                    <li>
                        <NavLink to="/connexion" >Connexion</NavLink>
                        
                    </li>
                    
                </ul>
            </div>
            );
    
    
    
    
}
export default NavLinks;