import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

import Header from '../components/Header';

export default function Perfil() {
  const userEmail = JSON.parse(localStorage.user);
  const { email } = userEmail;

  const handleTeste = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Header title="Perfil" />
      <p data-testid="profile-email">
        { email }
      </p>
      <Link
        to="/receitas-feitas"
        data-testid="profile-done-btn"
      >
        Receitas Feitas
      </Link>
      <Link
        to="/receitas-favoritas"
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </Link>
      <Link
        to="/"
        data-testid="profile-logout-btn"
        onClick={ () => handleTeste() }
      >
        Sair
      </Link>
      <Footer />
    </div>
  );
}
