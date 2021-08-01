import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeStageBtn({ id, recipeType }) {
  const type = recipeType === 'meals' ? 'meals' : 'cocktails';
  const urlType = recipeType === 'meals' ? 'comidas' : 'bebidas';
  const URL = `/${urlType}/${id}/in-progress`;

  const checkDoneRecipes = () => {
    if (localStorage.doneRecipes
    && (JSON.parse(localStorage.doneRecipes)).find((recipe) => recipe.id === id)) {
      return true;
    }
  };

  const checkInProgressRecipes = () => {
    if (localStorage.inProgressRecipes
      && JSON.parse(localStorage.inProgressRecipes)[type].id === id) {
      return true;
    }
  };

  switch (true) {
  case checkDoneRecipes():
    return null;
  case checkInProgressRecipes():
    return (
      <Link to={ URL }>
        <button type="button" data-testid="start-recipe-btn">Continuar Receita</button>
      </Link>
    );

  default:
    return (
      <Link to={ URL }>
        <button type="button" data-testid="start-recipe-btn">Começar Receita</button>
      </Link>
    );
  }
}

RecipeStageBtn.propTypes = {
  id: PropTypes.string,
  recipeType: PropTypes.string,
}.isRequired;

export default RecipeStageBtn;
