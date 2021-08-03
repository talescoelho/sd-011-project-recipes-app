import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function FavoriteButton({ items, addFavorite }) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const { idReceita, type, data, foodType } = items;

  function verifyFavoriteExistsOnLocalStorage(id) {
    const favoriteExists = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteExists && favoriteExists.find((revenue) => (
      revenue.id === id
    ))) {
      setIsFavorite(true);
    }
  }

  useEffect(() => {
    verifyFavoriteExistsOnLocalStorage(idReceita);
  }, [idReceita, isFavorite]);

  return (
    <button
      onClick={ () => {
        addFavorite(idReceita, type, data, foodType);
        setIsFavorite(!isFavorite);
      } }
      type="button"
    >
      <img
        data-testid="favorite-btn"
        src={ isFavorite ? blackHeart : whiteHeart }
        alt="coração preenchido"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  addFavorite: PropTypes.func,
}.isRequired;
