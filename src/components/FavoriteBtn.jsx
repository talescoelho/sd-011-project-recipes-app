import React from 'react';
import imageHeart from '../images/whiteHeartIcon.svg';

export default function FavoriteBtn() {
  return (
    <div>
      <button
        className="btnheader"
        type="button"
        data-testid="favorite-btn"
      >
        <img data-testid="favorite-btn" src={ imageHeart } alt="favorite" />
      </button>
    </div>
  );
}
