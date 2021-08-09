import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import shareIcon from '../../../images/shareIcon.svg';

export default function CopyButton() {
  const [copyBtnText, setCopyBtnText] = useState('');

  const location = useLocation();

  const handleCopyBtn = () => {
    setCopyBtnText('Link copiado!');
    copy(`http://localhost:3000${location.pathname}`);
  };
  return (
    <>
      <Button
        variant="primary"
        type="button"
        onClick={ handleCopyBtn }
        data-testid="share-btn"
      >
        <img alt="Botão de copiar link" src={ shareIcon } />
      </Button>
      <br />
      <span>{copyBtnText}</span>
    </>
  );
}
