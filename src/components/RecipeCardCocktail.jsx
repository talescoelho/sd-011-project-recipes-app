import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCardCocktail({ recipe, index }) {
  return (
    <Link to={ `/bebidas/${recipe.idDrink}` }>
      <div data-testid={ `${index}-recipe-card` }>
        <img
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
          data-testid={ `${index}-card-img` }
        />
        <p data-testid={ `${index}-card-name` }>{ recipe.strDrink}</p>
      </div>
    </Link>
  );
}

RecipeCardCocktail.propTypes = {
  index: PropTypes.isRequired,
  recipe: PropTypes.isRequired,
};
