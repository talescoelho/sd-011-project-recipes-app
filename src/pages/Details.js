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

  // didMount getRecipeById
  useEffect(() => {
    getRecipeById();
  }, []);

  return (
    <div>
      <RecipeDetails recipe={ recipeDetail } />
      {url.includes('comidas') && <FrameVideo recipe={ recipeDetail } />}
      <RecommendedRecipes recipes={ recommended } />
      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
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
