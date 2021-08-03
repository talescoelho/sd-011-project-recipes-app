import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton() {
  const history = useHistory();
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    clipboardCopy(`http://localhost:3000${history.location.pathname}`);
    setShowMessage(true);
  }
  return (
    <div>
      <button type="button" onClick={ () => handleClick() }>
        <img src={ shareIcon } alt="Share Icon" data-testid="share-btn" />
      </button>
      { showMessage ? <span> Link copiado! </span> : '' }
    </div>
  );
}
