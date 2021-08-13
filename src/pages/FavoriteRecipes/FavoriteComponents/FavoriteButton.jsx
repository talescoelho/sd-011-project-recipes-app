import PropTypes from 'prop-types';
import React from 'react';
import whiteHeart from '../../../images/whiteHeartIcon.svg';
import blackHeart from '../../../images/blackHeartIcon.svg';

function FavoriteButton({ index, id, setFavoriteStr }) {
  const [favorite, setFavorite] = React.useState(true);

  const favoriteBttnHandle = (param) => {
    setFavorite(false);
    const prevFavoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newFavoriteStorage = prevFavoriteStorage && prevFavoriteStorage
      .filter((storage) => storage.id !== param);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteStorage));
    setFavoriteStr(newFavoriteStorage);
  };

  return (
    <button
      type="button"
      onClick={ () => favoriteBttnHandle(id) }
    >
      <img
        src={ !favorite ? whiteHeart : blackHeart }
        alt="share"
        data-testid={ `${index}-horizontal-favorite-btn` }
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setFavoriteStr: PropTypes.func.isRequired,
};

export default FavoriteButton;
