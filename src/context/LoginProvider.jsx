import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';
import { handleDrinks, handleFoods } from '../helpers/ApiFunctions';

function LoginProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [radioButton, setRadioButton] = useState(' ingrediente');
  const [data, setData] = useState([]);

  const handleClick = (pathname) => (pathname === '/comidas'
    ? handleFoods(radioButton, searchText)
    : handleDrinks(radioButton, searchText));

  const loginContextValue = {
    searchText,
    setSearchText,
    radioButton,
    setRadioButton,
    handleClick,
    setData,
    data,
  };

  return (
    <LoginContext.Provider value={ loginContextValue }>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default LoginProvider;
