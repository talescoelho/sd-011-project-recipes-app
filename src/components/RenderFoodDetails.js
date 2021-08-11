import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeAppContext from '../context/RecipeAppContext';
import '../css/RecipeDetails.css';

function RenderFoodDetails({ copyLink }) {
  const { shareIcon, bkHeart, meal } = useContext(RecipeAppContext);
  return (
    <div>
      <img
        data-testid="recipe-photo"
        alt={ meal.strMeal }
        src={ meal.strMealThumb }
        height="350px"
      />
      <div className="recipe-details-legend">
        <h3 data-testid="recipe-title">{ meal.strMeal }</h3>
        <input
          type="image"
          data-testid="share-btn"
          src={ shareIcon }
          alt="card da receita"
          onClick={ () => copyLink(meal.idMeal) }
        />
        <input
          type="image"
          alt="someText"
          data-testid="favorite-btn"
          src={ bkHeart }
        />
      </div>
      <p
        className="recipe-details-category"
        data-testid="recipe-category"
      >
        { meal.strCategory }
      </p>
    </div>
  );
}

RenderFoodDetails.propTypes = {
  copyLink: PropTypes.func.isRequired,
};

export default RenderFoodDetails;
