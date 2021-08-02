import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({ recipe, index }) {
  const { strDrink, strDrinkThumb, strMeal, strMealThumb } = recipe;
  const title = strDrink || strMeal;
  const thumb = strDrinkThumb || strMealThumb;
  return (
    <div
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ thumb }
        alt={ title }
        data-testid={ `${index}-card-img` }
      />
      <h4
        data-testid={ `${index}-card-name` }
      >
        { title }
      </h4>
    </div>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.shape(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
