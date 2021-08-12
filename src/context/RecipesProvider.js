import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import * as CocktailAPI from '../services/cocktailAPI';
import * as MealAPI from '../services/meailAPI';

function RecipesProvider({ children }) {
  const [drinksData, setDrinksData] = useState([]);
  const [mealsData, setMealsData] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState('');
  const [recommended, setRecommended] = useState('');
  const [ingredientsListRecipe, setIngredientsRecipeList] = useState([]);
  const [btnName, setBtnName] = useState('');
  const [toggle, setToggle] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [share, setShare] = useState(false);
  const [favIcon, setFavIcon] = useState(false);
  const [task, setTask] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      const responseMeals = await MealAPI.fetchMeals();
      setMealsData(responseMeals);
      const responseDrinks = await CocktailAPI.fetchCocktails();
      setDrinksData(responseDrinks);
    }
    fetchMyAPI();
  }, []);

  async function resetFilter() {
    const defaultMeals = await MealAPI.fetchMeals();
    setMealsData(defaultMeals);
    setCurrentCategory('All');
    const defaultDrinks = await CocktailAPI.fetchCocktails();
    setDrinksData(defaultDrinks);
  }

  function handleToggle(name) {
    if (!toggle) {
      setBtnName(name);
      setToggle(true);
    } if (toggle && name === btnName) {
      setToggle(false);
      resetFilter();
    } if (toggle && name !== btnName) {
      setBtnName(name);
    }
  }

  const getRecipeById = async (url, id) => {
    let searchById = '';
    let searchRecommendedRecipe = '';
    if (url.includes('comidas')) {
      searchById = await MealAPI.fetchMealById(id);
      searchRecommendedRecipe = await CocktailAPI.fetchCocktailsRecommended();
    }
    if (url.includes('bebidas')) {
      searchById = await CocktailAPI.fetchCocktailById(id);
      searchRecommendedRecipe = await MealAPI.fetchMealsRecommended();
    }
    setRecipeDetail(...searchById);
    setRecommended(searchRecommendedRecipe);
  };

  const context = {
    drinksData,
    setDrinksData,
    mealsData,
    setMealsData,
    recipeDetail,
    setRecipeDetail,
    recommended,
    setRecommended,
    ingredientsListRecipe,
    setIngredientsRecipeList,
    resetFilter,
    toggle,
    setToggle,
    handleToggle,
    currentCategory,
    setCurrentCategory,
    getRecipeById,
    share,
    setShare,
    favIcon,
    setFavIcon,
    task,
    setTask,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
