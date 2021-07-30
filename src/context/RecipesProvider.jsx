import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { handleDrinks, handleFoods } from '../helpers/ApiFunctions';

function RecipesProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [radioButton, setRadioButton] = useState(' ingrediente');

  const handleClick = (pathname) => (pathname === '/comidas'
    ? handleFoods(radioButton, searchText)
    : handleDrinks(radioButton, searchText));

  const recipesContextValue = {
    searchText,
    setSearchText,
    radioButton,
    setRadioButton,
    handleClick,
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
