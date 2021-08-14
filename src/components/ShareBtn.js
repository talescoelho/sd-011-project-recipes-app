import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ShareBtnIcon from '../images/shareIcon.svg';

function ShareBtn() {
  function btnClickHandler() {
    const link = window.location.href;
    alert('Link copiado!');
    return (
      <CopyToClipboard text={ link } />
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={ btnClickHandler() }
      >
        <img
          data-testid="share-btn"
          src={ ShareBtnIcon }
          alt="icone Share"
        />
      </button>
      <CopyToClipboard
        text={ window.location.href }
      >
        <span>Copy to clipboard with span</span>
      </CopyToClipboard>
    </div>
  );
}
export default ShareBtn;
