import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function DetailsFavoriteButton({ id }) {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if ((favorites !== null)) {
      setFavorited(true);
    }
  }, [id]);

  return (
    <button
      type="button"
    >
      <img
        src={ (favorited) ? blackHeartIcon : whiteHeartIcon }
        alt="blackHeartIcon"
        data-testid="favorite-btn"
      />
    </button>
  );
}

DetailsFavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailsFavoriteButton;
