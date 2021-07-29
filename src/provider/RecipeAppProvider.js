import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeAppContext from '../context/RecipeAppContext';

function RecipeAppProvider({ children }) {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const handleDisabled = () => {
    const validRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const emailIsValid = validRegex.test(login.email);
    console.log('regex' , emailIsValid);
    console.log('password' , login.password.length);
    if (emailIsValid && login.password.length > 6) {
      return false;
    }
    return true;
  };

  const data = { 
    handleChange,
    handleDisabled,
  };

  return (
    <RecipeAppContext.Provider value={ data }>
      { children }
    </RecipeAppContext.Provider>    
  )
}

RecipeAppProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.array),
}.isRequire;

export default RecipeAppProvider;
