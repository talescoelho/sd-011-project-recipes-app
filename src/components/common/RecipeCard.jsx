import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeCard = ({
  cardType,
  dataTestId,
  index,
  recipeId,
  recipeThumb,
  recipeName,
}) => (
  <Link
    aria-label="card-menu"
    data-testid={ `${index}${dataTestId}` }
    key={ index }
    to={ (cardType === 'comida') ? `/comidas/${recipeId}` : `/bebidas/${recipeId}` }
  >
    <img
      data-testid={ `${index}-card-img` }
      src={ recipeThumb }
      alt={ `${recipeName} recipe` }
      width="100px"
    />
    <h3 data-testid={ `${index}-card-name` }>{ recipeName }</h3>
  </Link>
);

RecipeCard.propTypes = {
  cardType: string,
  dataTestId: string,
  index: string,
  recipeId: string,
  recipeThumb: string,
  recipeName: string,
}.isRequired;

export default RecipeCard;
