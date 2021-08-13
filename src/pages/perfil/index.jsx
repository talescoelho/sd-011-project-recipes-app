import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Perfil() {
  let user = localStorage.getItem('user');
  user = JSON.parse(user);

  return (
    <div>
      <Header title="Perfil" />
      <p data-testid="profile-email">{user.email}</p>
      <Link to="receitas-feitas">
        <button type="button" data-testid="profile-done-btn">
          Receitas Feitas
        </button>
      </Link>
      <Link to="receitas-favoritas">
        <button type="button" data-testid="profile-favorite-btn">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}
// npm run cy:open --spec cypress/integration/profile_spec.js
