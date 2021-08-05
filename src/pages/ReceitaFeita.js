import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function ReceitaFeita() {
  const [doneRecipe, setDoneRecipe] = useState();

  function getStorage(func) {
    const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    if (localStorage.doneRecipes) {
      func(doneRecipesStorage);
    }
  }

  useEffect(() => {
    getStorage(setDoneRecipe);
  }, []);

  function renderBtns() {
    return (
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>);
  }

  return (
    <div>
      <Header lupa={ false } text="Receitas Feitas" />
      {renderBtns()}
    </div>
  );
}
