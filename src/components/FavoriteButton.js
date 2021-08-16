import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

function addFavorite(idReceita, type, data, foodType) {
  if (type === 'comidas') {
    type = 'comida';
  } else {
    type = 'bebida';
  }

  const food = {
    id: idReceita,
    type,
    area: data[foodType][0].strArea || '',
    category: data[foodType][0].strCategory || '',
    alcoholicOrNot: data[foodType][0].strAlcoholic || '',
    name: data[foodType][0].strMeal || data[foodType][0].strDrink,
    image: data[foodType][0].strMealThumb || data[foodType][0].strDrinkThumb,
  };
  if (!localStorage.favoriteRecipes) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([food]));
  } else {
    const favoriteLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteLocalStorage.some((value) => value.id === idReceita)) {
      const favorite = favoriteLocalStorage.filter((value) => value.id !== idReceita);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorite));
    } else {
      localStorage.setItem('favoriteRecipes', JSON
        .stringify([...favoriteLocalStorage, food]));
    }
  }
}

export default function FavoriteButton({ items }) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const { idReceita, type, data, foodType } = items;

  function verifyFavoriteExistsOnLocalStorage(id) {
    const favoriteExists = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteExists && favoriteExists.find((revenue) => (
      revenue.id === id
    ))) {
      setIsFavorite(true);
    }
  }

  useEffect(() => {
    verifyFavoriteExistsOnLocalStorage(idReceita);
  }, [idReceita, isFavorite]);

  return (
    <button
      onClick={ () => {
        addFavorite(idReceita, type, data, foodType);
        setIsFavorite(!isFavorite);
      } }
      type="button"
    >
      <img
        data-testid="favorite-btn"
        src={ isFavorite ? blackHeart : whiteHeart }
        alt="coração preenchido"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  addFavorite: PropTypes.func,
}.isRequired;
