import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [recipeType, setRecipeType] = useState('meals');
  const [drinksData, setDrinksData] = useState([]);
  const [mealsData, setMealsData] = useState([]);

  const context = {
    recipeType,
    setRecipeType,
    drinksData,
    setDrinksData,
    mealsData,
    setMealsData,
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
