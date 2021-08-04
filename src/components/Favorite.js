import React from 'react';
import FavoriteMeals from '../pages/FavoriteMeals';
import FavoriteDrinks from '../pages/FavoriteDrinks';

function Favorite() {
  return (
    <div>
      {FavoriteMeals()}
      {FavoriteDrinks()}
    </div>
  );
}

export default Favorite;
