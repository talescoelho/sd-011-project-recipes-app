import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { useLocation } from 'react-router-dom';
import { Button, Fade } from 'react-bootstrap';
import shareIcon from '../../../images/shareIcon.svg';

export default function CopyButton() {
  const [isMessageShowing, setisMessageShowing] = useState(false);

  const location = useLocation();

  const handleCopyBtn = () => {
    const id = location.pathname.split('/')[2];
    setisMessageShowing(true);
    if (location.pathname.includes('bebidas')) {
      copy(`http://localhost:3000/bebidas/${id}`);
    } else {
      copy(`http://localhost:3000/comidas/${id}`);
    }
  };
  return (
    <>
      <Fade in={ isMessageShowing }>
        <div>
          <span>Link copiado!</span>
        </div>
      </Fade>
      <Button
        variant="primary"
        className="rounded-circle p-2 mr-2"
        type="button"
        aria-controls="example-collapse-text"
        onClick={ handleCopyBtn }
        data-testid="share-btn"
      >
        <img alt="Botão de copiar link" src={ shareIcon } />
      </Button>
    </>
  );
}
