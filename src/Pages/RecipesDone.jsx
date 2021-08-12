import React from 'react';
import HeaderRecipesDone from '../Components/headers/HeaderRecipesDone';
import RecipeDone from '../Components/FilterButtons/RecipeDone';

function RecipesDone() {
  return (
    <div>
      <HeaderRecipesDone />
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
      <RecipeDone />
    </div>
  );
}

export default RecipesDone;
