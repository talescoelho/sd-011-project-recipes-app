import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MealsContext from './MealsContext';

export default function MealsProvider({ children }) {
  const [mealsRecipes, setMealsRecipes] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await response.json();
      setMealsRecipes(meals);
    };
    fetchFoods();
  }, []);

  const contextValue = {
    mealsRecipes,
  };

  MealsProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  return (
    <MealsContext.Provider value={ contextValue }>
      { children }
    </MealsContext.Provider>
  );
}
