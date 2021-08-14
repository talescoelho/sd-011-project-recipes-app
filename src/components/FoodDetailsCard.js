import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ShareBtn from './FavoriteBtn';
import FavoriteBtn from './ShareBtn';
import FetchApi from '../services/ApiFetch';
import FoodCarrossel from './FoodCarrossel';
import foodVideo from './FoodVideo';

function FoodDetailsCard({ details, mealIngredients, mealMeasure, id }) {
  const [recomendation, setRecomendation] = useState();
  const [doneRecipe, setDoneRecipe] = useState();
  const [inProgress, setInProgress] = useState();
  const history = useHistory();

  function DoneRecipeToLSFood(recipeType) {
    const recipeID = id;
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    today = `${dd}/${mm}/${yyyy}`;
    // código de data encontrado em: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript?rq=1
    const detailObject = [{
      id: recipeID,
      type: recipeType,
      area: details[0].strArea,
      category: details[0].strCategory,
      alcoholicOrNot: details[0].strMealAlternate,
      name: details[0].strMeal,
      image: details[0].strMealThumb,
      doneDate: today,
      tags: details[0].strTags,
    }];
    if (localStorage.doneRecipes) {
      const prev = JSON.parse(localStorage.doneRecipes);
      const detailObject2 = [...prev, {
        id: recipeID,
        type: recipeType,
        area: details[0].strArea,
        category: details[0].strCategory,
        alcoholicOrNot: details[0].strMealAlternate,
        name: details[0].strMeal,
        image: details[0].strMealThumb,
        doneDate: today,
        tags: details[0].strTags,
      }];
      localStorage.doneRecipes = JSON.stringify(detailObject2);
    } else {
      localStorage.doneRecipes = JSON.stringify(detailObject);
    }
    history.push(`/comidas/${id}/in-progress`);
  }

  useEffect(() => {
    const drinkID = id;
    if (localStorage.inProgressRecipes
      && JSON.parse(localStorage.inProgressRecipes).meals
      && Object.keys(JSON.parse(localStorage.inProgressRecipes).meals)
        .some((recipe) => recipe === drinkID)) {
      setInProgress(true);
    }
  }, []);

  useEffect(() => {
    async function getRecomendations() {
      const qty = 6;
      const response = await FetchApi('thecocktaildb', 'nome', '');
      const recomendationsList = response.drinks.slice(0, qty);
      setRecomendation(recomendationsList);
    }
    const foodID = id;
    if (localStorage.doneRecipes
      && JSON.parse(localStorage.doneRecipes).some((recipe) => recipe.id === foodID)) {
      setDoneRecipe(true);
    }
    getRecomendations();
  }, []);

  function renderDetails() {
    return (
      <div className="details-body">
        <img
          alt="logo"
          src={ details[0].strMealThumb }
          data-testid="recipe-photo"
          width="350px"
          height="300px"
        />
        <h3 data-testid="recipe-title">{ details[0].strMeal }</h3>
        <div className="details-btn-container">
          <ShareBtn />
          <FavoriteBtn />
        </div>
        <h4 data-testid="recipe-category">
          Category:
          { details[0].strCategory }
        </h4>
        <h4>Ingredients:</h4>
        { mealIngredients ? mealIngredients.map((item, index) => (
          <h5
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${item} - ${mealMeasure[index]}` }
          </h5>
        )) : '' }
        <h4>Instructions:</h4>
        <p data-testid="instructions">{ details[0].strInstructions }</p>
        <h4>Vídeo</h4>
        { foodVideo(details) }
      </div>
    );
  }
  return (
    <div className="details-container">
      { details ? renderDetails() : 'Loading...'}
      <FoodCarrossel recomendation={ recomendation } />
      <br />
      <button
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => DoneRecipeToLSFood('meal') }
        style={ { position: 'fixed',
          bottom: '0px',
          width: '100%',
          left: '0px',
          visibility: doneRecipe ? 'hidden' : 'visible',
        } }
      >
        {inProgress ? 'Continuar Receita' : 'Iniciar Receita'}
      </button>
    </div>
  );
}

export default FoodDetailsCard;
FoodDetailsCard.propTypes = {
  details: PropTypes.func,
  mealIngredients: PropTypes.func,
  mealMeasure: PropTypes.func,
}.isRequired;
