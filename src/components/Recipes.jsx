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
  // const history = useHistory();

  // function renderDrinks() {
  //   return (
  //     <div>
  //       <Header />
  //       <h3>Receitas Drinks</h3>
  //     </div>
  //   );
  // }

  // useEffect(checkOneRecipe, [mealRecipes, drinkRecipes, history, location]);

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
      { renderRecipes() }
    </div>
  );
}
