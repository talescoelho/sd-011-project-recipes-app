import React from 'react';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function ExploreFoodsArea() {
  return (
    <div>
      <h1 data-testid="page-title">Explorar Origem</h1>
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="Botão que direciona para a tela de perfil"
      />
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="Botão que direciona para a tela de perfil"
      />
    </div>
  );
}

export default ExploreFoodsArea;
