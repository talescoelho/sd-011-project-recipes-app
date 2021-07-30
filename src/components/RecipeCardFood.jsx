import PropTypes from 'prop-types';
import React from 'react';

export default function RecipeCardFood({ recipe, index }) {
  console.log(recipe.strMealThumb);
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{ recipe.strMeal}</p>
    </div>
  );
}

RecipeCardFood.propTypes = {
  index: PropTypes.isRequired,
  recipe: PropTypes.isRequired,
};
