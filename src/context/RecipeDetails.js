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
    <RecipeDetailsContext.Provider value={ value }>
      { children }
    </RecipeDetailsContext.Provider>
  );
}

RecipeDetailsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
