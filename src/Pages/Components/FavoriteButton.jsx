import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {verifyFavoritesDrink, verifyFavoritesFood} from '../../Helpers/VerifyFavorites';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

export default function FavoriteButton({ currentItem, typeOf }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  function verifyIfIsFavorite() {
    const currentFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

    setIsFavorite(currentFavoriteRecipes.some((any) => any.id === id));
  }

  useEffect(() => {
    const currentFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!currentFavoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    verifyIfIsFavorite();
  }, []);

  function toggleFavorite() {
    const currentFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (typeOf === 'Drink') {
      verifyFavoritesDrink(currentItem, id, currentFavoriteRecipes);
    }
    if (typeOf === 'Meal') {
      verifyFavoritesFood(currentItem, id, currentFavoriteRecipes);
    }
    verifyIfIsFavorite();
  }

  return (
    <button type="button" onClick={ () => toggleFavorite() } data-testid="favorite-btn">
      <img
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="Botão de receita favorita"
      />
    </button>
  );
}
