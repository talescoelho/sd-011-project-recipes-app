import React from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';

function ReceitasFavoritas() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <div>
      {favoriteRecipes ? favoriteRecipes
        .map((e, i) => <FavoriteRecipeCard key={ i } name={ e.name } />) : null}
    </div>
  );
}

export default ReceitasFavoritas;
