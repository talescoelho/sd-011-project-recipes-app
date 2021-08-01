import React, { useState, useEffect } from 'react';
import { fetchMealsCategory } from '../services/meailAPI';
import { fetchDrinkCategory } from '../services/cocktailAPI';

function CategoriesBar({ recipeType }) {
  const [mealsCategory, setMealsCategory] = useState([]);
  const [drinkCategory, setDrinksCategory] = useState([]);

  useEffect(() => {
    async function fetchCategory() {
      if (recipeType === 'meals') {
        const responseMeals = await fetchMealsCategory();
        setMealsCategory(responseMeals);
      } else {
        const responseDrinks = await fetchDrinkCategory();
        setDrinksCategory(responseDrinks);
      }
    }
    fetchCategory();
  }, [recipeType]);

  function renderCategoryBar(strCategory, index) {
    return (
      <button
        key={ index }
        data-testid={ `${strCategory}-category-filter` }
        type="button"
      >
        { strCategory }
      </button>
    );
  }

  function renderCategoryMeals() {
    return (
      mealsCategory.map(({ strCategory }, index) => renderCategoryBar(strCategory, index))
    );
  }

  function renderCategoryDrink() {
    return (
      drinkCategory.map(({ strCategory }, index) => renderCategoryBar(strCategory, index))
    );
  }

  return (
    recipeType === 'meals'
      ? renderCategoryMeals()
      : renderCategoryDrink()
  );
}

export default CategoriesBar;
