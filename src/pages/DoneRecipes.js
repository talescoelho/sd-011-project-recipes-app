import React from 'react';
import Header from '../components/Header';

export default function DoneRecipes() {
  const pageTitle = {
    pageName: 'Receitas Feitas',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      <div>
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
        <img
          src="http://"
          alt="imagem do card"
          data-testid={ `${0}-horizontal-image` }
        />
        <h4 data-testid={ `${0}-horizontal-top-text` }>Categorias</h4>
        <span data-testid={ `${0}-horizontal-name` }>Nome</span>
        <span data-testid={ `${0}-horizontal-done-date` }>Data</span>
        <button
          type="button"
          data-testid={ `${0}-horizontal-share-btn` }
        >
          Share
        </button>
        <span data-testid={ `${0}-${'Pasta'}-horizontal-tag` }>Tag</span>
      </div>
    </div>
  );
}
