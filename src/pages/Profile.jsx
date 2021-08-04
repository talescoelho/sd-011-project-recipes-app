import React from 'react';
import PropTypes from 'prop-types';
import FooterMenu from '../components/FooterMenu';

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
        <img alt="icone Profile" src="" />
        <h1>Profile - Esse header será outro componente</h1>
      </header>
      <h1 data-testid="profile-email">
        {JSON.parse(localStorage.getItem('user')).email}
      </h1>
      <br />
      <button
        type="button"
        onClick={ (event) => hadleRedirectBtns(event) }
        name="done-recipies"
        data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        value="Receitas Favoritas"
        onClick={ (event) => hadleRedirectBtns(event) }
        name="favorite-recipies"
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
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
