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

  const [redirect, setRedirect] = useState(false);
  const [recipesDb, setRecipesDb] = useState([]);

  async function handleSearchMeals(searchText, filterRadio) { // função que faz requisição para as refeições com info do searchBar
    let data = [];
    if (filterRadio === 'ingredient') {
      data = await fetchMealsIngredient(searchText);
      setRecipesDb(data);
    }
    if (filterRadio === 'name') {
      data = await fetchMealsName(searchText);
      setRecipesDb(data);
    }
    if (filterRadio === 'firstLetter') {
      if (searchText.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      data = await fetchMealsLetter(searchText);
      setRecipesDb(data);
    }
    if (data.length === 1) {
      setRedirect(true);
    }
  }

  async function handleSearchDrinks(searchText, filterRadio) { // função que faz requisição para os drinks com info do serachbar
    let data = [];
    if (filterRadio === 'ingredient') {
      data = await fetchDrinksIngredient(searchText);
      setRecipesDb(data);
    }
    if (filterRadio === 'name') {
      data = await fetchDrinksName(searchText);
      setRecipesDb(data);
    }
    if (filterRadio === 'firstLetter') {
      if (searchText.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      data = await fetchDrinksLetter(searchText);
      setRecipesDb(data);
    }
    if (data.length === 1) {
      setRedirect(true);
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
    recipesDb,
    redirect,
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
