import React from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteButton({ id }) {
  const favoriteRecipes = JSON.parse(
    localStorage.getItem('favoriteRecipes'),
  ) || [{ id: '' }];

  return (
    <button type="button">
      <img
        src={ favoriteRecipes.some(
          (favorite) => favorite.id === id,
        ) ? blackHeartIcon : whiteHeartIcon }
        alt="Favorite"
        data-testid="favorite-btn"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FavoriteButton;
