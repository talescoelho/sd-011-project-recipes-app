import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import BaseActionButton from './BaseActionButton';
import { useLocalStorage } from '../../../hooks';

const NOT_FOUND_INDEX = -1;
function FavoriteButton({ recipe, callback, index }) {
  const { id } = recipe;
  const {
    addFavoriteRecipe,
    getFavoriteRecipes,
    removeFavoriteRecipe,
  } = useLocalStorage();
  const [isFavorite, setIsFavorite] = useState();
  useEffect(() => {
    const indexOf = getFavoriteRecipes().findIndex((recipes) => recipes.id === id);
    setIsFavorite(indexOf !== NOT_FOUND_INDEX);
  }, [id, getFavoriteRecipes]);
  console.log(recipe);
  return (
    <BaseActionButton
      index={ index }
      reverse={ isFavorite }
      action="favorite"
      onClick={ () => {
        if (isFavorite) {
          removeFavoriteRecipe(id);
        } else {
          addFavoriteRecipe(recipe);
        }
        return callback();
      } }
    />
  );
}

FavoriteButton.propTypes = {
  callback: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteButton;
