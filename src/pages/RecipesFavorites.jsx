import React from 'react';
import profileIcon from '../images/profileIcon.svg';

export default function RecipesFavorites() {
  return (
    <div>
      <header>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="icone de perfil"
        />
        <h1 data-testid="page-title">Receitas Favoritas</h1>
      </header>
    </div>
  );
}
