import React, { useState, useEffect } from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteButton({ recipe, drinkOrFood }) {
  const [changeHeart, setChangeHeart] = useState(false);
  const [getLocalStorage, setGetLocalStorage] = useState();
  const [isFavorite, setFavorie ] = useState();
  // const { idMeal, strMeal, strCategory, strArea, strMealThumb } = recipe;
  // const { strDrink, strAlcoholic, strInstructions, strDrinkThumb } = recipe;

  useEffect(() => {
    const getFromLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setGetLocalStorage(getFromLocalStorage);
    return getFromLocalStorage ? setChangeHeart(true) : setChangeHeart(false);
  }, []);

  useEffect(() => {
    const id = drinkOrFood === 'comida' ? recipe.idMeal : recipe.idDrink;
    
  }, [getLocalStorage]);

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
    localStorage.setItem('favoriteRecipes', JSON.stringify(
      [...getLocalStorage, favorites],
    ));
  }

  if (getLocalStorage) {
    console.log(getLocalStorage);
    return (
      <div>
        <button type="button" onClick={ () => handleHeart() }>
          <img
            src={ changeHeart ? blackHeartIcon : whiteHeartIcon }
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
