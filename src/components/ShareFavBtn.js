import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

export default function ShareFavBtn({ url }) {
  return (
    <div>
      <button
        data-testid="share-btn"
        type="button"
        onClick={ () => {
          copy(url);
          alert('Link copiado!');
        } }
      >
        Compartilhar
        <input
          type="image"
          data-testid="share-btn"
          src={ shareIcon }
          alt="card da receita"
        />
      </button>
      <button data-testid="favorite-btn" type="button">Favoritar</button>
      <input
        type="image"
        alt="someText"
        data-testid="favorite-btn"
        src={ blackHeartIcon }
      />
    </div>
  );
}
