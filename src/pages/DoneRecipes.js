import React from 'react';
import Header from '../components/Header';

const DoneRecipes = () => (
  <>
    <Header title="Receitas Feitas" />
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
  </>
);

export default DoneRecipes;
