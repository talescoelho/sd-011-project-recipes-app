import React from 'react';
import PropTypes from 'react-dom';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const loginContextValue = {};

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
