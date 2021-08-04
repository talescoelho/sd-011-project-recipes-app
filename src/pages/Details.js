import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as CocktailAPI from '../services/cocktailAPI';
import * as MealAPI from '../services/meailAPI';
import RecipeDetails from '../components/RecipeDetails';
import FrameVideo from '../components/FrameVideo';
import RecommendedRecipes from '../components/RecommendedsRecipes';

function Details({ match: { url, params: { id } } }) {
  const [recipeDetail, setRecipeDetail] = useState('');
  const [recommended, setRecommended] = useState('');

  const getRecipeById = async () => {
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

  // Verifica se a receita foi finalizada a partir do id dela no localStorage
  const verifyRecipeIsDone = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    if (doneRecipes.length > 0) {
      return doneRecipes.some((recipe) => recipe.id === id);
    }
    return false;
  };

  // Verifica se a receita está "em progresso" a partir do id no localStorage
  const checkRecipeInProgress = () => {
    const recipeInProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    if (Object.keys(recipeInProgress).length > 0) {
      if (url.includes('comidas')) {
        return Object.keys(recipeInProgress.meals)
          .some((recipeId) => recipeId === id);
      }
      if (url.includes('bebidas')) {
        return Object.keys(recipeInProgress.cocktails)
          .some((recipeId) => recipeId === id);
      }
    }
    return false;
  };

  // didMount getRecipeById
  useEffect(() => {
    getRecipeById();
  }, []);

  return (
    <div>
      <RecipeDetails recipe={ recipeDetail } />
      {url.includes('comidas') && <FrameVideo recipe={ recipeDetail } />}
      <RecommendedRecipes recipes={ recommended } />
      <button
        className="button-start"
        style={ { display: verifyRecipeIsDone() ? 'none' : 'block' } }
        type="button"
        data-testid="start-recipe-btn"
      >
        {checkRecipeInProgress() ? 'Continuar Receita' : 'Iniciar Receita' }
      </button>

    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
};

export default Details;
