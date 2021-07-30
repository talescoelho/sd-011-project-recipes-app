import React, { useState } from 'react';
import RecipesAppContext from './RecipesAppContext';

export default function RecipesAppProvider({ children }) {

  const [mealRecipes, setMealRecipes] = useState([]);
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [haveRecipes, setHaveRecipes] = useState(false);

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

  const context = {
    mealRecipes,
    drinkRecipes,
    haveRecipes,
    saveMealRecipes,
    saveDrinkRecipes,
  };

  return (
    <RecipesAppContext.Provider value={ context }>
      { children }
    </RecipesAppContext.Provider>
  );
}
