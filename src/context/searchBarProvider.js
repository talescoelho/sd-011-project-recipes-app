import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import SearchBarContext from './searchBarContext';
import { fetchAPI } from '../services';

const twelve = 12;
export default function SearchBarProvider({ children, type }) {
  const [data, setData] = useState([]);
  const [keyRedirect, setKeyRedirect] = useState(true);
  const { type: search, key } = useSelector((state) => state.recipes.search);

  const recipes = (data) ? data.slice(0, twelve) : [];
  useEffect(() => {
    const asyncFunc = async () => {
      setData(await fetchAPI[type][search](key));
    };
    asyncFunc();
  }, [type, search, key]);

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
