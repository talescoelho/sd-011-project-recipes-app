import React from 'react';
import shareIcon from '../images/shareIcon.svg';

function ShareButton() {
  return (
    <div>
      <img src={ shareIcon } alt="Botão Compatilhar" data-testid="share-btn" />
    </div>
  );
}

export default ShareButton;
