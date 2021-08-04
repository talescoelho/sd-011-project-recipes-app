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
  getDrinkByFirstLetter } from '../Services/ApiDrink';

const number = 12;
const notFound = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

const Provider = ({ children }) => {
  const [inputSearch, setInputSearch] = useState('');
  const [radioBtn, setRadioBtn] = useState('ingredient');
  const [page, setPage] = useState('');
  const [dataDrinks, setDataDrinks] = useState([]);
  const [dataFoods, setDataFoods] = useState([]);
  // *=====================================
  const [idFoods, setIdFoods] = useState('');
  const [idFoodsAPI, setIdFoodsAPI] = useState([]);
  // *=====================================
  const [idDrinks, setIdDrinks] = useState('');
  const [DetailsDrinks, setDetailsDrinks] = useState([]);
  const [DetailsFoods, setDetailsFoods] = useState([]);
  const [limit] = useState([number]);

  async function fetchFood() {
    if (radioBtn === 'ingredient') {
      const foodByIngredientsAPI = await getFoodByIngredients(inputSearch);
      if (foodByIngredientsAPI.meals) {
        setDataFoods(foodByIngredientsAPI.meals);
      } else {
        return global.alert(notFound);
      }
    }
    if (radioBtn === 'name') {
      const foodByNameAPI = await getFoodByName(inputSearch);
      if (foodByNameAPI.meals) {
        setDataFoods(foodByNameAPI.meals);
      } else {
        return global.alert(notFound);
      }
    }
    if (radioBtn === 'letter') {
      const foodByFirstLetterAPI = await getFoodByFirstLetter(inputSearch);
      if (foodByFirstLetterAPI.meals) {
        setDataFoods(foodByFirstLetterAPI.meals);
      } else {
        return global.alert(notFound);
      }
    }
  }

  async function fetchDrink() {
    if (radioBtn === 'ingredient') {
      const drinkByIngredientsAPI = await getDrinkByIngredients(inputSearch);
      if (drinkByIngredientsAPI.drinks) {
        setDataDrinks(drinkByIngredientsAPI.drinks);
      } else {
        return global.alert(notFound);
      }
    }
    if (radioBtn === 'name') {
      const drinkByNameAPI = await getDrinkByName(inputSearch);
      if (drinkByNameAPI.drinks) {
        setDataDrinks(drinkByNameAPI.drinks);
      } else {
        return global.alert(notFound);
      }
    }
    if (radioBtn === 'letter') {
      const drinkByFirstLetterAPI = await getDrinkByFirstLetter(inputSearch);
      if (drinkByFirstLetterAPI.drinks) {
        setDataDrinks(drinkByFirstLetterAPI.drinks);
      } else {
        return global.alert(notFound);
      }
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
    limit,
    idFoods,
    setIdFoods,
    idDrinks,
    setIdDrinks,
    DetailsDrinks,
    setDetailsDrinks,
    DetailsFoods,
    setDetailsFoods,
    idFoodsAPI,
    setIdFoodsAPI,
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
