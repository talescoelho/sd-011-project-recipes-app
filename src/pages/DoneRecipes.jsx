import React from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';

export default function DoneRecipes() {
  const localStorage = [];
  return (
    <div>
      <Header pageName="Receitas Feitas" />
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      {
        localStorage.map((element, index) => (
          <DoneRecipeCard recipe={ element } key={ index } />))
      }
    </div>
  );
}
