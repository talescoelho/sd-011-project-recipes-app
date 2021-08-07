import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import shareIcon from '../../../images/shareIcon.svg';

export default function CopyButton() {
  const [copyBtnText, setCopyBtnText] = useState('');

  const location = useLocation();

  const handleCopyBtn = () => {
    const id = location.pathname.split('/')[2];
    const TEXT = 'Link copiado!';
    if (location.pathname.includes('bebidas')) {
      copy(`http://localhost:3000/bebidas/${id}`);
      setCopyBtnText(TEXT);
    } else {
      copy(`http://localhost:3000/comidas/${id}`);
      setCopyBtnText(TEXT);
    }
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
