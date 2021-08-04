import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton({ recipe, type }) {
  const [btnIsFavorited, setBtnIsFavorited] = useState(false);
  const idType = type === 'bebidas' ? 'idDrink' : 'idMeal';

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('favoriteRecipes'))) {
      const storageRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const verify = storageRecipes.some((recipee) => (
        recipee[idType] === storageRecipes[idType]
      ));
      if (verify) {
        setBtnIsFavorited(true);
      } else {
        setBtnIsFavorited(false);
      }
    }
  }, [idType]);

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
    const favoriteSupply = [];
    if (status === 'despreenchido') {
      const recipesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      favoriteSupply.push(recipeFavorited);
      if (recipesStorage) {
        recipesStorage.forEach((element) => {
          favoriteSupply.push(element);
        });
      }
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteSupply));
    } else {
      const recipesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const recipesFiltered = recipesStorage.filter((recipee) => {
        return recipee[idType] !== recipe[idType];
      });
      localStorage.setItem('favoriteRecipes', JSON.stringify(recipesFiltered));
    }
    console.log(recipe);
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
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};
