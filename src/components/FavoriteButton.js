import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { saveFavorites } from '../helpers/handleLocalStorage';

function FavoriteButton({ recipeData, type }) {
  const {
    strMeal,
    strDrink,
    strMealThumb,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strArea,
  } = recipeData;
  const favoriteRecipes = JSON.parse(
    localStorage.getItem('favoriteRecipes'),
  ) || [{ id: '' }];
  const [lsFavorite, setLsFavorite] = useState(favoriteRecipes);
  const id = recipeData.idMeal || recipeData.idDrink;

  function setFavorites() {
    const recipe = {
      id,
      type,
      area: strArea || '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic || '',
      name: strMeal || strDrink,
      image: strMealThumb || strDrinkThumb,
    };
    saveFavorites(recipe);
    setLsFavorite(JSON.parse(
      localStorage.getItem('favoriteRecipes'),
    ) || [{ id: '' }]);
  }

  return (
    <button type="button" onClick={ setFavorites }>
      <img
        src={ lsFavorite.some(
          (favorite) => {
            console.log(recipeData.id);
            return favorite.id === id;
          },
        ) ? blackHeartIcon : whiteHeartIcon }
        alt="Favorite"
        data-testid="favorite-btn"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  recipeData: PropTypes.shape(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
};

export default FavoriteButton;
