import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import profileIcon from '../images/profileIcon.svg';

export default function Profile({ history }) {
  function hadleRedirectBtns({ target: { name } }) {
    if (name === 'done-recipies') history.push('/receitas-feitas');
    if (name === 'favorite-recipies') history.push('receitas-favoritas');
    if (name === 'exit') {
      localStorage.clear();
      history.push('/');
    }
  }

  return (
    <>
      <header>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="icone de perfil"
        />
        <h1 data-testid="page-title">Perfil</h1>
      </header>
      <h1 data-testid="profile-email">
        {JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).email : 'usuario'}
      </h1>
      <br />
      <Link to="receitas-feitas">
        <button
          type="button"
          onClick={ (event) => hadleRedirectBtns(event) }
          name="done-recipies"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>
      <Link to="receitas-favoritas">
        <button
          type="button"
          value="Receitas Favoritas"
          onClick={ (event) => hadleRedirectBtns(event) }
          name="favorite-recipies"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <button
        type="button"
        value="Sair"
        onClick={ (event) => hadleRedirectBtns(event) }
        name="exit"
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
      <FooterMenu />
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
