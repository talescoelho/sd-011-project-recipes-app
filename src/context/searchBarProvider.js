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
      const newRecipes = await fetchAPI[type][search](key);
      if (!newRecipes) {
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
      setData(newRecipes);
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
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
