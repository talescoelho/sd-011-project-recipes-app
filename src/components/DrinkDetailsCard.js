import React from 'react';
import PropTypes from 'prop-types';
import ShareBtn from './FavoriteBtn';
import FavoriteBtn from './ShareBtn';

function DrinkDetailsCard({ details, mealIngredients, mealMeasure }) {
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
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
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
    </div>
  );
}

export default DrinkDetailsCard;
DrinkDetailsCard.propTypes = {
  details: PropTypes.func,
  mealIngredients: PropTypes.func,
  mealMeasure: PropTypes.func,
}.isRequired;
