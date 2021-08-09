import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';

export default function Profile() {
  const { email } = JSON.parse(localStorage.user);
  const handlerClick = () => localStorage.clear();
  return (
    <div>
      <Header title="Perfil" data-testid="page-title" />
      <h1 data-testid="profile-email">{email}</h1>
      <Link to="/receitas-favoritas">
        <button type="button" data-testid="profile-favorite-btn">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handlerClick }
        >
          Sair
        </button>
      </Link>

      <Footer />
    </div>
  );
}
