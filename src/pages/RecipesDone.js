import React from 'react';
import Header from '../components/Header';

function RecipesDone() {
  return (
    <div>
      <Header title="Receitas Feitas" isSearch={ false } />
      <nav>
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
      </nav>
    </div>
  );
}

export default RecipesDone;
