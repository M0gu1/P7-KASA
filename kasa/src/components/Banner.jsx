import React from 'react';
import '../styles/components/_banner.scss';
import logo from '../assets/logo_kasa.png';

const Banner = () => {
    return (
        <div className='logo'>
            {/* Les images importées depuis la balise img sont accessibles dans "public" */}
            <img src={logo} alt='Logo Kasa' />
        </div>
    );
};

export default Banner
