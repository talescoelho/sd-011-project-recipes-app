import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { handleDrinks, handleFoods } from '../helpers/ApiFunctions';

function RecipesProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [radioButton, setRadioButton] = useState(' ingrediente');
  const [drinks, setDrinks] = useState([]);
  const [foods, setFoods] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [compare, setCompare] = useState([]);

  const handleClick = (pathname) => (pathname === '/comidas'
    ? handleFoods(radioButton, searchText, setDataFilter)
    : handleDrinks(radioButton, searchText, setDataFilter));

  const recipesContextValue = {
    searchText,
    setSearchText,
    radioButton,
    setRadioButton,
    handleClick,
    drinks,
    setDrinks,
    foods,
    setFoods,
    dataFilter,
    compare,
    setCompare,
  };

  return (
    <RecipesContext.Provider value={ recipesContextValue }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default RecipesProvider;
