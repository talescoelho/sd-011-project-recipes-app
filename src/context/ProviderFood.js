import React from 'react';
import PropTypes from 'prop-types';
import ContextFood from './ContextFood';

function ProviderFood({ children }) {
  const contextValue = {};
  return (
    <ContextFood.Provider value={ contextValue }>
      {children}
    </ContextFood.Provider>
  );
}

ProviderFood.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProviderFood;
