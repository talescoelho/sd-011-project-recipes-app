import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WhiteHeart from '../images/whiteHeartIcon.svg';
import BlackHeart from '../images/blackHeartIcon.svg';

function FavoriteBtn({ details, gatilho }) {
  let favoritedRecipes = [];
  let recipeId = '';
  let recipeType = ''; let recipeArea = ''; let recipeCategory = '';
  let recipeAlcoholicOrNot = ''; let recipeName = ''; let recipeImg = '';

  switch (gatilho) {
  case 'meal':
    recipeId = details[0].idMeal;
    recipeType = 'comida';
    recipeArea = details[0].strArea;
    recipeCategory = details[0].strCategory;
    recipeAlcoholicOrNot = '';
    recipeName = details[0].strMeal;
    recipeImg = details[0].strMealThumb;
    break;
  case 'drink':
    recipeId = details[0].idDrink;
    recipeType = 'bebida';
    recipeArea = '';
    recipeCategory = details[0].strCategory;
    recipeAlcoholicOrNot = details[0].strAlcoholic;
    recipeName = details[0].strDrink;
    recipeImg = details[0].strDrinkThumb;
    break;
  default:
    break;
  }

  function btnClickHandler() {
    let inicial = true;
    if (gatilho) {
      if (!localStorage.favoriteRecipes
        || JSON.parse(localStorage.favoriteRecipes).length < 1) {
        const obj1 = {
          id: recipeId,
          type: recipeType,
          area: recipeArea,
          category: recipeCategory,
          alcoholicOrNot: recipeAlcoholicOrNot,
          name: recipeName,
          image: recipeImg,
        };
        favoritedRecipes.push(obj1);
        console.log('state: ', favoritedRecipes);

        localStorage.favoriteRecipes = JSON.stringify(favoritedRecipes);

        inicial = false;
      }
      if (inicial) {
        const prev = JSON.parse(localStorage.favoriteRecipes);
        const obj2 = {
          id: recipeId,
          type: recipeType,
          area: recipeArea,
          category: recipeCategory,
          alcoholicOrNot: recipeAlcoholicOrNot,
          name: recipeName,
          image: recipeImg,
        };
        if (favoritedRecipes.some((item) => item.recipeName === prev.recipeName)) {
          const filter2 = favoritedRecipes.filter((el) => el.name !== prev.name);
          favoritedRecipes = filter2;
        } else {
          favoritedRecipes.push(...prev, obj2);
          console.log(favoritedRecipes);
        }
        localStorage.favoriteRecipes = JSON.stringify(favoritedRecipes);
      }
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={ btnClickHandler }
      >
        <img
          data-testid="favorite-btn"
          src={ WhiteHeart }
          alt="icone Share"
        />
      </button>
    </div>
  );
}
export default FavoriteBtn;

FavoriteBtn.propTypes = {
  details: PropTypes.arrayOf(Array).isRequired,
  gatilho: PropTypes.string.isRequired,
};
