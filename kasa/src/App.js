import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apropos from './pages/Apropos';
import Erreur404 from './pages/Erreur404';
import FicheLogement from './pages/FicheLogement';
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<Apropos />} />
        <Route path="/fiche_logement" element={<FicheLogement />} />
        { /* path="*" fonctionne si jamais l'URL ne correspond à rien de déclaré au dessus */}
        <Route path="/*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
