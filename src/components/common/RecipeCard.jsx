import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/components/recipeCard.css';

const RecipeCard = ({
  index,
  cardTestId,
  cardType,
  recipeId,
  recipeThumb,
  recipeName,
  titleTestId,
}) => (
  <Link
    aria-label="card-menu"
    className="card-menu"
    data-testid={ `${index}${cardTestId}` }
    to={ (cardType === 'comida') ? `/comidas/${recipeId}` : `/bebidas/${recipeId}` }
  >
    <img
      data-testid={ `${index}-card-img` }
      src={ recipeThumb }
      alt={ `${recipeName} recipe` }
    />
    <h3 data-testid={ `${index}${titleTestId}` }>{ recipeName }</h3>
  </Link>
);

RecipeCard.propTypes = {
  index: string,
  dataTestId: string,
  cardType: string,
  recipeId: string,
  recipeThumb: string,
  recipeName: string,
  titleTestId: string,
}.isRequired;

export default RecipeCard;
