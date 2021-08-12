import { useCallback } from 'react';

export default function useLocalStorage() {
  const getFromStorage = useCallback((key) => {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  }, []);

  const getFavoriteRecipes = useCallback(() => {
    const favoriteRecipes = getFromStorage('favoriteRecipes');

    if (favoriteRecipes) {
      return favoriteRecipes;
    }

    return [];
  }, [getFromStorage]);

  const getInProgressRecipes = useCallback(() => {
    const inProgressRecipes = getFromStorage('inProgressRecipes');
    if (inProgressRecipes) {
      return inProgressRecipes;
    }
    return {};
  }, [getFromStorage]);

  const getInProgressRecipeByType = useCallback((type) => {
    const inProgressRecipes = getInProgressRecipes();
    if (inProgressRecipes[type]) {
      return inProgressRecipes[type];
    }
    return {};
  }, [getInProgressRecipes]);

  const getDoneRecipes = useCallback(() => {
    const doneRecipes = getFromStorage('doneRecipes');
    if (doneRecipes) {
      return doneRecipes;
    }

    return [];
  }, [getFromStorage]);

  const setToStorage = useCallback((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const addFavoriteRecipe = useCallback((recipe) => {
    const favoriteRecipes = getFavoriteRecipes();
    favoriteRecipes.push(recipe);
    setToStorage('favoriteRecipes', favoriteRecipes);
  }, [setToStorage, getFavoriteRecipes]);

  const removeFavoriteRecipe = useCallback((id) => {
    const favoriteRecipes = getFavoriteRecipes();
    const indexOf = favoriteRecipes.findIndex((recipe) => recipe.id === id);
    favoriteRecipes.splice(indexOf, 1);
    setToStorage('favoriteRecipes', favoriteRecipes);
  }, [getFavoriteRecipes, setToStorage]);

  const updateInProgressRecipe = useCallback((type, recipe) => {
    const inProgressRecipes = getInProgressRecipes();

    if (!inProgressRecipes[type]) {
      inProgressRecipes[type] = {};
    }

    inProgressRecipes[type][recipe.id] = recipe.usedIngredients;
    setToStorage('inProgressRecipes', inProgressRecipes);
  }, [setToStorage, getInProgressRecipes]);

  const addDoneRecipes = useCallback((recipe) => {
    const doneRecipes = getDoneRecipes();
    doneRecipes.push(recipe);
    setToStorage('doneRecipes', doneRecipes);
  }, [setToStorage, getDoneRecipes]);

  return {
    getFavoriteRecipes,
    getInProgressRecipeByType,
    getDoneRecipes,
    addFavoriteRecipe,
    removeFavoriteRecipe,
    updateInProgressRecipe,
    addDoneRecipes,
  };
}
