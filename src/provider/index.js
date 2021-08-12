import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context';
import { fetchDefaultDrinksFromCocktailsDB,
  fetchDefaultFoodsFromMealsDB, fetchCategoriesFromMealsDB,
  fetchCategoriesFromCocktailsDB, fetchMealsByCategoryFromMealsDB,
  fetchDrinksByCategoryFromCocktailsDB,
  fetchApiDrinks, fetchApiMeals } from '../services';

export default function Provider({ children }) {
  const [defaultFood, setDefaultFood] = useState([]);
  const [foodArray, setFoodArray] = useState([]);
  const [defaultDrink, setDefaultDrink] = useState([]);
  const [drinkArray, setDrinkArray] = useState([]);
  const [mealCategories, setMealCategories] = useState([]);
  const [drinkCategories, setDrinksCategories] = useState([]);
  const [isFiltered, setIsFiltered] = useState('');
  const [isIngridientUsed, setIsIngridientUsed] = useState({});

  async function getFetchDataFromService() {
    const meals = await fetchDefaultFoodsFromMealsDB();
    const drinks = await fetchDefaultDrinksFromCocktailsDB();
    const mealsCategories = await fetchCategoriesFromMealsDB();
    const drinksCategories = await fetchCategoriesFromCocktailsDB();
    setDefaultFood(meals);
    setDefaultDrink(drinks);
    setMealCategories(mealsCategories);
    setDrinksCategories(drinksCategories);
  }

  const getDataFromFoods = async (url, search) => {
    const getFoodArray = await fetchApiMeals(url, search);
    setFoodArray(getFoodArray);
  };

  const getDataFromDrinks = async (url, search) => {
    const getDrink = await fetchApiDrinks(url, search);
    setDrinkArray(getDrink);
  };

  async function filterMealsByCategory(category) {
    if (category === isFiltered || category === 'All') {
      setFoodArray(defaultFood);
      setIsFiltered('');
    } else if (category !== isFiltered) {
      setIsFiltered(category);
      const filteredMeals = await fetchMealsByCategoryFromMealsDB(category);
      if (filteredMeals.length === 1) {
        filteredMeals.push('');
      }
      setFoodArray(filteredMeals);
    }
  }

  async function filterDrinksByCategory(category) {
    if (category === isFiltered || category === 'All') {
      setDrinkArray(defaultDrink);
      setIsFiltered('');
    } else if (category !== isFiltered) {
      setIsFiltered(category);
      const filteredDrinks = await fetchDrinksByCategoryFromCocktailsDB(category);
      if (filteredDrinks.length === 1) {
        filteredDrinks.push('');
      }
      setDrinkArray(filteredDrinks);
    }
  }

  useEffect(() => {
    getFetchDataFromService();
  }, []);

  useEffect(() => {
    const foods = defaultFood;
    const drinks = defaultDrink;
    setFoodArray(foods);
    setDrinkArray(drinks);
  }, [defaultFood, defaultDrink]);

  return (
    <GlobalContext.Provider
      value={ {
        foodArray,
        drinkArray,
        mealCategories,
        drinkCategories,
        isIngridientUsed,
        setIsIngridientUsed,
        setFoodArray,
        setDrinkArray,
        getDataFromFoods,
        getDataFromDrinks,
        filterMealsByCategory,
        filterDrinksByCategory,
      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
