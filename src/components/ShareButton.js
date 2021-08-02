import React from 'react';
import copy from 'clipboard-copy';
import { PropTypes } from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton() {
  const [copiedText, setCopiedText] = React.useState(false);

  function copyUrl() {
    setCopiedText(true);
    copy(window.location.href);
  }

  return (
    <div>
      {copiedText ? (
        <p>Link copiado!</p>
      ) : (
        <button data-testid="share-btn" type="button" onClick={ copyUrl }>
          <img src={ shareIcon } alt="share icon" />
        </button>
      )}
    </div>
  );
}

ShareButton.propTypes = {
  setCopiedText: PropTypes.func,
}.isRequired;
