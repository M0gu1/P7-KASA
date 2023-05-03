import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Footer, Apropos, Erreur404, FicheLogement, Home} from './'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<Apropos />} />
        <Route path="/fiche_logement" element={<FicheLogement />} />
        <Route path="/footer" element={<Footer />} />
        { /* path="*" fonctionne si jamais l'URL ne correspond à rien de déclaré au dessus */}
        <Route path="/*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
