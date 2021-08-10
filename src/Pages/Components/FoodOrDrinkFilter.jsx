import React from 'react';

export default function FoodOrDrinkFilter({ setFilter }) {
  // const doneRecipes = localStorage.getItem('doneRecipes');

  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('all') }
        type="button"
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        onClick={ () => setFilter('foods') }
        type="button"
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('drinks') }
        type="button"
      >
        Drinks
      </button>
    </div>
  );
}
