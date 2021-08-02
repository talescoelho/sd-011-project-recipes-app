import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

const foodApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const foodCategoriesApi = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const drinkCategoriesApi = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const foodCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const drinkCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

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
  const [drinksFilter, setDrinksFilter] = useState('');
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
    const getFoodByCategory = async () => {
      let newFoodsFiltered = [...foodList];
      if (foodsFilter) {
        const { meals } = await fetchApi(`${foodCategory}${foodsFilter}`);
        newFoodsFiltered = [...meals];
      }
      setFoodsFiltered(newFoodsFiltered.filter((_recipe, index) => index < twelve));
    };
    getFoodByCategory();
  }, [foodsFilter, foodList]);

  useEffect(() => {
    const getDrinkByCategory = async () => {
      let newDrinksFiltered = [...drinkList];
      if (drinksFilter) {
        const { drinks } = await fetchApi(`${drinkCategory}${drinksFilter}`);
        newDrinksFiltered = [...drinks];
      }
      setDrinksFiltered(newDrinksFiltered.filter((_recipe, index) => index < twelve));
    };
    getDrinkByCategory();
  }, [drinksFilter, drinkList]);

  const recipesContext = {
    foodList,
    drinkList,
    foodsFiltered,
    drinksFiltered,
    foodCategories,
    drinkCategories,
    foodsFilter,
    drinksFilter,
    setFoodsFilter,
    setDrinksFilter,
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
