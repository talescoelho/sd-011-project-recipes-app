import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import RecipeDetails from '../components/RecipeDetails';
import RecipesContext from '../context/RecipesContext';
import { checkRecipeInProgress, verifyRecipeIsDone } from '../functions';

function RecipeInProgress({ match: { url, params: { id } } }) {
  const { getRecipeById } = useContext(RecipesContext);
  const history = useHistory();

  const addMealInProgress = () => {
    const recipe = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    recipe.meals = { ...recipe.meals, [id]: [] };
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(recipe));
  };

  const addCocktailInProgress = () => {
    const recipe = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
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
      <div className="container-start-button">
        <button
          onClick={ () => history.push('/receitas-feitas') }
          data-testid="finish-recipe-btn"
          className="button-finish"
          type="button"
        >
          Finalizar Receita
        </button>
      </div>
    </div>
  );
}

RecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
};

export default RecipeInProgress;
