import React, { useState } from 'react';
import clipboard from 'clipboard-copy';
import propTypes from 'prop-types';
import imageShare from '../../images/shareIcon.svg';

export default function ShareButton({ url, index }) {
  const [visible, setVisible] = useState(true);

  const copyUrlToClipboard = () => {
    const time = 2000;
    clipboard(url);
    setVisible(false);

    setTimeout(() => setVisible(true), time);
  };

  return (
    <button
      variant="primary"
      className="dr-share"
      type="button"
      onClick={ () => copyUrlToClipboard() }
    >
      {visible ? <img
        data-testid={ `${index}-horizontal-share-btn` }
        src={ imageShare }
        alt="share"
      /> : <p>Link copiado!</p>}
    </button>
  );
}

ShareButton.propTypes = {
  url: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
