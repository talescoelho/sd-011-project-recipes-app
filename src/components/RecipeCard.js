import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({ recipe, index }) {
  return (
    <div
      key={ recipe.idMeal || recipe.idDrink }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
        alt={ recipe.strMeal || recipe.strDrink }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>
        { recipe.strMeal || recipe.strDrink }
      </p>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
