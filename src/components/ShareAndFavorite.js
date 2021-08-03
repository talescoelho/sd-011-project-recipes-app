import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function ShareAndFavorite({
  favorite,
  share, testFavorite, testShare, comidasOuBebidas, id, linkCopiado, setCopy }) {
  const [favorited, setFavorited] = useState(false);
  return (
    <div>
      {favorite && (
        <button
          type="button"
          src={ favorited ? blackHeartIcon : whiteHeartIcon }
          onClick={ () => setFavorited(!favorited) }
          data-testid={ testFavorite }
        >
          <img src={ favorited ? blackHeartIcon : whiteHeartIcon } alt="heart" />
        </button>
      )}
      {share && (
        <button
          type="button"
          src={ shareIcon }
          data-testid={ testShare }
          onClick={ () => {
            copy(`http://localhost:3000/${comidasOuBebidas}/${id}`);
            setCopy(true);
          } }
        >
          <img src={ shareIcon } alt="heart" />
        </button>
      )}
      {linkCopiado && (<p>Link copiado!</p>)}
    </div>
  );
}

ShareAndFavorite.propTypes = {
  comidasOuBebidas: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  linkCopiado: PropTypes.bool.isRequired,
  setCopy: PropTypes.func.isRequired,
  share: PropTypes.bool.isRequired,
  testFavorite: PropTypes.string.isRequired,
  testShare: PropTypes.string.isRequired,
};

export default ShareAndFavorite;
