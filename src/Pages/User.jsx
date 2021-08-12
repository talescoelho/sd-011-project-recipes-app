import React from 'react';
import { Link } from 'react-router-dom';
import HeaderPerfil from '../Components/headers/HeaderPerfil';
import LowerMenu from '../Components/footer/LowerMenu';

const User = () => {
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <HeaderPerfil />
      <p data-testid="profile-email">{ email }</p>
      <div>
        <Link to="/receitas-feitas">
          <button type="button" data-testid="profile-done-btn">
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
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
      </div>
      <LowerMenu />
    </div>
  );
};

export default User;
