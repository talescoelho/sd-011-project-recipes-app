import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';

const CompletedRecipes = () => {
  function handleClickFilter({ target: { value } }) {
    if (value === 'comida') {
      setFilteredRecipe(recipes.filter((recipe) => recipe.type === 'comida'));
    } else if (value === 'bebida') {
      setFilteredRecipe(recipes.filter((recipe) => recipe.type === 'bebida'));
    } else {
      setFilteredRecipe(recipes);
    }
  }

  return (
    <div>
      <Header
        page="Receitas Feitas"
        showSearchBtn={ false }
      />
      <button
        type="button"
        value="all"
        data-testid="filter-by-all-btn"
        onClick={ handleClickFilter }
      >
        All
      </button>
    </div>
  );
};

export default CompletedRecipes;
