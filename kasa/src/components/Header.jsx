import React from 'react';
import '../styles/components/_header.scss';
import logo from '../assets/logo_kasa.png';
import Navigation from './Navigation';

const Header = () => {
    return (
            <header className='header'>
                {/* Les images importées depuis la balise img sont accessibles dans "public" */}
                <h1>
                <img src={logo} alt='Logo Kasa' />
                </h1>
                <Navigation />
        </header>
    );
};

export default Header
