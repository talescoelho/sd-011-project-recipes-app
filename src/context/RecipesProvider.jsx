import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchAllRecipesOrByCategory, fetchCategorysList } from '../services/index';

function RecipesProvider({ children }) {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [recipeType, setRecipeType] = useState(pathname);
  const [dataRecipes, setDataRecipes] = useState([]);
  const [categorysList, setCategorysList] = useState(pathname);
  const [currentCategory, setCurrentCategory] = useState('All');

  useEffect(() => {
    setRecipeType(pathname);
    console.log(1, pathname);
  }, [pathname]);

  useEffect(() => {
    console.log(2, pathname);
    const fetchRecipes = async (recipeTypeToFetch, category) => {
      setIsLoading(true);
      const recipes = await fetchAllRecipesOrByCategory(recipeTypeToFetch, category);
      setDataRecipes(recipes);
      setIsLoading(false);
    };
    const fetchCategorys = async () => {
      const categorys = await fetchCategorysList(recipeType);
      setCategorysList(categorys);
      console.log(recipeType, categorys);
    };
    fetchRecipes(recipeType, currentCategory);
    fetchCategorys();
    console.log(3);
    // console.log(categorysList)
  }, [recipeType, currentCategory]);

  const contextValue = {
    dataRecipes,
    isLoading,
    recipeType,
    setRecipeType,
    categorysList,
    setCurrentCategory,
  };

  RecipesProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

export default RecipesProvider;
