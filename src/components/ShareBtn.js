import React from 'react';
import ShareBtnIcon from '../images/shareIcon.svg';

function ShareBtn() {
  function btnClickHandler() {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    const x = 'Link copiado!';
    document.getElementById('alert').innerHTML = x;
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
      <p id="alert" />
    </div>
  );
}
export default ShareBtn;
