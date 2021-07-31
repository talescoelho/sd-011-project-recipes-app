import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MealsContext from './MealsContext';
import { fetchAllRecipes } from '../services/index';

function MealsProvider({ children }) {
  const { pathname } = useLocation();
  const [recipeType, setRecipeType] = useState(pathname);
  const [dataRecipes, setDataRecipes] = useState({});

  useEffect(() => {
    setRecipeType(pathname);
  }, [pathname]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await fetchAllRecipes(recipeType);
      setDataRecipes(recipes);
    };
    fetchRecipes();
  }, [recipeType]);

  const contextValue = {
    dataRecipes,
    recipeType,
    setRecipeType,
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
