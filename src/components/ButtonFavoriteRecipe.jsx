import React from 'react';
import { useLocation } from 'react-router-dom';

import WhiteHeart from '../images/whiteHeartIcon.svg';
import BlackHeart from '../images/blackHeartIcon.svg';

function ButtonFavoriteRecipe({ recipes, favorite, setFavorite}) {
  const location = useLocation();
  const { id, type, area, category, strAlcoholic, title, imgUrl } = recipes;
  const createFavoriteObject = () => {
    let favoriteRecipeObj = {};
    if (location.pathname.includes('comidas')) {
      favoriteRecipeObj = {
        id,
        type: 'comida',
        area,
        category,
        alcoholicOrNot: '',
        name: title,
        image: imgUrl,
      };
    }
    if (location.pathname.includes('bebidas')) {
      favoriteRecipeObj = {
        id,
        type: 'bebida',
        area: '',
        category,
        alcoholicOrNot: strAlcoholic,
        name: title,
        image: imgUrl,
      };
    }
    return favoriteRecipeObj;
  };

  const favoriteRecipe = createFavoriteObject();

  const handleFavoriteBtn = () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    const parsedLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favorite) {
      setFavorite(true);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...parsedLocalStorage,
        favoriteRecipe]));
    }
    if (favorite) {
      setFavorite(false);
      const favoriteRecipeArr = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const removeRecipe = favoriteRecipeArr.filter((recipe) => recipe.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify([removeRecipe]));
    }
  };

  return (
    <button
      type="button"
      onClick={ () => { handleFavoriteBtn(); } }
    >
      { favorite ? <img
        src={ BlackHeart }
        alt="favorite"
        data-testid="favorite-btn"
      /> : <img src={ WhiteHeart } alt="Nonfavorite" data-testid="favorite-btn" /> }
    </button>
  );
}

export default ButtonFavoriteRecipe;
