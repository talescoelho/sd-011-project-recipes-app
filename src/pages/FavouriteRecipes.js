import React from 'react';
import FavoriteFoodCard from '../components/FavoriteFoodCard';
import FavoriteDrinkCard from '../components/FavoriteDrinkCard';
import Header from '../components/Header';

export default function FavouriteReciples() {
  const pageTitle = {
    pageName: 'Receitas Favoritas',
    setIcon: false,
  };

  function onlyFood() {
    // mostrar apenas comidas
    console.log('mostrar apenas comidas');
  }

  function onlyDrinks() {
    // mostrar apenas bebidas
    console.log('mostrar apenas bebidas');
  }

  function removeFilters() {
    // remover filtros da pagina de favoritos
    console.log('remover filtros da pagina de favoritos');
  }

  return (
    <div>
      <Header value={ pageTitle } />
      <div className="favorite-category-container">
        <button
          type="button"
          onClick={ () => removeFilters() }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          onClick={ () => onlyFood() }
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          onClick={ () => onlyDrinks() }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      <div className="favorite-recipe-cards-container">
        <FavoriteFoodCard />
        <FavoriteDrinkCard />
      </div>
    </div>
  );
}
