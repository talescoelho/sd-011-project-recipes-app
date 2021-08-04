import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shareImage from '../images/shareIcon.svg';

import '../styles/RecipeConcluded.css';
import LinkCopy from './LinkCopy';

function RecipeConcluded({ recipe, index }) {
  const { id,
    type,
    area,
    category,
    alcoholicOrNot,
    tags,
    image,
    name,
    doneDate } = recipe;

  const history = useHistory();

  const HandleRedirect = (recipeId) => {
    if (type === 'comida') history.push(`comidas/${recipeId}`);
    if (type === 'bebida') history.push(`bebidas/${recipeId}`);
  };

  const handleShareBtn = () => {
    const DONE_RECIPES_LENGTH = -15;
    const url = window.location.href.slice(DONE_RECIPES_LENGTH);
    navigator.clipboard.writeText(url);
    return <LinkCopy />;
  };

  return (
    <div className="RecipeConcludedContainer">
      <img
        src={ image }
        alt="Recipe"
        data-testid={ `${index}-horizontal-image` }
        onClick={ () => HandleRedirect(id) }
        aria-hidden="true"
      />
      <div className="RecipeInfoConcluded">
        <span data-testid={ `${index}-horizontal-top-text` }>
          { type === 'comida' ? area : '' }
          { ' - ' }
          { type === 'comida' ? category : alcoholicOrNot }

        </span>
        <p
          className="RecipesFoodName"
          data-testid={ `${index}-horizontal-name` }
        >
          { name }
        </p>
        <p
          data-testid={ `${index}-horizontal-done-date` }
          className="doneDate"
        >
          Feita em:
          { doneDate }
        </p>
        <div className="tagContainer">
          { type === 'comida' && tags.length > 0 ? (
            tags.map((tagName, key) => (
              <p
                className="tagName"
                key={ key }
                data-testid={ `${index}-${tagName}-horizontal-tag` }
              >
                { tagName }
              </p>))
          ) : '' }
        </div>
        <button
          className="shareBTN"
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          onClick={ () => handleShareBtn() }
        >
          <img src={ shareImage } alt="Compartilhar" />
        </button>
      </div>
    </div>
  );
}

export default RecipeConcluded;
