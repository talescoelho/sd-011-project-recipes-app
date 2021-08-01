import React from 'react';
import PropTypes from 'prop-types';

function RecipeStageBtn({ id, recipeType }) {
  const type = recipeType === 'meals' ? 'meals' : 'cocktails';
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
    return <p>CONTINUAR RECEITA</p>;

  default:
    return <p>COMEÇAR RECEITA</p>;
  }
}

RecipeStageBtn.propTypes = {
  id: PropTypes.string,
  recipeType: PropTypes.string,
}.isRequired;

export default RecipeStageBtn;
