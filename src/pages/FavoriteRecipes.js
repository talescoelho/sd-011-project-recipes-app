import React from 'react';
import MealsCards from '../components/MealsCards';

function FavoriteRecipes() {
  const receitasFavoritas = JSON.parse(localStorage.getItem('favorites'));
  console.log(receitasFavoritas);
  return (
    <div>
      <h3>
        comidas favoritas
      </h3>
      <MealsCards meals={ receitasFavoritas } />
    </div>
  );
}

export default FavoriteRecipes;
