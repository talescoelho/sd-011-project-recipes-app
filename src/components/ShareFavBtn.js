import React from 'react';

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
      </button>
      <button data-testid="favorite-btn" type="button">Favoritar</button>
    </div>
  );
}
