import React from 'react';
import { PropTypes } from 'prop-types';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function FavoriteButton({ isFavorite, addFavorite }) {
  return (
    <button onClick={ addFavorite } type="button">
      <img
        data-testid="favorite-btn"
        src={ isFavorite ? blackHeart : whiteHeart }
        alt="coração preenchido"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  addFavorite: PropTypes.func,
}.isRequired;
