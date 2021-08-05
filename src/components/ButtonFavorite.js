import React, { useEffect, useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ButtonFavorite({ objData }) {
  const [black, setBlack] = useState(false);
  const path = window.location.pathname.split("/")[2];
  const l = JSON.parse(localStorage.getItem('favoriteRecipes'));
  useEffect(() => {
    if (l === null) {
      return localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    };
    const acumulate = JSON.parse(localStorage.getItem('favoriteRecipes'));
    acumulate.forEach((e) => {
        if (e.id === path) {
          console.log('tem', acumulate);
          return setBlack(true);
        }
      })
  }, [path, l]);
  
  const handleClickToBlack = () => {
    const {
      idMeal,
      strArea,
      strCategory,
      strMeal,
      strMealThumb,
      strAlcoholic,
      strDrink,
      strDrinkThumb
    } = objData;

    const objToStorage = {
      id: idMeal,
      type: window.location.pathname.split("/")[1],
      area: strArea !== null ? strArea : '',
      category: strCategory !== null ? strCategory : '',
      alcoholicOrNot: strAlcoholic !== null ? strAlcoholic : '',
      name: strMeal !== null ? strMeal : strDrink,
      image: strMealThumb !== null ? strMealThumb : strDrinkThumb,
    };

    const acumulate = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const update = JSON.stringify([...acumulate, objToStorage]);
    localStorage.setItem('favoriteRecipes', update);
    return setBlack(true);
  }

  const handleClickToWhite = () => {
    const acumulate = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log('fora', acumulate);
    const update = acumulate
      .filter((e) => (e.id !== window.location.pathname.split("/")[2]));
    console.log('update', update);
    localStorage.setItem('favoriteRecipes', JSON.stringify(update));
    return setBlack(false);
  }
  
  const whiteHeart = () => {
    return (
      <button type="button" onClick={ () => handleClickToBlack() }>
        <img data-testid="share-btn" src={whiteHeartIcon} alt="not-favorite btn" />
      </button>
    );
  }

  const blackHeart = () => {
    return (
      <button type="button" onClick={ () => handleClickToWhite() }>
        <img data-testid="share-btn" src={blackHeartIcon} alt="favorite btn" />
      </button>
    );
  }

  return (
      black === false ? whiteHeart() : blackHeart()
  );
}

export default ButtonFavorite;
