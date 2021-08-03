import React, { useState } from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton() {
  const [btnIsFavorited, setBtnIsFavorited] = useState(false);
  const [status, setStatus] = useState('despreenchido');

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      src={ btnIsFavorited ? blackHeartIcon : whiteHeartIcon }
      onClick={ () => {
        setBtnIsFavorited(!btnIsFavorited);
        if (status === 'despreenchido') setStatus('preenchido');
        if (status === 'preenchido') setStatus('despreenchido');
      } }
    >
      <img
        src={ btnIsFavorited ? blackHeartIcon : whiteHeartIcon }
        alt="whiteHeartIcon"
      />
    </button>
  );
}

export default FavoriteButton;
