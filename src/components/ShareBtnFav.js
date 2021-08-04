import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareBtn(url, index) {
  const handleClick = () => {
    copy(`http://localhost:3000/${url}`);
    alert('Link copiado!');
  };

  return (
    <div>
      <button
        type="button"
        onClick={ handleClick }
      >
        <img
          src={ shareIcon }
          data-testid={ `${index}-horizontal-share-btn` }
          alt="share icon"
        />
      </button>
    </div>

  );
}

ShareBtn.propTypes = {
  url: PropTypes.object,
}.isRequired;

export default ShareBtn;
