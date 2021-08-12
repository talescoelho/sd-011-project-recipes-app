import React, { useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';
import ButtonFinish from '../components/ButtonFinish';
import RecipesContext from '../context/RecipesContext';
import { checkRecipeInProgress, verifyRecipeIsDone } from '../functions';

function RecipeInProgress() {
  const { getRecipeById } = useContext(RecipesContext);
  const history = useHistory();
  const url = history.location.pathname;
  const { id } = useParams();

  const addMealInProgress = () => {
    const recipe = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    recipe.meals = { ...recipe.meals, [id]: [] };
    recipe.cocktails = { ...recipe.cocktails };
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(recipe));
  };

  const addCocktailInProgress = () => {
    const recipe = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    recipe.meals = { ...recipe.meals };
    recipe.cocktails = { ...recipe.cocktails, [id]: [] };
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(recipe));
  };

  const addRecipeInProgress = () => {
    if (!verifyRecipeIsDone(id) && !checkRecipeInProgress(url, id)) {
      if (url.includes('comidas')) {
        addMealInProgress();
      }
      if (url.includes('bebidas')) {
        addCocktailInProgress();
      }
    }
  };

  // didMount getRecipeById
  useEffect(() => {
    getRecipeById(url, id);
    addRecipeInProgress();
  }, []);

  return (
    <div className="container">
      <RecipeDetails />
      <ButtonFinish />
    </div>
  );
}

export default RecipeInProgress;
