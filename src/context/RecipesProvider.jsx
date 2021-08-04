import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchAllRecipesOrByCategory,
  fetchCategorysList,
  fetchIngredients } from '../services/index';

function RecipesProvider({ children }) {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [recipeType, setRecipeType] = useState(pathname);
  const [dataRecipes, setDataRecipes] = useState([]);
  const [categorysList, setCategorysList] = useState(pathname);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [ingredientList, setIngredientList] = useState([]);

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

  useEffect(() => {
    const fetchIngredientsList = async () => {
      const fetchTypeIngredientsList = await fetchIngredients(recipeType);
      setIngredientList(fetchTypeIngredientsList);
    };
    fetchIngredientsList();
  }, [recipeType]);

  const contextValue = {
    dataRecipes,
    isLoading,
    setIsLoading,
    recipeType,
    setRecipeType,
    categorysList,
    currentCategory,
    setCurrentCategory,
    setDataRecipes,
    ingredientList,
    setIngredientList,
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
