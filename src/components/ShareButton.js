import React from 'react';
import copy from 'clipboard-copy';
import { PropTypes } from 'prop-types';

export default function ShareButton({ setCopiedText }) {
  function copyUrl() {
    const seconds = 2000;
    setCopiedText(true);
    copy(window.location.href);
    setTimeout(() => {
      setCopiedText(false);
    }, seconds);
  }

  return (
    <button
      data-testid="share-btn"
      type="button"
      onClick={ copyUrl }
    >
      Share
    </button>
  );
}

ShareButton.propTypes = {
  setCopiedText: PropTypes.func,
}.isRequired;
