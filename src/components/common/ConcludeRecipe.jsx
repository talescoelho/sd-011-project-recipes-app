import React, { useEffect, useState } from 'react';
import { arrayOf, string } from 'prop-types';

const ConcludeRecipe = ({ id, ingredients, recipeType }) => {
  const [recipeDone, setRecipeDone] = useState(true);
  useEffect(() => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes[recipeType][id].length === ingredients.length) {
      setRecipeDone(false);
    }
    setRecipeDone(true);
  // eslint-disable-next-line
  }, []);
  return (
    <button
      id={ id }
      ingredients={ ingredients }
      recipeType={ recipeType }
      type="button"
      disabled={ recipeDone }
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
