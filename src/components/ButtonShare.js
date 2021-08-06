import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

// Para incluir o botão, basta chamar componente da seguinte forma:
// <ButtonShare path={ window.location.href } testid={ COLOCAR O TESTID QUE O REQUISITO PEDE } />
// Obs.: "window.location.href" pega a url toda
// Obs2.: se quiserem colocar um path diferente da tela aberta, como da tela de detalhes, pode-se fazer assim:
// const href = window.location.origin;
// <ButtonShare path={ `${href}/comidas/${id}` } testid={ COLOCAR O TESTID QUE O REQUISITO PEDE } />
// Obs3.: O 'id' foi criado dinamicamente

export default function ButtonShare({props}) {
  const [isCopied, setIsCopied] = useState(false);
  // console.log(props);
  const testid = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (isCopied) {
      const SECONDS = 2000;
      setInterval(() => {
        setIsCopied(false);
      }, SECONDS);
    }
  }, [isCopied]);

  const onClickButtonShare = () => {
    copy(props);
    setIsCopied(true);
  };

  return (
    <div style={ { display: 'flex' } }>
      <a
        data-testid="share-btn"
        role="button"
        onKeyPress={ onClickButtonShare }
        tabIndex="0"
        onClick={ onClickButtonShare }
      >
        <img src={ shareIcon } alt="share icon" data-testid={ testid } />
      </a>
      { isCopied && <p>Link copiado!</p>}
    </div>

  );
}

ButtonShare.propTypes = {
  path: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
