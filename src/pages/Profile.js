import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

function Profile() {
  const email = JSON.parse(localStorage.getItem('user'));
  function logoutClear() {
    localStorage.clear();
  }
  return (
    <div>
      <Header
        showButton={ false }
        title="Perfil"
      />
      <h3
        data-testid="profile-email"
      >
        {email.email}
      </h3>
      <div className="btn-group-vertical">
        <Link
          to="/receitas-feitas"
          data-testid="profile-done-btn"
        >
          <button
            className="btn btn-primary"
            type="button"
          >
            Receitas Feitas
          </button>
        </Link>
        <Link
          to="/receitas-favoritas"
          data-testid="profile-favorite-btn"
        >
          <button
            className="btn btn-primary"
            type="button"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link
          onClick={ () => logoutClear() }
          to="/"
          type="button"
          data-testid="profile-logout-btn"
        >
          <button
            className="btn btn-primary"
            type="button"
          >
            Sair
          </button>

        </Link>
      </div>
      <MenuInferior />
    </div>
  );
}

export default Profile;
