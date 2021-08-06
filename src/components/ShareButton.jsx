import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton() {
  const [copySuccess, setCopySuccess] = useState('');
  function copyLink() {
    const timeout = 3000;
    copy(window.location.href);
    setCopySuccess('Link copiado!');
    setTimeout(() => setCopySuccess(''), timeout);
  }
  return (
    <button type="button" data-testid="share-btn" onClick={ copyLink }>
      <img src={ shareIcon } alt="Imagem do ícone de comportilhamento" />
      <p>{copySuccess}</p>
    </button>
  );
}
