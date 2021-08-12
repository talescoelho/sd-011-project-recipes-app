import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteButton({ recipe, dataTestid }) {
  const [isFavorite, setFavorite] = useState(false);
  const { id, type, category, name, image, area } = recipe;

  useEffect(() => {
    if (!localStorage.favoriteRecipes) {
      localStorage.setItem('favoriteRecipes', '[]');
    }
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const verifyFav = favoriteRecipes.some((e) => e.id === id);
    setFavorite(verifyFav);
  }, [setFavorite, type, recipe, id]);

  function handleHeart() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const verifyFav = favoriteRecipes.reduce((acc, cur) => {
      if (cur.id !== id) {
        return [...acc, cur];
      }
      return acc;
    }, []);
    const newFavorite = {
      id,
      type,
      area: (type === 'comida') ? area : '',
      category: (type === 'comida') ? category : 'Cocktail',
      alcoholicOrNot: (type === 'comida') ? '' : category,
      name,
      image,
    };
    const favorites = (isFavorite) ? verifyFav : [...verifyFav, newFavorite];
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setFavorite(!isFavorite);
  }

  return (
    <div>
      <button className="neutral-button" type="button" onClick={ () => handleHeart() }>
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="Favourite Button"
          data-testid={ dataTestid }
        />
      </button>
    </div>);
}

FavoriteButton.propTypes = {
  recipe: PropTypes.isRequired,
  dataTestid: PropTypes.string.isRequired,
};
