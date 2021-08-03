import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/User.css';

export default function User() {
  const getEmail = JSON.parse(localStorage.getItem('user'));
  const { email } = getEmail;

  const exitButton = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Header pageName="Perfil" />
      <div className="userButtons">
        <p data-testid="profile-email">{ email }</p>
        <Link to="/receitas-feitas">
          <button data-testid="profile-done-btn" type="button">Receitas Feitas</button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            data-testid="profile-favorite-btn"
            type="button"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            data-testid="profile-logout-btn"
            type="button"
            onClick={ exitButton }
          >
            Sair
          </button>
        </Link>
      </div>
    </div>
  );
}
