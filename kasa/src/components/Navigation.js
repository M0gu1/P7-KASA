import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/components/_navigation.scss';

const Navigation = () => {
    return (
        <div className='nav-container'>
            <div className="nav">
                <ul>
                    {/* redirection sur la page d'accueil si URL vide */}
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    {/* redirection sur la page a propos */}
                    <NavLink to="/a_propos" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation