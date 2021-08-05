import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ link }) {
  const [copy, setCopy] = useState(false);

  function shareLink() {
    setCopy(true);
    return navigator.clipboard.writeText(link);
  }

  return (
    <button
      type="button"
      data-testid="share-btn"
      onClick={ () => shareLink() }
    >
      {copy ? (
        <span>Link copiado!</span>
      ) : (<img src={ shareIcon } alt="Compartilhar" />)}
    </button>
  );
}

ShareButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ShareButton;
