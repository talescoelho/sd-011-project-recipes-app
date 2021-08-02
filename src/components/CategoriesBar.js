import React, { useState, useEffect, useContext } from 'react';
import { fetchMealsByCategories, fetchMealsCategory } from '../services/meailAPI';
import { fetchCocktailsByCategories, fetchDrinkCategory } from '../services/cocktailAPI';
import RecipesContext from '../context/RecipesContext';

function CategoriesBar({ recipeType, filterType }) {
  const [mealsCategory, setMealsCategory] = useState([]);
  const [drinkCategory, setDrinksCategory] = useState([]);
  const { setDrinksData, setMealsData, resetFilter } = useContext(RecipesContext);

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

  async function handleClick({ target }) {
    const { value } = target;
    if (filterType === 'meals') {
      const responseMeals = await fetchMealsByCategories(value);
      setMealsData(responseMeals);
    }
    if (filterType === 'bebidas') {
      const responseDrinks = await fetchCocktailsByCategories(value);
      setDrinksData(responseDrinks);
    }
  }

  function renderCategoryBar(strCategory, index) {
    return (
      <button
        key={ index }
        data-testid={ `${strCategory}-category-filter` }
        type="button"
        value={ strCategory }
        onClick={ (e) => handleClick(e) }
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
    <>
      {recipeType === 'meals'
        ? renderCategoryMeals()
        : renderCategoryDrink()}

      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => resetFilter() }
      >
        All
      </button>
    </>
  );
}

export default CategoriesBar;
