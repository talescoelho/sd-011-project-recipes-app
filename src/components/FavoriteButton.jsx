import React from 'react';
import { PropTypes } from 'prop-types';
import whiteHeart from '../images/whiteHeartIcon.svg';

function FavotiteButton({ addFavorite }) {
  function Favorite() {
    addFavorite();
  }
  
    return (
    <button onClick={ Favorite } type="button">
      <img
        data-testid="favorite-btn"
        src={ whiteHeart }
        alt="favoritado"
      />
    </button>
  );
}

FavotiteButton.propTypes = {  
  addFavorite: PropTypes.func,
}.isRequired;

export default FavotiteButton;