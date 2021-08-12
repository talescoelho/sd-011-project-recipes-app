import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import SearchBarContext from './searchBarContext';
import { Foods, Cocktails } from '../services';

const twelve = 12;
export default function SearchBarProvider({ children, type }) {
  const [data, setData] = useState([]);
  const [keyRedirect, setKeyRedirect] = useState(true);

  const recipes = (data) ? data.slice(0, twelve) : [];
  useEffect(() => {
    const asyncFunc = async () => {
      if (type.includes('omida')) setData(await Foods.searchName(''));
      if (type.includes('ebidas')) setData(await Cocktails.searchName(''));
    };
    asyncFunc();
  }, [type]);
  return (
    <SearchBarContext.Provider
      value={ { data, setData, recipes, keyRedirect, setKeyRedirect } }
    >
      { children }
    </SearchBarContext.Provider>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.isRequired,
  type: PropTypes.string.isRequired,
};
