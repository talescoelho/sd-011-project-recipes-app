import React from 'react';
import profileIcon from '../../images/profileIcon.svg';

function ExploreFoods() {
  return (
    <div>
      <h1 data-testid="page-title">Explorar Comidas</h1>
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="Botão que direciona para a tela de perfil"
      />
    </div>
  );
}

export default ExploreFoods;
