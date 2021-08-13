import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from './Buttons/ShareButton';
import FavoriteButton from './Buttons/FavoriteButton';

export default function FavoriteCard({ el, index }) {
  const { id, type, area, category, alcoholicOrNot, doneDate, name, image, tags } = el;
  const tagsArray = tags && Array.from(tags.toString().split(',').slice(0, 2));
  const url = window.location.href.replace(/\/receitas-favoritas/, `/${type}s/${id}`);

  return (
    <div className="done-container">
      <div className="product-details">
        <div className="d-flex col justify-content-center">
          <Link to={ `/${type}s/${id}` }>
            <h1 data-testid={ `${index}-horizontal-name` }>{name}</h1>
          </Link>
          <div>
            <ShareButton { ...{ index, url, el } } />
            <FavoriteButton { ...{ id, index } } />
          </div>
        </div>
        <p className="information">
          {tagsArray && tagsArray.map((tag, tagIndex) => (
            <span key={ tagIndex } data-testid={ `${index}-${tag}-horizontal-tag` }>
              {tag}
              {tagIndex === 0 ? ' - ' : ''}
            </span>))}
        </p>
        <p className="information" data-testid={ `${index}-horizontal-top-text` }>
          {area ? `${area} - ` : ''}
          {category ? `${category}` : ''}
          {' '}
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
        <Link to={ `/${type}s/${id}` }>
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt=""
          />
        </Link>

      </div>

    </div>

  );
}

FavoriteCard.propTypes = {
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
