import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchBarContext from './searchBarContext';

export default function SearchBarProvider({ children }) {
  const [data, setData] = useState([]);
  const recipes = (data.length > 0) ? data.slice(0, 12) : data;

  return (
    <SearchBarContext.Provider value={ { data, setData, recipes } }>
      { children }
    </SearchBarContext.Provider>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.isRequired,
};
