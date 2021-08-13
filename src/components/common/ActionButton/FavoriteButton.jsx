import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import BaseActionButton from './BaseActionButton';
import { useLocalStorage } from '../../../hooks';

const NOT_FOUND_INDEX = -1;
function FavoriteButton({ recipe, callback, index }) {
  const { idMeal, idDrink } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);
  const id = idMeal || idDrink;

  const {
    addFavoriteRecipe,
    getFavoriteRecipes,
    removeFavoriteRecipe,
  } = useLocalStorage();

  useEffect(() => {
    const indexOf = getFavoriteRecipes().findIndex((recipes) => recipes.id === id);
    setIsFavorite(indexOf !== NOT_FOUND_INDEX);
  }, [id, getFavoriteRecipes]);
  return (
    <BaseActionButton
      index={ index }
      reverse={ isFavorite }
      action="favorite"
      onClick={ () => {
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
