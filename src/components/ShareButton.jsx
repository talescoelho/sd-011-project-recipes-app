import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const timeout = 1000;

export default function ShareButton({ id, type, dataTestid }) {
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    copy(`http://localhost:3000/${type}s/${id}`);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), timeout);
  }
  return (
    <div>
      <button type="button" onClick={ () => handleClick() }>
        <img src={ shareIcon } alt="Share Icon" data-testid={ dataTestid } />
      </button>
      { showMessage && <span> Link copiado! </span> }
    </div>
  );
}

ShareButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

//  data-testid="share-btn"
