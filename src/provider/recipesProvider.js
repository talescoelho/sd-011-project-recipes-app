import React, { useState } from 'react';
import PropTypes from 'prop-types';
import recipesContext from './recipesContext';

function RecipesProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);

  const context = {
    searchResults,
    setSearchResults,
  };
  return (
    <recipesContext.Provider value={ context }>
      {children}
    </recipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RecipesProvider;
