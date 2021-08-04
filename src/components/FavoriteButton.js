import React, { useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton({ recipe, type }) {
  const [btnIsFavorited, setBtnIsFavorited] = useState(false);
  const [status, setStatus] = useState('despreenchido');

  function setFavoriteRecipeOnLocalStorage() {
    const drinkObj = {
      id: recipe.idDrink,
      type,
      area: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };

    const mealObj = {
      id: recipe.idMeal,
      type,
      area: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
    };

    const recipeFavorited = type === 'bebida' ? drinkObj : mealObj;
    console.log(recipe);

    localStorage.setItem('favoriteRecipes', JSON.stringify([recipeFavorited]));
  }

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      src={ btnIsFavorited ? blackHeartIcon : whiteHeartIcon }
      onClick={ () => {
        setBtnIsFavorited(!btnIsFavorited);
        setFavoriteRecipeOnLocalStorage();
        if (status === 'despreenchido') setStatus('preenchido');
        if (status === 'preenchido') setStatus('despreenchido');
      } }
    >
      <img
        src={ btnIsFavorited ? blackHeartIcon : whiteHeartIcon }
        alt="whiteHeartIcon"
      />
    </button>
  );
}

export default FavoriteButton;

FavoriteButton.propTypes = {
  recipe: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
