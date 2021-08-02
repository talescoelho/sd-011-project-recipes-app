import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [filterRadio, setFilterRadio] = useState('s');
  const [filterText, setFilterText] = useState('');
  const [filteredItem, setFilteredItem] = useState([]);

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
