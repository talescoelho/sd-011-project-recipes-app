import React from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteButtons(callBack, isFavorite) {
  return (
    <div>
      <button
        type="button"
        onClick={ () => callBack() }
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="favorite icon"
          data-testid="favorite-btn"
        />
      </button>
      <button
        type="button"
        onClick={ () => callBack() }
      >
        Favoritar
      </button>
    </div>
  );
}
