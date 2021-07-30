import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState({
    searchInput: '',
    radioInput: '',
  });

  const fetchSearchHeader = (URL) => {
    fetch(URL)
      .then((response) => response.json()
        .then((data) => console.log(data)));
  };

  const filterFoodSearchHeader = () => {
    switch (inputValue.radioInput) {
    case 'ingrediente':
      fetchSearchHeader(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue.searchInput}`);
      break;
    case 'nome':
      fetchSearchHeader(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue.searchInput}`);
      break;
    case 'first-letter':
      if (inputValue.searchInput.length !== 1) {
        setInputValue({ ...inputValue, searchInput: '' });
        alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        fetchSearchHeader(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue.searchInput}`);
      }
      break;
    default:
      alert('Nenhum filtro selecionado.');
    }
  };

  const filterDrinkSearchHeader = () => {
    switch (inputValue.radioInput) {
    case 'ingrediente':
      fetchSearchHeader(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue.searchInput}`);
      break;
    case 'nome':
      fetchSearchHeader(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue.searchInput}`);
      break;
    case 'first-letter':
      if (inputValue.searchInput.length !== 1) {
        setInputValue({ ...inputValue, searchInput: '' });
        alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        fetchSearchHeader(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue.searchInput}`);
      }
      break;
    default:
      alert('Nenhum filtro selecionado.');
    }
  };

  const context = {
    showInput,
    setShowInput,
    inputValue,
    setInputValue,
    filterFoodSearchHeader,
    filterDrinkSearchHeader,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
