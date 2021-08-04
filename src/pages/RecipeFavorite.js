import React, { useState } from 'react';
import Header from '../components/Header';
import FavoriteDrinks from './FavoriteDrinks';
import FavoriteMeals from './FavoriteMeals';
import Favorite from '../components/Favorite';

export default function RecipeFavorite() {
  const [type, setType] = useState('');

  const setTypeFavorite = ({ target }) => {
    const { value } = target;
    setType(value);
  };

  const handlerFiltererFavorites = () => {
    if (type === 'Food') {
      return FavoriteMeals();
    }
    if (type === 'Drinks') {
      return FavoriteDrinks();
    }
    return (
      <>
        { Favorite() }
      </>
    );
  };

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        value=""
        onClick={ setTypeFavorite }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        value="Food"
        onClick={ setTypeFavorite }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="Drinks"
        onClick={ setTypeFavorite }
      >
        Drinks
      </button>
      <div>
        {handlerFiltererFavorites()}
      </div>
    </div>
  );
}
