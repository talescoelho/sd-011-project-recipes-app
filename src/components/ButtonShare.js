import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

// Para incluir o botão, basta chamar componente da seguinte forma:
// <ButtonShare path={ window.location.href } />
// Obs.: "window.location.href" pega a url toda

export default function ButtonShare(props) {
  const [isCopied, setIsCopied] = useState(false);
  const { path } = props;

  useEffect(() => {
    if (isCopied) {
      const SECONDS = 2000;
      setInterval(() => {
        setIsCopied(false);
      }, SECONDS);
    }
  }, [isCopied]);

  const onClickButtonShare = () => {
    copy(path);
    setIsCopied(true);
  };

  return (
    <div style={ { display: 'flex' } }>
      <div
        data-testid="share-btn"
        role="button"
        onKeyPress={ onClickButtonShare }
        tabIndex="0"
        onClick={ onClickButtonShare }
      >
        <img src={ shareIcon } alt="share icon" />
      </div>
      { isCopied && <p>Link copiado!</p>}
    </div>

  );
}

ButtonShare.propTypes = {
  path: PropTypes.string.isRequired,
};
