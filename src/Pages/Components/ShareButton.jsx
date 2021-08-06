import React from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

function ShareButton() {
  const [showCopy, setShowCopy] = React.useState(false);
  function copyToClipBoard() {
    copy(`http://localhost:3000${window.location.pathname}`);
    setShowCopy(true);
  }
  return (
    <>
      <button type="button" data-testid="share-btn" onClick={ () => copyToClipBoard() }>
        <img
          src={ shareIcon }
          alt="Botão compartilhar"
        />
      </button>
      { showCopy && <p>Link copiado!</p> }
    </>
  );
}

export default ShareButton;
