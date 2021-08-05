import React from 'react';
import { arrayOf, string } from 'prop-types';

isRecipeDone = (id, ingredients, recipeType) => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgressRecipes.$[recipeType].$[id].length === ingredients.length) return false;
  return true;
};

const ConcludeRecipe = ({ id, ingredients, recipeType }) => (
  <label htmlFor={ id }>
    <input
      id={ id }
      ingredients={ ingredients }
      recipeType={ recipeType }
      type="button"
      disabled={ isRecipeDone(id, ingredients, recipeType) }
    />
  </label>
);

ConcludeRecipe.propTypes = ({
  id: string,
  ingredients: arrayOf(string),
  recipeType: string,
}).isRequired;

export default ConcludeRecipe;
