import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
// import PropTypes from 'prop-types';

function Foods() {
  return (
    <div>
      <h1 data-testid="page-title">Comidas</h1>
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </Link>
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="Botão com imagem de uma lupa: abre uma barra de pesquisa"
      />
    </div>
  );
}

export default Foods;
