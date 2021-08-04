import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteButton({ recipe, drinkOrFood }) {
  const [getLocalStorage, setGetLocalStorage] = useState();
<<<<<<< HEAD
  // const [isFavorite, setFavorie ] = useState();
=======
  const [isFavorite, setFavorite] = useState(false);
>>>>>>> a3df82695031a799e61ccb36893bd70ca5a353b3
  // const { idMeal, strMeal, strCategory, strArea, strMealThumb } = recipe;
  // const { strDrink, strAlcoholic, strInstructions, strDrinkThumb } = recipe;

  useEffect(() => {
    const getFromLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setGetLocalStorage(getFromLocalStorage);
  }, []);

<<<<<<< HEAD
  // useEffect(() => {
  //   const id = drinkOrFood === 'comida' ? recipe.idMeal : recipe.idDrink;
  // }, [getLocalStorage]);
=======
  useEffect(() => {
    const id = drinkOrFood === 'comida' ? recipe.idMeal : recipe.idDrink;
    if (getLocalStorage) {
      const verifyFav = getLocalStorage.some((element) => element.id === id);
      setFavorite(verifyFav);
    }
  }, [getLocalStorage]);
>>>>>>> a3df82695031a799e61ccb36893bd70ca5a353b3

  const favorites = {
    id: drinkOrFood === 'comida' ? recipe.idMeal : recipe.idDrink,
    type: drinkOrFood === 'comida' ? 'comida' : 'bebida',
    area: drinkOrFood === 'comida' ? recipe.strArea : '',
    category: drinkOrFood === 'comida' ? recipe.strCategory : '',
    alcoholicOrNot: drinkOrFood === 'comida' ? '' : recipe.strAlcoholic,
    name: drinkOrFood === 'comida' ? recipe.strMeal : recipe.strDrink,
    image: drinkOrFood === 'comida' ? recipe.strMealThumb : recipe.srtDrinkThumb,
  };

  function handleHeart() {
    const id = drinkOrFood === 'comida' ? recipe.idMeal : recipe.idDrink;
    const verifyFav = getLocalStorage.reduce((acc, cur) => {
      if (cur.id !== id) {
        return [...acc, cur];
      }
      return acc;
    }, []);
    const newFavorites = (isFavorite) ? verifyFav : [...verifyFav, favorites];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFavorite(!isFavorite);
  }

  if (getLocalStorage) {
    return (
      <div>
        <button type="button" onClick={ () => handleHeart() }>
          <img
            src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
            alt="Favourite Button"
            data-testid="favorite-btn"
          />
        </button>
      </div>);
  }
  return (
    <h3> Carregando </h3>
  );
}

FavoriteButton.propTypes = {
  drinkOrFood: PropTypes.string.isRequired,
  recipe: PropTypes.isRequired,
};
