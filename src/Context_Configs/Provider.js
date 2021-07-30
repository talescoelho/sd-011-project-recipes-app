import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const URL_INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const URL_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const URL_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

function Provider({ children }) {
  const [data, setData] = useState(null);
  const [APIerror, setError] = useState(null);
  const [requestParams, setRequestParams] = useState({ searchInput: '', searchMethod: '' });
  const { searchInput, searchMethod } = requestParams;

  useEffect(() => {
    const fetchData = async () => {
      let response;
      if(searchMethod === 'first-letter' && searchInput.length !== 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        try {
          if (searchMethod === 'ingredients') {
            response = await fetch(`${URL_INGREDIENTS}${searchInput}`);
          }
          if (searchMethod === 'name') {
            response = await fetch(`${URL_NAME}${searchInput}`);
          }
          if (searchMethod === 'first-letter') {
            response = await fetch(`${URL_FIRST_LETTER}${searchInput}`);
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        }
      }
    };
    fetchData();
  }, [requestParams]);
  console.log(data);

  const context = { data, setRequestParams };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
