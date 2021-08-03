import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/MealCard.css';

export default function MealCard({ recipe, i }) {
  const location = useLocation();
  return (
    <div className="meal-card" data-testid={ `${i}-recipe-card` }>
      <Link to={ `${location.pathname}/${recipe.idMeal}` }>
        <img
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
          data-testid={ `${i}-card-img` }
        />
        <p data-testid={ `${i}-card-name` }>{ recipe.strMeal }</p>
      </Link>
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
