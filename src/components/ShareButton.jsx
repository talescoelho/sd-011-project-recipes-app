import React from 'react';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareButton() {
  function copyURL() {

  }
  return (
    <input
      type="image"
      src={ shareIcon }
      alt="Icone share"
      data-testid="share-btn"
      onClick={ copyURL }
    />
  );
  // button.addEventListener('click', function () {
  //   copy('This is some cool text')
  // })
}

export default ShareButton;
