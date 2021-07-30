import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context';
import { fetchDefaultDrinksFromCocktailsDB,
  fetchDefaultFoodsFromMealsDB } from '../services';

export default function Provider({ children }) {
  const [defaultFood, setDefaultFood] = useState([]);
  const [foodArray, setFoodArray] = useState([]);
  const [defaultDrink, setDefaultDrink] = useState([]);
  const [drinkArray, setDrinkArray] = useState([]);

  async function getFetchDataFromService() {
    const meals = await fetchDefaultFoodsFromMealsDB();
    const drinks = await fetchDefaultDrinksFromCocktailsDB();
    setDefaultFood(meals);
    setDefaultDrink(drinks);
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
    <GlobalContext.Provider value={ { foodArray, drinkArray } }>
      { children }
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
