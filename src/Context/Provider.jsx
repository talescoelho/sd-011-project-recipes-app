import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';
import {
  getFoodByIngredients,
  getFoodByName,
  getFoodByFirstLetter } from '../Services/ApiFood';
import {
  getDrinkByIngredients,
  getDrinkByName,
  getDrinkByFirstLetter} from '../Services/ApiDrink';

const Provider = ({ children }) => {
  const [inputSearch, setInputSearch] = useState('');
  const [radioBtn, setRadioBtn] = useState('ingredient');
  const [page, setPage] = useState('');
  const [dataDrinks, setDataDrinks] = useState([]);
  const [dataFoods, setDataFoods] = useState([]);

  async function fetchFood() {
    if (radioBtn === 'ingredient') {
      const foodByIngredientsAPI = await getFoodByIngredients(inputSearch);
      setDataFoods(foodByIngredientsAPI.meals);
    }
    if (radioBtn === 'name') {
      const foodBynameAPI = await getFoodByName(inputSearch);
      setDataFoods(foodBynameAPI.meals);
    }
    if (radioBtn === 'letter') {
      const foodByFirstLetterAPI = await getFoodByFirstLetter(inputSearch);
      setDataFoods(foodByFirstLetterAPI.meals);
    }
  }

  async function fetchDrink() {
    if (radioBtn === 'ingredient') {
      const drinkByIngredientsAPI = await getDrinkByIngredients(inputSearch);
      setDataDrinks(drinkByIngredientsAPI.drinks);
    }
    if (radioBtn === 'name') {
      const drinkBynameAPI = await getDrinkByName(inputSearch);
      setDataDrinks(drinkBynameAPI.drinks);
    }
    if (radioBtn === 'letter') {
      const drinkByFirstLetterAPI = await getDrinkByFirstLetter(inputSearch);
      setDataDrinks(drinkByFirstLetterAPI.drinks);
    }
  }

  const context = {
    setPage,
    page,
    inputSearch,
    setInputSearch,
    radioBtn,
    setRadioBtn,
    fetchFood,
    dataFoods,
    fetchDrink,
    dataDrinks,
  };

  return (
    <MainContext.Provider value={ context }>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;
