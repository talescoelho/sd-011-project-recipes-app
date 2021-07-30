import React, { useState, useEffect } from 'react';
import SearchBarContext from './searchBarContext';

export default function SearchBarProvider({ children }) {
  const [data, setData] = useState();

  return (
    <SearchBarContext.Provider value={ { data, setData } }>
      { children }
    </SearchBarContext.Provider>
  );
}
