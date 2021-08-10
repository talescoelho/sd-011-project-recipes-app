import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchMealsByCategories, fetchMealsCategory } from '../services/meailAPI';
import { fetchCocktailsByCategories, fetchDrinkCategory } from '../services/cocktailAPI';
import RecipesContext from '../context/RecipesContext';

function CategoriesBar({ recipeType }) {
  const [mealsCategory, setMealsCategory] = useState([]);
  const [drinkCategory, setDrinksCategory] = useState([]);
  const { setDrinksData, setMealsData, setCurrentCategory, currentCategory,
    resetFilter, handleToggle } = useContext(RecipesContext);

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

  useEffect(() => {
    async function getCategories() {
      if (currentCategory !== 'All') {
        if (recipeType === 'meals') {
          const responseMeals = await fetchMealsByCategories(currentCategory);
          setMealsData(responseMeals);
        } else {
          const responseDrinks = await fetchCocktailsByCategories(currentCategory);
          setDrinksData(responseDrinks);
        }
      }
    }
    getCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  function handleClick(strCategory) {
    setCurrentCategory(strCategory);
    handleToggle(strCategory);
  }

  function renderCategoryBar(strCategory, index) {
    return (
      <button
        className="category-bar-button"
        key={ index }
        data-testid={ `${strCategory}-category-filter` }
        type="button"
        id={ `${strCategory}-category-filter` }
        value={ strCategory }
        onClick={ () => handleClick(strCategory) }
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
    <div className="container category-bar">
      <button
        className="category-bar-button"
        type="button"
        data-testid="All-category-filter"
        onClick={ () => resetFilter() }
      >
        All
      </button>
      {recipeType === 'meals'
        ? renderCategoryMeals()
        : renderCategoryDrink()}
    </div>
  );
}

export default CategoriesBar;

CategoriesBar.propTypes = {
  recipeType: PropTypes.string.isRequired,
};
