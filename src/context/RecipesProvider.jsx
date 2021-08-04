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
  const [doneRecipes, setDoneRecipes] = useState('');

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
    const RecipesConcludeds = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(RecipesConcludeds);
  }, []);

  useEffect(() => {
    setRecipeType(pathname);
  }, [pathname]);

  useEffect(() => {
    const fetchRecipes = async (recipeTypeToFetch, category) => {
      setIsLoading(true);
      const recipes = await fetchAllRecipesOrByCategory(recipeTypeToFetch, category);
      setDataRecipes(recipes);
      setIsLoading(false);
    };
    const fetchCategorys = async () => {
      const categorys = await fetchCategorysList(recipeType);
      setCategorysList(categorys);
    };
    fetchRecipes(recipeType, currentCategory);
    fetchCategorys();
  }, [recipeType, currentCategory]);

  const contextValue = {
    dataRecipes,
    isLoading,
    recipeType,
    setRecipeType,
    categorysList,
    currentCategory,
    setCurrentCategory,
    setDataRecipes,
    doneRecipes,
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
