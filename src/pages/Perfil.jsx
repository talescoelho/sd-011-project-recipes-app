import React from 'react';

import '../styles/Perfil.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Perfil() {
  return (
    <div>
      <div>
        <Header title="Perfil" />
        Página de configuração
      </div>
      <div className="container-buttons">
        <button type="button">Receitas Feitas</button>
        <button type="button">Receitas Favoritas</button>
        <button type="button">Sair</button>
      </div>
      <Footer />
    </div>
  );
}
