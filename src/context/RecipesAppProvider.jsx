import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesAppContext from './RecipesAppContext';

export default function RecipesAppProvider({ children }) {
  const [mealRecipes, setMealRecipes] = useState([]);
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [haveRecipes, setHaveRecipes] = useState(false);
  const [firstAccess, setFirstAccess] = useState(true);

  function saveMealRecipes(meals) {
    const recipes = meals.meals;
    setMealRecipes(recipes);
    setHaveRecipes(true);
  }

  function saveDrinkRecipes(drinks) {
    const recipesDrinks = drinks.drinks;
    setDrinkRecipes(recipesDrinks);
    setHaveRecipes(true);
  }

  function changeHaveRecipes(bool) {
    setHaveRecipes(bool);
  }

  function firstRecipes() {
    const getRecipies = async () => {
      if (firstAccess) {
        const fetchAPI = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const response = await fetchAPI.json();
        saveMealRecipes(response);
        setFirstAccess(false);
      }
    };
    getRecipies();
  }

  useEffect(firstRecipes, [firstAccess]);

  const context = {
    mealRecipes,
    drinkRecipes,
    haveRecipes,
    changeHaveRecipes,
    saveMealRecipes,
    saveDrinkRecipes,
  };

  return (
    <RecipesAppContext.Provider value={ context }>
      { children }
    </RecipesAppContext.Provider>
  );
}

RecipesAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
