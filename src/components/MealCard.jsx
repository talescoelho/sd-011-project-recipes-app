import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MealCard.css';

export default function MealCard({ recipe, i }) {
  return (
    <div className="meal-card" data-testid={ `${i}-recipe-card` }>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        data-testid={ `${i}-card-img` }
      />
      <p data-testid={ `${i}-card-name` }>{ recipe.strMeal }</p>
    </div>
  );
}

MealCard.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
  i: PropTypes.number.isRequired,
};
