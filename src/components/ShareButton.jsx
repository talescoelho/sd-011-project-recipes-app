import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import { PropTypes } from 'prop-types';

function ShareButton() {
  const [copiedLink, setCopiedLink] = React.useState(false);

  function copyUrl() {
    setCopiedLink(true);
  }

  return (
    <div>
      {copiedText ? (
        <p>Link copiado!</p>
      ) : (
        <button type="button" onClick={ copyUrl }>
          <img
            data-testid="share-btn" 
            src={ shareIcon }
            alt="compartilhar"
          />
        </button>
      )}
    </div>
  );
}

ShareButton.propTypes = {
  setCopiedText: PropTypes.func,
}.isRequired;

export default ShareButton;