import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const foodsSearchLinks = {
    ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    firstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
    fetchAll: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    fetchCategories: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    filterByCategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
    typeFilter: 'Meal',
    typeFilterKey: 'meals',
  };

  const drinksSearchLinks = {
    ingredients: 'www.thecocktaildb.com/api/json/v1/1/search.php?i=',
    name: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    firstLetter: 'www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
    fetchAll: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    fetchCategories: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    filterByCategory: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
    typeFilter: 'Drink',
    typeFilterKey: 'drinks',
  };

  const [data, setData] = useState([]);

  const setResultsAsData = (results) => (setData(results));

  const contextValue = {
    foodsSearchLinks,
    drinksSearchLinks,
    data,
    setData,
    setResultsAsData,

  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
