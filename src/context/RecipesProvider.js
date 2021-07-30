import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

export default function RecipesProvider({ children }) {
  const [loginState, setLogin] = useState({
    email: '',
    password: '',
    isDisabled: true,
  });

  const context = {
    loginState,
    setLogin,
  }

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
