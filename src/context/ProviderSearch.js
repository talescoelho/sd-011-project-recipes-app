import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import SearchContext from './Context';

function ProviderSearch({ children }) {
  const returned = 'init';

  return (
    <SearchContext.Provider value={ returned }>{children}</SearchContext.Provider>
  );
}

ProviderSearch.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderSearch;
