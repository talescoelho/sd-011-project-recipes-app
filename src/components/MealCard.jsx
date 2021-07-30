import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MealCard.css';

export default function MealCard({ recipe }) {
  return (
    <div className="meal-card" data-testid={ `${recipe.idMeal}-recipe-card` }>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        data-testid={ `${recipe.idMeal}-card-img` }
      />
      <p data-testid={ `${recipe.idMeal}-card-name` }>{ recipe.strMeal }</p>
    </div>
  );
}

MealCard.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};
