import React, { useState } from 'react';
import clipboard from 'clipboard-copy';
import { Button } from 'react-bootstrap';
import imageShare from '../images/shareIcon.svg';

export default function ShareBtn() {
  const [visible, setVisible] = useState(true);

  const copyUrlToClipboard = () => {
    const time = 2000;
    clipboard(window.location.href);
    setVisible(false);

    setTimeout(() => setVisible(true), time);
  };

  return (
    <Button
      style={ { color: 'black' } }
      className="btnheader"
      type="button"
      data-testid="share-btn"
      onClick={ () => copyUrlToClipboard() }
    >
      {visible ? <img src={ imageShare } alt="share" /> : 'Link copiado!'}
    </Button>
  );
}
