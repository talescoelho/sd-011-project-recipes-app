import React from 'react';
import { PropTypes } from 'prop-types';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function FavoriteButton({ isFavorite, addFavorite, changeFavoriteIcon }) {
  function execFunctions() {
    addFavorite();
    changeFavoriteIcon();
  }
  return (
    <button onClick={ execFunctions } type="button">
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
  changeFavoriteIcon: PropTypes.func,
}.isRequired;
