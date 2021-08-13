import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BaseActionButton from './BaseActionButton';
import { useLocalStorage } from '../../../hooks';

const NOT_FOUND_INDEX = -1;
function FavoriteButton({ recipe, callback }) {
  const { idMeal, idDrink } = recipe;
  const id = idMeal || idDrink;
  const {
    addFavoriteRecipe,
    getFavoriteRecipes,
    removeFavoriteRecipe,
  } = useLocalStorage();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const index = getFavoriteRecipes().findIndex((recipes) => recipes.id === id);
    setIsFavorite(index !== NOT_FOUND_INDEX);
  }, [id, getFavoriteRecipes]);

  return (
    <BaseActionButton
      reverse={ isFavorite }
      action="favorite"
      onClick={ () => {
        if (isFavorite) {
          removeFavoriteRecipe(id);
        } else {
          let newFavoriteRecipe;

          if (idMeal) {
            newFavoriteRecipe = {
              id: recipe.idMeal,
              type: 'comida',
              area: recipe.strArea,
              category: recipe.strCategory,
              alcoholicOrNot: '',
              name: recipe.strMeal,
              image: recipe.strMealThumb,
            };
          } else {
            newFavoriteRecipe = {
              id: recipe.idDrink,
              type: 'bebida',
              area: '',
              category: recipe.strCategory,
              alcoholicOrNot: recipe.strAlcoholic,
              name: recipe.strDrink,
              image: recipe.strDrinkThumb,
            };
          }
          addFavoriteRecipe(newFavoriteRecipe);
        }
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        callback();
      } }
    />
  );
}

FavoriteButton.defaultProps = {
  callback: () => {},
};

FavoriteButton.propTypes = {
  recipe: PropTypes.oneOf([PropTypes.shape({
    idMeal: PropTypes.string,
    strArea: PropTypes.string,
    strCategory: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }), PropTypes.shape({
    idDrink: PropTypes.string,
    strCategory: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strAlcoholic: PropTypes.string,
  })]).isRequired,
  callback: PropTypes.func,
};

export default FavoriteButton;
