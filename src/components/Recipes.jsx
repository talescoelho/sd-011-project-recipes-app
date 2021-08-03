import React, { useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MealCard from './MealCard';
import DrinkCard from './DrinkCard';
import RecipesAppContext from '../context/RecipesAppContext';
import Header from './Header';
import '../styles/Recipes.css';

export default function Recipes() {
  const { mealRecipes, drinkRecipes, haveRecipes } = useContext(RecipesAppContext);
  const location = useLocation();
  const history = useHistory();

  function checkOneRecipe() {
    if (mealRecipes.length === 1 && location.pathname === '/comidas') {
      const id = mealRecipes[0].idMeal;
      const path = `/comidas/${id}`;
      history.push(path);
    } else if (drinkRecipes.length === 1 && location.pathname === '/bebidas') {
      const id = drinkRecipes[0].idDrink;
      const path = `/bebidas/${id}`;
      history.push(path);
    }
  }

  useEffect(checkOneRecipe, [mealRecipes, drinkRecipes, history, location]);

  const limit = 12;
  function renderRecipes() {
    if (haveRecipes && location.pathname === '/comidas') {
      const recipes = mealRecipes.filter((recipe, index) => index < limit);
      return (
        recipes.map((recipe, index) => (
          <MealCard key={ index } recipe={ recipe } i={ index } />))
      );
    }
    if (haveRecipes && location.pathname === '/bebidas') {
      const recipes = drinkRecipes.filter((recipe, index) => index < limit);
      return (
        recipes.map((recipe, index) => (
          <DrinkCard key={ index } recipe={ recipe } i={ index } />))
      );
    }
  }

  return (
    <div className="recipes-section">
      <Header />
      { haveRecipes
        ? renderRecipes()
        : <h3>Loading...</h3> }
    </div>
  );
}
