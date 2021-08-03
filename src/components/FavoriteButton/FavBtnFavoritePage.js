import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '.../image/whiteHeartIcon.svg';
import blackHeartIcon from '.../images/blackHeartIcon.svg';

const mountObject = (data, recipeType) => {
  const myObject = {
    id: recipeType.id,
    type: recipeType.type,
    area: recipeType.area,
    alcoholicOrNot: recipeType.alcoholicOrNot,
    name: recipeType.name,
    image: recipeType.image,
    category: data.category,
  };
  return myObject;
};

function FavBtn({ data, recipeType }) {
  const [render, setRender] = useState(false);

  const id = recipeType === 'meals' ? data.id : data.id;
  const addFavorite = () => {
    const recipeInfo = mountObject(data, recipeType);
    if (localStorage.favoriteRecipes) {
      const favorites = JSON.parse(localStorage.favoriteRecipes);
      const newFavorites = [...favorites, recipeInfo];
      localStorage.favoriteRecipes = JSON.stringify(newFavorites);
      setRender(!render);
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify([recipeInfo]));
      setRender(!render);
    }
  };

  const removeFavorite = () => {
    const favorites = JSON.parse(localStorage.favoriteRecipes);
    const newFavorites = favorites.filter((recipe) => recipe.id !== id);
    localStorage.favoriteRecipes = JSON.stringify(newFavorites);
    setRender(!render);
  };

  if (!localStorage.favoriteRecipes
    || !(JSON.parse(localStorage.favoriteRecipes)).find((recipe) => recipe.id === id)) {
    return (
      <button type="button" onClick={ addFavorite }>
        <img src={ whiteHeartIcon } data-testid="favorite-btn" alt="favorite icon" />
      </button>
    );
  }
  return (
    <button type="button" onClick={ removeFavorite }>
      <img src={ blackHeartIcon } data-testid="favorite-btn" alt="favorite icon" />
    </button>
  );
}

FavBtn.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
}.isRequired;

export default FavBtn;
