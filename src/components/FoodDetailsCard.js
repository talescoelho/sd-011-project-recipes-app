import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareBtn from './FavoriteBtn';
import FavoriteBtn from './ShareBtn';
import FetchApi from '../services/ApiFetch';
import FoodCarrossel from './FoodCarrossel';

function FoodDetailsCard({ details, mealIngredients, mealMeasure, id }) {
  const history = useHistory();
  const [recomendation, setRecomendation] = useState();
  const [doneRecipe, setDoneRecipe] = useState();
  const [inProgress, setInProgress] = useState();

  function doneRecipeToLS() {
    const drinkID = id;
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    today = `${dd}/${mm}/${yyyy}`;
    const detailObject = [{
      id: drinkID,
      type: 'drink',
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
        id: drinkID,
        type: 'meal',
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
      && JSON.parse(localStorage.inProgressRecipes).meals) {
      const foodsInProgressObject = Object.keys(
        JSON.parse(localStorage.inProgressRecipes).meals,
      );
      if (foodsInProgressObject.some((recipe) => recipe === drinkID)) {
        setInProgress(true);
      }
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
        { details ? <iframe
          width="355"
          height="320"
          data-testid="video"
          src={ `https://www.youtube.com/embed/${details[0].strYoutube.split('=')[1]}` }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> : '' }
        <FoodCarrossel recomendation={ recomendation } />
        <br />
        <button
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => doneRecipeToLS() }
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
  return (
    <div className="details-container">
      { details ? renderDetails() : 'Loading...'}
    </div>
  );
}

export default FoodDetailsCard;
FoodDetailsCard.propTypes = {
  details: PropTypes.func,
  mealIngredients: PropTypes.func,
  mealMeasure: PropTypes.func,
}.isRequired;
