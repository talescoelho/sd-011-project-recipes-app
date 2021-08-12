import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import BaseActionButton from './BaseActionButton';

const TOAST_TIMEOUT = 3000;

function ShareButton({ id, type }) {
  const [toastIsVisible, setToastIsVisible] = useState(false);

  function showToast() {
    setToastIsVisible(true);

    setTimeout(() => {
      setToastIsVisible(false);
    }, TOAST_TIMEOUT);
  }

  return (
    <>
      <BaseActionButton
        action="share"
        onClick={ () => {
          copy(`http://localhost:3000/${type}s/${id}`);
          showToast();
        } }
      />

      { toastIsVisible && (
        <div style={ { position: 'fixed', right: '25px', bottom: '25px' } }>
          <p>Link copiado!</p>
        </div>
      ) }
    </>
  );
}

export default ShareButton;

ShareButton.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['comida', 'bebida']).isRequired,
};
