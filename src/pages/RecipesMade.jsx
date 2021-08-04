import React from 'react';
import MadeRecipeCard from '../components/MadeRecipeCard';

function RecipesMade() {
  return (
    <div>
      <header>
        Receitas Feitas
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
      <MadeRecipeCard />
    </div>
  );
}

export default RecipesMade;
