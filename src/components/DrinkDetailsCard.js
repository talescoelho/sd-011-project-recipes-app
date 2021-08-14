import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareBtn from './FavoriteBtn';
import FavoriteBtn from './ShareBtn';
import DrinkCarrossel from './DrinkCarrossel';
import FetchApi from '../services/ApiFetch';

function DrinkDetailsCard({ details, mealIngredients, mealMeasure, id }) {
  const history = useHistory();
  const [recomendation, setRecomendation] = useState();
  const [doneRecipe, setDoneRecipe] = useState();

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
      alcoholicOrNot: details[0].strDrinkAlternate,
      name: details[0].strDrink,
      image: details[0].strDrinkThumb,
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
        alcoholicOrNot: details[0].strDrinkAlternate,
        name: details[0].strDrink,
        image: details[0].strDrinkThumb,
        doneDate: today,
        tags: details[0].strTags,
      }];
      localStorage.doneRecipes = JSON.stringify(detailObject2);
    } else {
      localStorage.doneRecipes = JSON.stringify(detailObject);
    }
    history.push(`/bebidas/${id}/in-progress`);
  }

  useEffect(() => {
    async function getRecomendations() {
      const qty = 6;
      const response = await FetchApi('themealdb', 'nome', '');
      const recomendationsList = response.meals.slice(0, qty);
      setRecomendation(recomendationsList);
    }
    const drinkID = id;
    if (localStorage.doneRecipes
      && JSON.parse(localStorage.doneRecipes).some((recipe) => recipe.id === drinkID)) {
      setDoneRecipe(true);
    }
    getRecomendations();
  }, []);

  function renderDetails() {
    return (
      <div className="details-body">
        <img
          alt="logo"
          src={ details[0].strDrinkThumb }
          data-testid="recipe-photo"
          width="350px"
          height="300px"
        />
        <h3 data-testid="recipe-title">{ details[0].strDrink }</h3>
        <div className="details-btn-container">
          <ShareBtn />
          <FavoriteBtn />
        </div>
        <h4>
          Category:
          { details[0].strCategory }
        </h4>
        <h4 data-testid="recipe-category">{details[0].strAlcoholic}</h4>
        <h4>Ingredients:</h4>
        { mealIngredients ? mealIngredients.map((item, index) => (
          <h5
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            { `${item} - ${mealMeasure[index]}` }
          </h5>
        )) : '' }
        <h4>Instructions:</h4>
        <h5 data-testid="instructions">{ details[0].strInstructions }</h5>
      </div>
    );
  }
  return (
    <div className="details-container">
      { details ? renderDetails() : 'Loading...'}
      <DrinkCarrossel recomendation={ recomendation } />
      <button
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => doneRecipeToLS() }
        style={ { position: 'fixed',
          bottom: '0px',
          marginLeft: '60px',
          visibility: doneRecipe ? 'hidden' : 'visible',
        } }
      >
        Iniciar Receita
      </button>
    </div>
  );
}

export default DrinkDetailsCard;
DrinkDetailsCard.propTypes = {
  details: PropTypes.func,
  mealIngredients: PropTypes.func,
  mealMeasure: PropTypes.func,
}.isRequired;
