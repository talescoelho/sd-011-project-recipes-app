import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';

export default function DoneRecipeCard({ recipe, key }) {
  return (
    <Link to={ `/${recipe.type}/${recipe.id}` }>
      <div data-testid={ `${key}-recipe-card` }>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${key}-horizontal-image` }
        />
        <p data-testid={ `${key}-horizontal-top-text` }>{ recipe.area }</p>
        <p data-testid={ `${key}-horizontal-name` }>{ recipe.name }</p>
        <p data-testid={ `${key}-horizontal-done-date` }>{ recipe.doneData }</p>
        <ShareButton
          data-testid={ `${key}-horizontal-share-btn` }
          type={ recipe.type }
          id={ recipe.id }
        />
        <ol>
          {
            recipe.tags.map((element, index) => (
              <li
                key={ index }
                data-testid={ `${index}-${element}-horizontal-tag` }
              >
                { element }
              </li>
            ))
          }
        </ol>

      </div>
    </Link>
  );
}

DoneRecipeCard.propTypes = {
  key: PropTypes.isRequired,
  recipe: PropTypes.isRequired,
};
