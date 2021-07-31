import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MealsContext from './MealsContext';
import { fetchAllRecipes } from '../services/index';

function MealsProvider({ children }) {
  const { pathname } = useLocation();
  const type = pathname === '/bebidas' ? 'Bebidas' : 'Comidas';

  const [recipeType, setRecipeType] = useState('');
  const [dataRecipes, setDataRecipes] = useState({});

  useEffect(() => {
    setRecipeType(type);
    const fetchRecipes = async () => {
      const recipes = await fetchAllRecipes(type);
      setDataRecipes(recipes);
    };
    fetchRecipes();
  }, [recipeType]);

  const contextValue = {
    dataRecipes,
    recipeType,
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

export default MealsProvider;
