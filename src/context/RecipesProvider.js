import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [drinksData, setDrinksData] = useState([]);
  const [mealsData, setMealsData] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState('');
  const [recommended, setRecommended] = useState('');
  const [ingredientsListRecipe, setIngredientsRecipeList] = useState([]);

  const context = {
    drinksData,
    setDrinksData,
    mealsData,
    setMealsData,
    recipeDetail,
    setRecipeDetail,
    recommended,
    setRecommended,
    ingredientsListRecipe,
    setIngredientsRecipeList,
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
