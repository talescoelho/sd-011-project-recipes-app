import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareImage from '../images/shareIcon.svg';

import '../styles/RecipeConcluded.css';

function RecipeFavorite({ recipe, index }) {
  const { id, type, area, category, alcoholicOrNot, tag, image, name, doneDate } = recipe;

  const history = useHistory();

  const HandleRedirect = (recipeId) => {
    if (type === 'comida') history.push(`comidas/${recipeId}`);
    if (type === 'bebida') history.push(`bebidas/${recipeId}`);
  };

  const handleShareBtn = () => {
    const DONE_RECIPES_LENGTH = -15;
    const url = window.location.href.slice(DONE_RECIPES_LENGTH);
    navigator.clipboard.writeText(url);
    return alert('Link copiado');
  };

  return (
    <div
      className="RecipeFavoritedContainer"
      aria-hidden="true"
      onClick={ () => HandleRedirect(id) }
    >
      <img src={ image } alt="Recipe" data-testid={ `${index}-horizontal-image` } />
      <div className="RecipeInfoConcluded">
        <span>
          { type === 'comida' ? area : '' }
        </span>
        <span data-testid={ `${index}-horizontal-top-text` }>
          { type === 'comida' ? category : alcoholicOrNot }
        </span>
        <p
          className="RecipesFoodName"
          data-testid={ `${index}-horizontal-name` }
        >
          { name }
        </p>
        <p data-testid={ `${index}-horizontal-done-date` }>
          Feita em:
          { doneDate }
        </p>
        <p data-testid={ `${index}-${'teste'}-horizontal-tag` }>
          { type === 'comida' ? tag : '' }
        </p>
        <button
          type="button"
          onClick={ () => handleShareBtn() }
        >
          <img
            src={ shareImage }
            alt="Compartilhar"
            data-testid={ `${index}-horizontal-share-btn` }
          />
        </button>
      </div>
    </div>
  );
}

RecipeFavorite.propTypes = {
  recipe: PropTypes.objectOf(String).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeFavorite;
