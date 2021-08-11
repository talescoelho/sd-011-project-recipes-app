import React from 'react';
import { string, number } from 'prop-types';
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
}) => {
  const choiceRoute = () => {
    if (cardType === 'comida') {
      return `/comidas/${recipeId}`;
    }
    if (cardType === 'bebida') {
      return `/bebidas/${recipeId}`;
    }
    if (cardType === 'explorar-comida') {
      return '/comidas';
    }
    if (cardType === 'explorar-bebida') {
      return '/bebidas';
    }
  };

  return (
    <Link
      aria-label="card-menu"
      className="card-menu"
      data-testid={ `${index}${cardTestId}` }
      to={ () => choiceRoute() }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ recipeThumb }
        alt={ `${recipeName} recipe` }
      />
      <h3 data-testid={ `${index}${titleTestId}` }>{ recipeName }</h3>
    </Link>
  );
};

RecipeCard.propTypes = {
  index: number.isRequired,
  cardTestId: string.isRequired,
  cardType: string,
  recipeId: string,
  recipeThumb: string,
  recipeName: string,
  titleTestId: string.isRequired,
};

RecipeCard.defaultProps = {
  cardType: null,
  recipeId: null,
  recipeThumb: undefined,
  recipeName: undefined,
};

export default RecipeCard;
