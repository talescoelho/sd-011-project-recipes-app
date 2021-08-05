import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

// Para incluir o botão, basta chamar componente da seguinte forma:
// <ButtonShare path={ window.location.href } />
// Obs.: "window.location.href" pega a url toda

export default function ButtonShare({props}) {
  const [isCopied, setIsCopied] = useState(false);
  const path = props;
  const onClickButtonShare = () => {
    copy(path);
    setIsCopied(true);
  };

  return (
    <div style={ { display: 'flex' } }>
      <a
        data-testid="share-btn"
        type="button"
        onClick={ onClickButtonShare }
      >
        <img data-testid="food-bottom-btn" src={ shareIcon } alt="share icon" />
      </a>
      { isCopied && <p>Link copiado!</p>}
    </div>

  );
}

ButtonShare.propTypes = {
  path: PropTypes.string.isRequired,
};
