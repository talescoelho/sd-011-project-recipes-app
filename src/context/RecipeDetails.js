import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipeDetailsContext = createContext();

export function RecipeDetailsProvider({ children }) {
  const [recipe, setRecipe] = useState();

  const value = {
    recipe,
    setRecipe,
  };

  return (
    <RecipeDetailsProvider.Provider value={ value }>
      { children }
    </RecipeDetailsProvider.Provider>
  );
}

RecipeDetailsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
