import PropTypes from 'prop-types';
import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

export default function ShareFavBtn({ type, id }) {
  function shareFood() {
    switch (type) {
    case 'comida':
      copy(`http://localhost:3000/comidas/${id}`);
      alert('Link copiado!');
      break;
    case 'bebida':
      copy(`http://localhost:3000/bebidas/${id}`);
      alert('Link copiado!');
      break;
    default:
      alert('Link não copiado');
    }
  }
  return (
    <div>
      <button type="button" onClick={ () => shareFood() } data-testid="share-btn">
        <img src={ shareIcon } alt="shareBtn" />
      </button>
      <button type="button" data-testid="favorite-btn">
        <img src={ whiteHeartIcon } alt="favBtn" />
      </button>
    </div>
  );
}

ShareFavBtn.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
