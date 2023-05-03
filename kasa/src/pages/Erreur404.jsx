import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Erreur404 = () => {
    return (
        <div className='notFound'>
			<Header />
            <Navigation />
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='notFound_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
    );
};

export default Erreur404