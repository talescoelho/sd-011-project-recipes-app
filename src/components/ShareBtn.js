import React from 'react';
import ShareBtnIcon from '../images/shareIcon.svg';

function ShareBtn() {
  function btnClickHandler() {

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
