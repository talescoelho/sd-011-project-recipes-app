import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeatIcon from '../images/blackHeartIcon.svg';

export default function DoneRecipeCard({
  index,
  recipe,
  isFavorited,
  handleLikeButtonClick,
}) {
  const [linkCopied, setLinkCopied] = useState(false);

  const url = recipe.type === 'comida'
    ? `/comidas/${recipe.id}`
    : `/bebidas/${recipe.id}`;

  const { tags } = recipe;

  function handleShareButtonClick() {
    copy(`http://localhost:3000${url}`);
    setLinkCopied(true);
  }

  return (
    <div>
      <div>
        <Link to={ url }>
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ recipe.image }
            alt=""
          />
        </Link>
      </div>

      <div>
        <div>
          <h3 data-testid={ `${index}-horizontal-top-text` }>
            {
              recipe.type === 'comida'
                ? `${recipe.area} - ${recipe.category}`
                : recipe.alcoholicOrNot
            }
          </h3>
          <Link to={ url }>
            <h1
              className="title"
              data-testid={ `${index}-horizontal-name` }
            >
              {recipe.name}
            </h1>
          </Link>
          <p data-testid={ `${index}-horizontal-done-date` }>
            { recipe.doneDate }

          </p>
          { tags.map((tag) => (
            <p
              key={ index }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>)) }
        </div>

        <div className="icon-buttons">
          <button
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ handleShareButtonClick }
            type="button"
            aria-label="share-icon"
            src={ shareIcon }
          >
            {linkCopied ? 'Link copiado!' : <img src={ shareIcon } alt="share-icon" /> }
          </button>

          <button
            data-testid={ `${index}-horizontal-favorite-btn` }
            type="button"
            aria-label="favorite-icon"
            onClick={ handleLikeButtonClick }
            src={ isFavorited ? blackHeatIcon : whiteHeartIcon }
          >
            <img
              src={ isFavorited
                ? blackHeatIcon
                : whiteHeartIcon }
              alt="favorited-icon"
            />
          </button>

        </div>
      </div>
    </div>
  );
}

DoneRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFavorited: PropTypes.bool.isRequired,
  handleLikeButtonClick: PropTypes.func.isRequired,
};
