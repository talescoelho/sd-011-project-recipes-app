import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails';
import RecipesContext from '../context/RecipesContext';

function RecipeInProgress({ match: { url, params: { id } } }) {
  const { getRecipeById } = useContext(RecipesContext);

  // didMount getRecipeById
  useEffect(() => {
    getRecipeById(url, id);
  }, []);

  return (
    <div>
      <RecipeDetails />
      <button data-testid="finish-recipe-btn" type="button">
        Finalizar Receita
      </button>
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
