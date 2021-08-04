import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({ recipe }) {
  return (
    <div
      key={ index }
      data-testid={ `${index}-recomendation-card` }
    >
      <img
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
        alt={ recipe.strMeal || recipe.strDrink }
      />
      <h2 data-testid={ `${index}-recomendation-title` }>
        { recipe.strMeal || recipe.strDrink }
      </h2>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default RecipeCard;
