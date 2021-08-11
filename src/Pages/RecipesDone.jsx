import React from 'react';
import HeaderRecipesDone from '../Components/headers/HeaderRecipesDone';
import DrinkRecipesDone from '../Components/FilterButtons/DrinkRecipesDone';

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
      <DrinkRecipesDone />
    </div>
  );
}

export default RecipesDone;
