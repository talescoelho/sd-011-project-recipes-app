import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchBarContext from './searchBarContext';

const twelve = 12;
export default function SearchBarProvider({ children }) {
  const [data, setData] = useState([]);
  const recipes = (data) ? data.slice(0, twelve) : [];

  return (
    <SearchBarContext.Provider value={ { data, setData, recipes } }>
      { children }
    </SearchBarContext.Provider>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.isRequired,
};
