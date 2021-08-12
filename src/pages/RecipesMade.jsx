import React from 'react';
import profileIcon from '../images/profileIcon.svg';
// import MadeRecipeCard from '../components/MadeRecipeCard';

function RecipesMade() {
  return (
    <div>
      <header>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="icone de perfil"
        />
        <h1 data-testid="page-title">Receitas Feitas</h1>
      </header>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      { /* <MadeRecipeCard /> */ }
    </div>
  );
}

export default RecipesMade;
