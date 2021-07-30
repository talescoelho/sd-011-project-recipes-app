import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MealCard from './MealCard';
import RecipesAppContext from '../context/RecipesAppContext';
import '../styles/Recipes.css';
import Header from './Header';

export default function Recipes({ path }) {
  const { mealRecipes } = useContext(RecipesAppContext);
  const limit = 12;
  function renderMeals() {
    const recipes = mealRecipes.filter((recipe, index) => index < limit);
    return (
      recipes.map((recipe, index) => <MealCard key={ index } recipe={ recipe } />)
    );
  }

  function renderDrinks() {
    return (
      <div>
        <Header />
        <h3>Receitas Drinks</h3>
      </div>
    );
  }

  function renderRecipes() {
    if (path === '/comidas') return renderMeals();
    if (path === '/bebidas') return renderDrinks();
  }

  return (
    <div className="recipes-section">
      <Header />
      { renderRecipes() }
    </div>
  );
}

Recipes.propTypes = {
  path: PropTypes.string.isRequired,
};
