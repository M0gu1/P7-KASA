import React from 'react';
import '../styles/components/_header.scss';
import logo from '../assets/logo_kasa.png';

const Header = () => {
    return (
        <div className='logo'>
            {/* Les images importées depuis la balise img sont accessibles dans "public" */}
            <img src={logo} alt='Logo Kasa' />
        </div>
    );
};

export default Header
