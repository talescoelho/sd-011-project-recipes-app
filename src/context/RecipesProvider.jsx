import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchAllRecipesOrByCategory, fetchCategorysList } from '../services/index';

function RecipesProvider({ children }) {
  const { pathname } = useLocation();
  const [recipeType, setRecipeType] = useState(pathname);
  const [dataRecipes, setDataRecipes] = useState([]);
  const [categorysList, setCategorysList] = useState(pathname);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    setRecipeType(pathname);
  }, [pathname]);

  useEffect(() => {
    const fetchCategorys = async () => {
      const categorys = await fetchCategorysList(recipeType);
      setCategorysList(categorys);
    };
    fetchCategorys();
  }, []);

  useEffect(() => {
    console.log('teste2')
    const fetchRecipes = async (recipeTypeToFetch, category) => {
      const recipes = await fetchAllRecipesOrByCategory(recipeTypeToFetch, category);
      setDataRecipes(recipes);
    };
    fetchRecipes(recipeType, currentCategory);
  }, [recipeType, currentCategory]);

  // useEffect(() => {
  //   console.log('teste');
  //   // const fetchRecipesByCategory = async () => {
  //     // const recipesByCategory = await fetchAllRecipesOrByCategory(recipeTypeToFetch, category);
  //   // }
  // }, [currentCategory]);
  const contextValue = {
    dataRecipes,
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
