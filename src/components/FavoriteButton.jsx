import React, { useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton({ data, type }) {
  // Set do state inicial do favorito como false (como é iniciado o botão)
  const [fav, setFav] = useState(false);
  const favoritedRecipes = JSON.parse(
    localStorage.getItem('favoriteRecipes'),
  );
  let objectRecipe = {};
  let idData = '';
  if (type === 'comida') {
    const { idMeal, strArea, strCategory, strMeal, strMealThumb } = data;
    idData = idMeal;
    objectRecipe = {
      id: idMeal,
      type: 'comida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
    if (favoritedRecipes !== null) {
      setFav(favoritedRecipes.some((e) => e.id === idMeal));
    }
  } else {
    const { idDrink, strCategory, strAlcoholic, strDrink, strDrinkThumb } = data;
    idData = idDrink;
    objectRecipe = {
      id: idDrink,
      type: 'bebida',
      area: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    if (favoritedRecipes !== null) {
      setFav(favoritedRecipes.some((e) => e.id === idData));
    }
  }
  const handleClick = () => {
    if (!fav && favoritedRecipes !== null) {
      setFav(true);
      favoritedRecipes.push(objectRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoritedRecipes));
    }
    if (fav) {
      setFav(false);
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify(favoritedRecipes.filter((e) => e.id !== idData)),
      );
    }
    if (favoritedRecipes === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([objectRecipe]));
    }
  };

  // A tag image não aceita um onClick como atributo. Para solucionar isso, foi criada uma tag input do tipo image (thanks Douglas <3);
  return (
    <input
      type="image"
      data-testid="favorite-btn"
      src={ fav ? blackHeartIcon : whiteHeartIcon }
      onClick={ () => handleClick() }
      alt="favorite icon"
    />
  );
}

export default FavoriteButton;

FavoriteButton.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
