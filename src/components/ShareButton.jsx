import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const timeout = 1000;

export default function ShareButton() {
  const history = useHistory();
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    copy(`http://localhost:3000${history.location.pathname}`);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), timeout);
  }
  return (
    <div>
      <button type="button" onClick={ () => handleClick() }>
        <img src={ shareIcon } alt="Share Icon" data-testid="share-btn" />
      </button>
      { showMessage && <span> Link copiado! </span> }
    </div>
  );
}
