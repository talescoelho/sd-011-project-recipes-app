import React from 'react';
import FavoriteIcon from '../images/whiteHeartIcon.svg';

function FavoriteBtn() {
  function btnClickHandler() {

  }

  return (
    <div>
      <button
        type="button"
        onClick={ btnClickHandler }
      >
        <img
          data-testid="favorite-btn"
          src={ FavoriteIcon }
          alt="icone Share"
        />
      </button>
    </div>
  );
}
export default FavoriteBtn;
