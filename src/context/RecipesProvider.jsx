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
  const [recipeType, setRecipeType] = useState('');
  const [dataRecipes, setDataRecipes] = useState([]);
  const [categorysList, setCategorysList] = useState(pathname);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [ingredientList, setIngredientList] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState('');
  const [jhonata, setJhonata] = useState('');

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
      console.log('RecipesProvider');
      if (jhonata === '') {
        setDataRecipes(recipes);
      }
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
    doneRecipes,
    jhonata,
    setJhonata,
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
