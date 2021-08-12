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
  // *================Captura o id da comida=====================
  const [idFoods, setIdFoods] = useState('');
  const [idFoodsAPI, setIdFoodsAPI] = useState([]);
  // *================Captura o id da bebida=====================
  const [idDrinks, setIdDrinks] = useState('');
  const [idDrinksAPI, setIdDrinksAPI] = useState([]);
  // #==========================Comidas==================================
  const [DetailsIngredientsFiltered, setDetailsIngredientsFiltered] = useState([]);
  const [DetailsMeasuresFiltered, setDetailsMeasuresFiltered] = useState([]);
  // #==========================Bebidas==================================
  const [DetailsIngredFilterForDrinks, setDetailsIngredFilterForDrinks] = useState([]);
  const [DetailsMeasFilterForDrinks, setDetailsMeasFilterForDrinks] = useState([]);
  const [DetailsInstrucFilterForDrinks, setDetailsInstrucFilterForDrinks] = useState([]);
  // * ============================================================
  const [startButton, setStartButton] = useState(false);
  const [newDataFoods, setNewDataFoods] = useState([]);
  const [newDataDrinks, setNewDataDrinks] = useState([]);
  const [dataRandomDrinks, setDataRandomDrinks] = useState([]);
  const [foodsByCategory, setFoodsByCategory] = useState([]);
  const [drinksByCategory, setDrinksByCategory] = useState([]);
  const [limit] = useState([number]);
  // # =============================================================================
  const [count, setCount] = useState(false);
  const [selected, setSelected] = useState(0);
  const [doneRecipes, setDoneRecipes] = useState('');
  const [show, setShow] = useState(false);

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
    idFoodsAPI,
    setIdFoodsAPI,
    DetailsIngredientsFiltered,
    setDetailsIngredientsFiltered,
    DetailsMeasuresFiltered,
    setDetailsMeasuresFiltered,
    idDrinksAPI,
    setIdDrinksAPI,
    DetailsIngredFilterForDrinks,
    setDetailsIngredFilterForDrinks,
    DetailsMeasFilterForDrinks,
    setDetailsMeasFilterForDrinks,
    DetailsInstrucFilterForDrinks,
    setDetailsInstrucFilterForDrinks,
    startButton,
    setStartButton,
    dataRandomDrinks,
    setDataRandomDrinks,
    newDataFoods,
    setNewDataFoods,
    newDataDrinks,
    setNewDataDrinks,
    count,
    setCount,
    selected,
    setSelected,
    doneRecipes,
    setDoneRecipes,
    show,
    setShow,
    foodsByCategory,
    setFoodsByCategory,
    drinksByCategory,
    setDrinksByCategory,
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
