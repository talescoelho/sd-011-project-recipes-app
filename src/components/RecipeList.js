import React, { useState } from 'react';
import RenderCard from './RenderCard';

function RecipeList() {
  const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [typeRecipe, setTypeRecipe] = useState('all');
  function filterRecipe(type) {
    setTypeRecipe(type);
  }
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => filterRecipe('all') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => filterRecipe('comidas') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filterRecipe('bebidas') }
      >
        Drinks
      </button>
      {recipes.lenght > 0
        ? null : <RenderCard filter={ typeRecipe } />}
    </div>
  );
}

export default RecipeList;
