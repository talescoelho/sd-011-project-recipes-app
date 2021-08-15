import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import White from '../images/whiteHeartIcon.svg';
import Black from '../images/blackHeartIcon.svg';

function FavoriteBtn({ details, gatilho, id }) {
  const [vamosBrincar, setVamosBrincar] = useState(false);
  let favoritedRecipes = [];
  let recipeId = '';
  let recipeType = ''; let recipeArea = ''; let recipeCategory = '';
  let recipeAlcoholicOrNot = ''; let recipeName = ''; let recipeImg = '';

  useEffect(() => {
    setVamosBrincar(false);
  }, [vamosBrincar]);

  if (gatilho !== undefined) {
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
  }

  function btnClickHandler() {
    let inicial = true;
    if (!localStorage.favoriteRecipes
        || JSON.parse(localStorage.favoriteRecipes).length < 1) {
      const obj1 = [{
        id: recipeId,
        type: recipeType,
        area: recipeArea,
        category: recipeCategory,
        alcoholicOrNot: recipeAlcoholicOrNot,
        name: recipeName,
        image: recipeImg,
      }];
      localStorage.favoriteRecipes = JSON.stringify(obj1);

      inicial = false;
    }
    if (inicial) {
      const prev = JSON.parse(localStorage.favoriteRecipes);
      favoritedRecipes = [...prev];
      const obj2 = {
        id: recipeId,
        type: recipeType,
        area: recipeArea,
        category: recipeCategory,
        alcoholicOrNot: recipeAlcoholicOrNot,
        name: recipeName,
        image: recipeImg,
      };
      if (favoritedRecipes.some((item) => item.id === obj2.id)) {
        const filter2 = favoritedRecipes.filter((el) => el.id !== obj2.id);
        localStorage.favoriteRecipes = JSON.stringify(filter2);
      } else {
        const filter3 = [...favoritedRecipes, obj2];
        localStorage.favoriteRecipes = JSON.stringify(filter3);
      }
    }
    setVamosBrincar(true);
  }

  if (localStorage.favoriteRecipes) {
    const prev = JSON.parse(localStorage.favoriteRecipes);
    favoritedRecipes = [...prev];
  }

  return (
    <div>
      <button
        type="button"
        onClick={ btnClickHandler }
      >
        <img
          data-testid="favorite-btn"
          src={ favoritedRecipes.some((item) => item.id === id) ? Black : White }
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
