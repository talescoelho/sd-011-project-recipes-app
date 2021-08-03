import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as CocktailAPI from '../services/cocktailAPI';
import * as MealAPI from '../services/meailAPI';
import RecipeDetails from '../components/RecipeDetails';

function Details({ match: { url, params: { id } } }) {
  const [recipeDetail, setRecipeDetail] = useState('');

  const getRecipeById = async () => {
    let response = '';
    if (url.includes('comidas')) {
      response = await MealAPI.fetchMealById(id);
    }
    if (url.includes('bebidas')) {
      response = await CocktailAPI.fetchCocktailById(id);
    }
    return setRecipeDetail(...response);
  };

  // didMount getRecipeById
  useEffect(() => {
    getRecipeById();
  }, []);

  return (
    <RecipeDetails recipe={ recipeDetail } />
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
