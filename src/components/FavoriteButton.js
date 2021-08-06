import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { saveFavorites } from '../helpers/handleLocalStorage';
import LSContext from '../context/LSContext';

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
  const { LSValues: { favoriteRecipes } } = useContext(LSContext);
  const { LSFunctions: { setFavoriteRecipes } } = useContext(LSContext);
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
    saveFavorites(recipe, setFavoriteRecipes);
  }

  return (
    <button type="button" onClick={ setFavorites }>
      <img
        src={ favoriteRecipes.some(
          (favorite) => {
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
