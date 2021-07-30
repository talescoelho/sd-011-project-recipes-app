import PropTypes from 'prop-types';
import React from 'react';

export default function RecipeCardCocktail({ recipe, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <h1>{ index + 1 }</h1>
      <img
        src={ recipe.strDrinkThumb }
        alt={ recipe.strDrink }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{ recipe.strDrink}</p>
    </div>
  );
}

RecipeCardCocktail.propTypes = {
  index: PropTypes.isRequired,
  recipe: PropTypes.isRequired,
};
