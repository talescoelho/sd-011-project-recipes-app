import React from 'react';
import PropTypes from 'prop-types';
import ContextDrink from './ContextDrink';

function ProviderDrink({ children }) {
  const contextValue = {};

  return (
    <ContextDrink.Provider value={ contextValue }>
      {children}
    </ContextDrink.Provider>
  );
}

ProviderDrink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProviderDrink;
