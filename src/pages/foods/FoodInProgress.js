import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../../components/ButtonShare';
import IngredientsList from '../../components/RecipeInProgress/IngredientsList';
import Instructions from '../../components/RecipeInProgress/Instructions';
import ButtonFinish from '../../components/RecipeInProgress/ButtonFinish';
import { InProgressProvider } from '../../context/InProgress';
import CardDetail from '../../components/RecipeInProgress/CardDetail';

export default function FoodInProgress({ location }) {
  const [recipe, setRecipe] = useState();
  const recipeId = window.location.pathname.split('/')[2];

  const { state } = location;

  useEffect(() => {
    if (state && !recipe) {
      setRecipe(state);
    }
  }, [recipe, state]);

  useEffect(() => {
    if (!state) {
      const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      const getRecipe = async () => {
        const data = await fetch(URL).then((r) => r.json()).then((d) => d.meals[0]);
        setRecipe(data);
      };
      getRecipe();
    }
  }, [recipeId, state]);

  if (recipe) {
    return (
      <InProgressProvider>
        <section>
          <CardDetail
            thumb={ recipe.strMealThumb }
            name={ recipe.strMeal }
            id={ recipe.idMeal }
            category={ recipe.strCategory }
          />
          <ButtonShare path={ window.location.href } testid="share-btn" />
          <button
            type="button"
            data-testid="favorite-btn"
          >
            {'<3'}
          </button>
          <IngredientsList recipe={ recipe } />
          <Instructions Instructions={ recipe.strInstructions } />
          <ButtonFinish />
        </section>
      </InProgressProvider>
    );
  }
  return (<div>Carregando...</div>);
}

FoodInProgress.propTypes = {
  strCategory: PropTypes.string,
  strMeal: PropTypes.string,
  idMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  strInstructions: PropTypes.string,
}.isRequired;
