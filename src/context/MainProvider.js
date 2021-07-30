import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function ProviderFood({ children }) {
  const [searchBarShow, setSearchBarShow] = useState(false);

  const contextValue = {
    searchBarShow,
    setSearchBarShow,
  };
  return (
    <MainContext.Provider value={ contextValue }>
      {children}
    </MainContext.Provider>
  );
}

ProviderFood.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProviderFood;
