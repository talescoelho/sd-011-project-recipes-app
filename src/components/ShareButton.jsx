import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton({ index, foodOrDrink, id }) {
  const { copySuccess, setCopySuccess } = useContext(AppContext);

  const url = foodOrDrink === 'comidas' ? `http://localhost:3000/${foodOrDrink}/${id}` : `http://localhost:3000/${foodOrDrink}/${id}`;

  function copyLink() {
    const timeout = 3000;
    copy(url);
    setCopySuccess('Link copiado!');
    setTimeout(() => setCopySuccess(''), timeout);
  }
  console.log('id', id);
  console.log('url', url);

  return (
    <button type="button" data-testid="share-btn" onClick={ () => copyLink() }>
      <img
        src={ shareIcon }
        alt="Imagem do ícone de comportilhamento"
        data-testid={ `${index}-horizontal-share-btn` }
      />
      <p>{copySuccess}</p>
    </button>
  );
}

ShareButton.propTypes = {
  index: PropTypes.number.isRequired,
  foodOrDrink: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
