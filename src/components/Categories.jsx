import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesAppContext from '../context/RecipesAppContext';
import * as api from '../services/API';
import '../styles/Categories.css';

export default function Categories() {
  const {
    categories,
    setIsFilterByCategory,
    saveMealRecipes,
    saveDrinkRecipes,
  } = useContext(RecipesAppContext);

  const limit = 5;
  const firstFiveCategories = categories.filter((item, index) => index < limit);
  const location = useLocation();

  function filterRecipiesByCategory({ target }) {
    const { value } = target;
    const path = location.pathname;
    let callback;
    setIsFilterByCategory(true);
    if (path === '/comidas') {
      callback = saveMealRecipes;
    } else {
      callback = saveDrinkRecipes;
    }
    api.getRecipiesByCategories(value, path, callback);
  }

  return (
    <section className="categories-section">
      <button
        type="button"
        value=""
        onClick={ (e) => filterRecipiesByCategory(e) }
      >
        ALL
      </button>
      { firstFiveCategories.map((category, index) => (
        <button
          type="button"
          key={ index }
          value={ category.strCategory }
          onClick={ (e) => filterRecipiesByCategory(e) }
          data-testid={ `${category.strCategory}-category-filter` }
        >
          { category.strCategory }
        </button>
      ))}
    </section>
  );
}
