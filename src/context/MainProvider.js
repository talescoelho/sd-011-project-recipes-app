import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function ProviderFood({ children }) {
  const [searchBarShow, setSearchBarShow] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const contextValue = {
    searchBarShow,
    setSearchBarShow,
    data,
    setData,
    loading,
    setLoading,
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
