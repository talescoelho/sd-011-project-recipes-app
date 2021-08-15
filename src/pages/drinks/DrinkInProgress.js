import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../../components/ButtonShare';
import CardDetail from '../../components/RecipeInProgress/CardDetail';
import IngredientsList from '../../components/RecipeInProgress/IngredientsList';
import Instructions from '../../components/RecipeInProgress/Instructions';
import ButtonFinish from '../../components/RecipeInProgress/ButtonFinish';
import { InProgressProvider } from '../../context/InProgressDrinks';
import ButtonFavorite from '../../components/ButtonFavorite';

export default function DrinkInProgress({ location }) {
  const [recipe, setRecipe] = useState();
  const recipeId = window.location.pathname.split('/')[2];
  const { state } = location;

  const setLocalStorage = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    let item;
    if (!inProgressRecipes) {
      item = { cocktails: { [recipeId]: [] }, meals: { } };
    } else if (inProgressRecipes && !inProgressRecipes.cocktails[recipeId]) {
      const { meals, cocktails } = inProgressRecipes;
      item = { meals, cocktails: { ...cocktails, [recipeId]: [] } };
    } else {
      const { meals, cocktails } = inProgressRecipes;
      item = { cocktails, meals };
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(item));
  };

  useEffect(setLocalStorage, [setLocalStorage]);

  useEffect(() => {
    if (state && !recipe) {
      setRecipe(state);
    }
  }, [recipe, state]);

  useEffect(() => {
    if (!state) {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      const getRecipe = async () => {
        const data = await fetch(URL)
          .then((r) => r.json())
          .then((d) => d.drinks[0]);
        setRecipe(data);
      };
      getRecipe();
    }
  }, [recipeId, state]);

  if (recipe) {
    const CHARACTERS = -12;
    return (
      <InProgressProvider>
        <section>
          <CardDetail
            thumb={ recipe.strDrinkThumb }
            name={ recipe.strDrink }
            id={ recipe.idDrink }
            category={ recipe.strCategory }
          />
          <p>{recipe.strAlcoholic}</p>
          <ButtonShare
            path={ window.location.href.slice(0, CHARACTERS) }
            testid="share-btn"
          />
          <ButtonFavorite objData={ recipe } />
          <IngredientsList
            recipe={ recipe }
          />
          <Instructions Instructions={ recipe.strInstructions } />
          <ButtonFinish recipe={ recipe } />
        </section>
      </InProgressProvider>
    );
  }
  return <div>Carregando...</div>;
}

DrinkInProgress.propTypes = {
  location: PropTypes.string,
  state: PropTypes.string,
}.isRequired;
