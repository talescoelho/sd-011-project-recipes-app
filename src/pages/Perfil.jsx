import React from 'react';

import '../styles/Perfil.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Perfil() {
  const rx = /[^0-9a-zA-Z@._]+/ig;
  const wordEmailChar = 5;
  const user = localStorage.getItem('user');
  const userWithoutSpecialCharacters = user.replace(rx, '');
  const email = userWithoutSpecialCharacters.slice(wordEmailChar);
  return (
    <div className="container-geral">
      <Header title="Perfil" />
      <div className="container-email">
        <span>{ email }</span>
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
