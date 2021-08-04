import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { filterByCategory } from '../services/filterServices';

export const RecipesContext = createContext();

const foodApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const foodCategoriesApi = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const drinkCategoriesApi = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

const fetchApi = async (api) => {
  try {
    const response = await fetch(api);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export function RecipesProvider({ children }) {
  const [foodList, setFoods] = useState([]);
  const [drinkList, setDrinks] = useState([]);
  const [foodsFiltered, setFoodsFiltered] = useState([]);
  const [drinksFiltered, setDrinksFiltered] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [foodsFilter, setFoodsFilter] = useState('');
  // const [drinksFilter, setDrinksFilter] = useState('all');
  const [inProgress, setInProgress] = useState([]);
  const five = 5;
  const twelve = 12;

  useEffect(() => {
    const getRecipes = async () => {
      const { meals } = await fetchApi(foodApi);
      const { drinks } = await fetchApi(drinkApi);
      setFoods(meals);
      setDrinks(drinks);
      setFoodsFiltered(meals.filter((_recipe, index) => index < twelve));
      setDrinksFiltered(drinks.filter((_recipe, index) => index < twelve));
    };
    const getCategories = async () => {
      const { meals } = await fetchApi(foodCategoriesApi);
      const { drinks } = await fetchApi(drinkCategoriesApi);
      setFoodCategories(meals.filter((_recipe, index) => index < five));
      setDrinkCategories(drinks.filter((_recipe, index) => index < five));
    };
    getRecipes();
    getCategories();
  }, []);

  useEffect(() => {
    let newFoodsFiltered = [...foodList];
    if (foodsFilter) {
      newFoodsFiltered = filterByCategory(newFoodsFiltered, foodsFilter);
    }
    setFoodsFiltered(newFoodsFiltered.filter((_recipe, index) => index < twelve));
  }, [foodsFilter, foodList]);

  useEffect(() => {
    console.log('inprogress', inProgress);
  }, [inProgress]);

  const setFilter = (clickedCategory) => {
    if (clickedCategory === foodsFilter) {
      setFoodsFilter('');
    } else {
      setFoodsFilter(clickedCategory);
    }
  };

  // useEffect(() => {
  //   const newDrinksFiltered = filterByCategory(drinkList, foodsFilter);
  //   setFoodsFiltered(newFoodsFiltered.filter((_recipe, index) => index < twelve));
  // }, [foodsFilter, foodList]);

  const recipesContext = {
    foodList,
    drinkList,
    foodsFiltered,
    drinksFiltered,
    foodCategories,
    drinkCategories,
    setFilter,
    setInProgress,
    inProgress,
  };

  return (
    <RecipesContext.Provider value={ recipesContext }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
