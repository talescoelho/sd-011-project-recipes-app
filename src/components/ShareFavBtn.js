import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

export default function ShareFavBtn({ url }) {
  return (
    <div>
      <input
        type="image"
        data-testid="share-btn"
        src={ shareIcon }
        alt="card da receita"
        onClick={ () => {
          copy(url);
          alert('Link copiado!');
        } }
      />
      <input
        type="image"
        alt="someText"
        data-testid="favorite-btn"
        src={ whiteHeartIcon }
      />
    </div>
  );
}
