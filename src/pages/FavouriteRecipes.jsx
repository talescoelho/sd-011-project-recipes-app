import React from 'react';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';

export default function FavouriteRecipes() {
  const name = 'Receitas Favoritas';
  return (
    <div>
      <Header pageName={ name } />
      Receitas Favoritas
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      {/* Fazer map dos favoritos */}
      <FavoriteCard />
    </div>
  );
}
