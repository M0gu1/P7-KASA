import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
export { default as Home } from './pages/Home'
export { default as FicheLogement } from './pages/FicheLogement'
export { default as Erreur404 } from './pages/Erreur404'
export { default as Apropos } from './pages/Apropos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);