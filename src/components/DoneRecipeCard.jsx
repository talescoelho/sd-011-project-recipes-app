import React from 'react';
import propTypes from 'prop-types';
import ShareButton from './Buttons/ShareButton';

export default function DoneRecipeCard({ el, index }) {
  const { id, type, area, category, alcoholicOrNot, doneDate, name, image, tags } = el;
  const tagsArray = Array.from(tags.toString().split(',').slice(0, 2));
  const url = window.location.href.replace(/\/receitas-feitas/, `/${type}s/${id}`);
  return (
    <div className="done-container">
      <div className="product-details">
        <div className="d-flex col justify-content-center">
          <h1 data-testid={ `${index}-horizontal-name` }>{name}</h1>
          <ShareButton { ...{ index, url } } />
        </div>
        <p className="information">
          {tagsArray.map((tag, tagIndex) => (
            <span key={ tagIndex } data-testid={ `${index}-${tag}-horizontal-tag` }>
              {tag}
              {tagIndex === 0 ? ' - ' : ''}
            </span>))}
        </p>
        <p className="information" data-testid={ `${index}-horizontal-top-text` }>
          {area ? `${area} - ` : ''}
          {category ? `${category}` : ''}
          {alcoholicOrNot}
        </p>
        <p
          className="information"
          data-testid={ `${index}-horizontal-done-date` }
        >
          {doneDate}

        </p>
      </div>
      <div className="product-image">
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt=""
        />

      </div>

    </div>

  );
}

DoneRecipeCard.propTypes = {
  el: propTypes.shape({
    id: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    area: propTypes.string,
    category: propTypes.string,
    alcoholicOrNot: propTypes.string,
    doneDate: propTypes.string,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
  }).isRequired,
  index: propTypes.number.isRequired,
};
