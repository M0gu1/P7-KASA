import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Apropos, Erreur404, FicheLogement, Home } from './'
import Footer from './components/Footer';

const App = () => {
  return (

    <BrowserRouter>
      <div className='page-container'>
        <div className='content-wrap'>
          <Routes>
            { /* renvoie sur la home */}
            <Route path="/" element={<Home />} />
            { /* renvoie sur la page a propos */}
            <Route path="/a_propos" element={<Apropos />} />
            { /* renvoie sur la page fiche logement */}
            <Route path="/fiche_logement/:id" element={<FicheLogement />} />
            { /* path="*" fonctionne si jamais l'URL ne correspond à rien de déclaré au dessus */}
            <Route path="/*" element={<Erreur404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>


  );
};

export default App;
