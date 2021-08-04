import React from 'react';
import copy from 'clipboard-copy';
import { PropTypes } from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ dataTestId = 'share-btn', urlLink = window.location.href }) {
  const [copiedText, setCopiedText] = React.useState(false);
  function copyUrl() {
    setCopiedText(true);
    const location = urlLink.split('/');
    if (location[location.length - 1] === 'in-progress') {
      location.pop();
    }
    copy(location.join('/'));
  }

  return (
    <div>
      {copiedText ? (
        <span data-testid="share-btn">Link copiado!</span>
      ) : (
        <button
          className="remove-favorite-btn"
          data-testid={ dataTestId }
          type="button"
          onClick={ copyUrl }
          src={ shareIcon }
        >
          <img src={ shareIcon } alt="share icon" />
        </button>
      )}
    </div>
  );
}

ShareButton.propTypes = {
  setCopiedText: PropTypes.func,
}.isRequired;

export default ShareButton;
