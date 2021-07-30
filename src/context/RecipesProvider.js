import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [recipeType, setRecipeType] = useState('drinks');
  const [recipesData, setRecipesData] = useState([]);

  const context = {
    recipeType,
    setRecipeType,
    recipesData,
    setRecipesData,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
