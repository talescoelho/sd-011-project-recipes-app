import React from 'react';
import ShareBtnIcon from '../images/shareIcon.svg';

function ShareBtn() {
  function btnClickHandler() {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    window.alert('Link copiado!');
    return navigator.clipboard.writeText(link);
  }

  return (
    <div>
      <button
        type="button"
        onClick={ btnClickHandler }
      >
        <img
          data-testid="share-btn"
          src={ ShareBtnIcon }
          alt="icone Share"
        />
      </button>
    </div>
  );
}
export default ShareBtn;
