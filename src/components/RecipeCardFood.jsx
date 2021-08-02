import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCardFood({ recipe, index }) {
  return (
    <Link to={ `/comidas/${recipe.idMeal}` }>
      <div data-testid={ `${index}-recipe-card` }>
        <img
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
          data-testid={ `${index}-card-img` }
        />
        <p data-testid={ `${index}-card-name` }>{ recipe.strMeal}</p>
      </div>
    </Link>
  );
}

RecipeCardFood.propTypes = {
  index: PropTypes.isRequired,
  recipe: PropTypes.isRequired,
};
