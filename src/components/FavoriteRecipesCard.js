import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

function FavoriteRecipesCard({ recipe, index }) {
  console.log(index);
  const {
    image,
    area,
    category,
    id,
    name,
    alcoholicOrNot,
    type,
  } = recipe;

  const recipeData = {
    image,
    area,
    category,
    id,
    name,
    alcoholicOrNot,
    type,
  };
  const path = type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}`;
  const categoryOrArea = area ? `${area} - ${category}` : alcoholicOrNot;
  const sliceNumber = -16;
  const SliceLink = (window.location.href).slice(0, sliceNumber);
  const pathLink = SliceLink.concat(path);
  return (
    <section>
      <div>
        <Link to={ path }>
          <img
            src={ image }
            alt={ name }
            data-testid={ `${index}-horizontal-image` }
            style={ { width: '100px' } }
          />
        </Link>
      </div>
      <div
        data-testid={ `${index}-recipe-card` }
      >

        <h5
          data-testid={ `${index}-horizontal-top-text` }
        >
          { categoryOrArea }
        </h5>
        <Link to={ path }>
          <h4
            data-testid={ `${index}-horizontal-name` }
          >
            { name }
          </h4>
        </Link>
        <div>
          <ShareButton link={ pathLink } index={ index } />
        </div>
        <div>
          <FavoriteButton recipeData={ recipeData } type={ type } index={ index } />
        </div>
      </div>

    </section>

  );
}

export default FavoriteRecipesCard;

FavoriteRecipesCard.propTypes = {
  recipe: PropTypes.shape(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
