import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function MainRecipesScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Título da página</h1>
      <Link to="/perfil">
        <button type="button" data-testid="profile-top-btn">
          Perfil
        </button>
      </Link>
      <button type="button" data-testid="search-top-btn">Pesquisar</button>
    </div>
  );
}

export default MainRecipesScreen;
