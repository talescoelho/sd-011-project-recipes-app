import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails';
import FrameVideo from '../components/FrameVideo';
import RecommendedRecipes from '../components/RecommendedsRecipes';
import RecipesContext from '../context/RecipesContext';
import DetailsButton from '../components/DetailsButton';

function Details({ match: { url, params: { id } } }) {
  const { recipeDetail, getRecipeById } = useContext(RecipesContext);

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
    getRecipeById(url, id);
  }, []);

  return (
    <div className="details-page">
      <RecipeDetails />
      {url.includes('comidas') && <FrameVideo recipe={ recipeDetail } />}
      <RecommendedRecipes />
      <DetailsButton
        verifyRecipeIsDone={ verifyRecipeIsDone }
        checkRecipeInProgress={ checkRecipeInProgress }
        id={ id }
        url={ url }
      />
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
