import React from 'react';
import { arrayOf, string } from 'prop-types';

const ConcludeRecipe = ({ id, ingredients, recipeType }) => {
  // let localStorageClone = useInProgressRecipes;
  // console.log(localStorageClone);
  // localStorageClone = localStorageClone[recipeType];
  // console.log(localStorageClone);
  // let recipeDone = false;
  // if (localStorageClone.length === ingredients.length) recipeDone = true;
  // else recipeDone = false;
  return (
    <button
      id={ id }
      ingredients={ ingredients }
      recipeType={ recipeType }
      type="button"
      // disabled={ recipeDone }
    >
      Finalizar receita
    </button>
  );
};

ConcludeRecipe.propTypes = ({
  id: string,
  ingredients: arrayOf(string),
  recipeType: string,
}).isRequired;

export default ConcludeRecipe;
