import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import {
  fetchMealsIngredient,
  fetchMealsName,
  fetchMealsLetter,
} from '../services/MealApiService';

import {
  fetchDrinksIngredient,
  fetchDrinksLetter,
  fetchDrinksName,
} from '../services/DrinksApiServices';

export default function RecipesProvider({ children }) {
  const [loginState, setLogin] = useState({
    email: '',
    password: '',
    isDisabled: true,
  });

  async function handleSearchMeals(searchText, filterRadio) { // função que faz requisição para as refeições com info do searchBar
    if (filterRadio === 'ingredient') {
      const ingredients = await fetchMealsIngredient(searchText);
      return console.log(ingredients);
    }
    if (filterRadio === 'name') {
      const mealsName = await fetchMealsName(searchText);
      return console.log(mealsName);
    }
    if (filterRadio === 'firstLetter') {
      if (searchText.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      const fisrtName = await fetchMealsLetter(searchText);
      return console.log(fisrtName);
    }
  }

  async function handleSearchDrinks(searchText, filterRadio) { // função que faz requisição para os drinks com info do serachbar
    if (filterRadio === 'ingredient') {
      const ingredients = await fetchDrinksIngredient(searchText);
      return console.log(ingredients);
    }
    if (filterRadio === 'name') {
      const mealsName = await fetchDrinksName(searchText);
      return console.log(mealsName);
    }
    if (filterRadio === 'firstLetter') {
      if (searchText.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      const fisrtName = await fetchDrinksLetter(searchText);
      return console.log(fisrtName);
    }
  }

  function handleSearch(inputs, pathname) {
    const { searchText, filterRadio } = inputs;
    if (pathname.includes('comidas')) {
      handleSearchMeals(searchText, filterRadio);
    }
    if (pathname.includes('bebidas')) {
      handleSearchDrinks(searchText, filterRadio);
    }
  }

  const context = {
    loginState,
    setLogin,
    handleSearch,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
