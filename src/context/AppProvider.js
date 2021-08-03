import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [filterRadio, setFilterRadio] = useState('s');
  const [filterText, setFilterText] = useState('');
  const [filteredItem, setFilteredItem] = useState([]);
  const [mainItems, setMainItems] = useState();
  const [categories, setCategories] = useState();
  const [buttonFilter, setButtonFilter] = useState();
  const [loadingMainRecipes, setLoadingMainRecipes] = useState(true);
  const [filterButtonActive, setFilterButtonActive] = useState(false);

  async function fetchFood() {
    let endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?${filterRadio}=${filterText}`;
    if (filterRadio === 'i') {
      endPoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filterText}`;
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.meals;
    if (data !== null) {
      setFilteredItem(data);
      document.getElementById('form').reset();
    } else {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  async function fetchDrink() {
    let endPoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${filterRadio}=${filterText}`;
    if (filterRadio === 'i') {
      endPoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filterText}`;
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.drinks;
    if (data !== null) {
      setFilteredItem(data);
      document.getElementById('form').reset();
    } else {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  async function fetchMainRecipes(foodOrDrink) {
    let endPointItems = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    let endPointCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    if (foodOrDrink === 'Bebidas') {
      endPointItems = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      endPointCategory = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    }
    if (filterButtonActive) {
      endPointItems = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${buttonFilter}`;
      if (foodOrDrink === 'Bebidas') {
        endPointItems = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${buttonFilter}`;
      }
    }
    const requireItems = await fetch(endPointItems);
    const responseItems = await requireItems.json();
    const dataItems = foodOrDrink === 'Bebidas' ? responseItems.drinks
      : responseItems.meals;
    const requireCategory = await fetch(endPointCategory);
    const responseCategory = await requireCategory.json();
    const dataCategory = foodOrDrink === 'Bebidas' ? responseCategory.drinks
      : responseCategory.meals;
    setMainItems(dataItems);
    setCategories(dataCategory);
    setLoadingMainRecipes(false);
  }

  const contextValue = {
    email,
    password,
    setEmail,
    setPassword,
    filterRadio,
    setFilterRadio,
    filterText,
    setFilterText,
    filteredItem,
    setFilteredItem,
    fetchFood,
    fetchDrink,
    mainItems,
    setMainItems,
    categories,
    setCategories,
    buttonFilter,
    setButtonFilter,
    loadingMainRecipes,
    setLoadingMainRecipes,
    filterButtonActive,
    setFilterButtonActive,
    fetchMainRecipes,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
