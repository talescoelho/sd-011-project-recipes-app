import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareImage from '../images/shareIcon.svg';

import '../styles/RecipeConcluded.css';
import LinkCopy from './LinkCopy';

function RecipeConcluded({ recipe, index }) {
  const [linkCopy, setLinkCopy] = useState(false);
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

  const handleShareBtn = (recipeType, recipeId) => {
    const hostURL = window.location.host;
    if (recipeType === 'comida') {
      navigator.clipboard.writeText(`${hostURL}/comidas/${recipeId}`);
    }
    if (recipeType === 'bebida') {
      navigator.clipboard.writeText(`${hostURL}/bebidas/${recipeId}`);
    }
    return <LinkCopy />;
  };

  const handleLinkMessage = () => {
    setLinkCopy(true);
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
          onClick={ () => { handleShareBtn(type, id); handleLinkMessage(); } }
        >
          <img src={ shareImage } alt="Compartilhar" />
        </button>
        { linkCopy && <LinkCopy /> }
      </div>
    </div>
  );
}

RecipeConcluded.propTypes = {
  recipe: PropTypes.objectOf(String),
  index: PropTypes.number,
}.isRequired;

export default RecipeConcluded;
