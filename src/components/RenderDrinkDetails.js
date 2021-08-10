import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeAppContext from '../context/RecipeAppContext';
import '../css/RecipeDetails.css';

function RenderDrinkDetails({ copyLink }) {
  const { drink, shareIcon, bkHeart, wtHeart } = useContext(RecipeAppContext);
  const [isFavRecipe, setIsFavRecipe] = useState(false);

  function checkFavoriteRecipe() {
    const { idDrink } = drink;
    const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favRecipes) return;
    const checkedRecipe = favRecipes.some(
      (recipe) => recipe.id === idDrink,
    );
    if (checkedRecipe) setIsFavRecipe(checkedRecipe);
  }

  useEffect(() => {
    checkFavoriteRecipe();
    return () => {
      setIsFavRecipe(false);
    };
  }, [drink, isFavRecipe]);

  function saveFavoriteDrink() {
    const { idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb } = drink;
    let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favoriteRecipes) favoriteRecipes = [];
    const checkIsFavorited = favoriteRecipes.some((recipe) => recipe.id === idDrink);
    if (checkIsFavorited) {
      console.log('é verdadeiro');
      const newFavRecipe = favoriteRecipes.filter((recipe) => recipe.id !== idDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavRecipe));
      setIsFavRecipe(false);
    }
    if (!checkIsFavorited) {
      const newFavoriteRecipe = [
        ...favoriteRecipes,
        {
          id: idDrink,
          type: 'bebida',
          area: '',
          category: strCategory,
          alcoholicOrNot: strAlcoholic,
          name: strDrink,
          image: strDrinkThumb,
        },
      ];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipe));
      setIsFavRecipe(true);
    }
  }

  return (
    <div>
      <img
        data-testid="recipe-photo"
        alt={ drink.strDrink }
        src={ drink.strDrinkThumb }
        height="350px"
      />
      <div className="recipe-details-legend">
        <h3 data-testid="recipe-title">{ drink.strDrink }</h3>
        <input
          type="image"
          data-testid="share-btn"
          src={ shareIcon }
          alt="card da receita"
          onClick={ () => copyLink(drink.idDrink) }
        />
        <input
          type="image"
          data-testid="favorite-btn"
          src={ isFavRecipe ? bkHeart : wtHeart }
          alt="Favorite Button"
          onClick={ () => saveFavoriteDrink() }
        />
      </div>
      <p
        data-testid="recipe-category"
        className="recipe-details-category"
      >
        { drink.strAlcoholic }
      </p>
    </div>
  );
}

RenderDrinkDetails.propTypes = {
  copyLink: PropTypes.func.isRequired,
};

export default RenderDrinkDetails;
