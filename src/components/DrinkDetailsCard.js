import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShareBtn from './FavoriteBtn';
import FavoriteBtn from './ShareBtn';
import DrinkCarrossel from './DrinkCarrossel';
import FetchApi from '../services/ApiFetch';

function DrinkDetailsCard({ details, mealIngredients, mealMeasure }) {
  const [recomendation, setRecomendation] = useState();

  useEffect(() => {
    async function getRecomendations() {
      const qty = 6;
      const response = await FetchApi('themealdb', 'nome', '');
      const recomendationsList = response.meals.slice(0, qty);
      setRecomendation(recomendationsList);
    }
    getRecomendations();
  }, []);

  function renderDetails() {
    return (
      <div className="details-body">
        <img alt="logo" src={ details[0].strDrinkThumb } data-testid="recipe-photo" />
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
    </div>
  );
}

export default DrinkDetailsCard;
DrinkDetailsCard.propTypes = {
  details: PropTypes.func,
  mealIngredients: PropTypes.func,
  mealMeasure: PropTypes.func,
}.isRequired;
