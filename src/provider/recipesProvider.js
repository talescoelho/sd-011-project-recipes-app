import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import recipesContext from './recipesContext';

function RecipesProvider({ children }) {
  const [type, setType] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  async function handleCategory(domain, category) {
    if (category !== categoryFilter) {
      setCategoryFilter(category);
      fetch(`https://www.the${domain}db.com/api/json/v1/1/filter.php?c=${category}`)
        .then((res) => {
          res.json()
            .then((json) => setSearchResults(json));
        });
    } else {
      setCategoryFilter('');
      fetch(`https://www.the${domain}db.com/api/json/v1/1/search.php?s=`)
        .then((res) => {
          res.json()
            .then((json) => setSearchResults(json));
        });
    }
  }

  useEffect(() => {
    const fetchApi = () => {
      let domain;
      if (type === 'meal') domain = 'meal';
      else domain = 'cocktail';
      let url = `https://www.the${domain}db.com/api/json/v1/1/search.php?s=`;
      if (categoryFilter !== '') {
        url = `https://www.the${domain}db.com/api/json/v1/1/filter.php?c=${categoryFilter}`;
      }
      fetch(url)
        .then((res) => {
          res.json()
            .then((json) => setSearchResults(json));
        });
    };
    fetchApi();
  }, [categoryFilter, type]);

  const context = {
    type,
    setType,
    searchResults,
    setSearchResults,
    categoryFilter,
    handleCategory,
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
