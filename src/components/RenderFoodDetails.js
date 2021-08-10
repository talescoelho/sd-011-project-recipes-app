import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeAppContext from '../context/RecipeAppContext';
import '../css/RecipeDetails.css';

function RenderFoodDetails({ copyLink }) {
  const { shareIcon, bkHeart, meal, wtHeart } = useContext(RecipeAppContext);
  const [isFavRecipe, setIsFavRecipe] = useState(false);

  function checkFavoriteRecipe() {
    const { idMeal } = meal;
    const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favRecipes) return;
    const checkedRecipe = favRecipes.some(
      (recipe) => recipe.id === idMeal,
    );
    if (checkedRecipe) setIsFavRecipe(checkedRecipe);
  }

  useEffect(() => {
    checkFavoriteRecipe();
    return () => {
      setIsFavRecipe(false);
    };
  }, [meal, isFavRecipe]);

  function saveFavoriteMeal() {
    const { idMeal, strArea, strCategory, strMeal, strMealThumb } = meal;
    let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favoriteRecipes) favoriteRecipes = [];
    const checkIsFavorited = favoriteRecipes.some((recipes) => recipes.id === idMeal);
    if (checkIsFavorited) {
      const newFavRecipe = favoriteRecipes.filter((recipes) => recipes.id !== idMeal);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavRecipe));
      setIsFavRecipe(false);
    }
    if (!checkIsFavorited) {
      const newFavoriteRecipe = [
        ...favoriteRecipes,
        {
          id: idMeal,
          type: 'comida',
          area: strArea,
          category: strCategory,
          alcoholicOrNot: '',
          name: strMeal,
          image: strMealThumb,
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
        alt={ meal.strMeal }
        src={ meal.strMealThumb }
        height="350px"
      />
      <div className="recipe-details-legend">
        <h3 data-testid="recipe-title">{ meal.strMeal }</h3>
        <input
          type="image"
          data-testid="share-btn"
          src={ shareIcon }
          alt="card da receita"
          onClick={ () => copyLink(meal.idMeal) }
        />
        <input
          type="image"
          data-testid="favorite-btn"
          src={ isFavRecipe ? bkHeart : wtHeart }
          alt="Favorite Button"
          onClick={ () => saveFavoriteMeal() }
        />
      </div>
      <p
        className="recipe-details-category"
        data-testid="recipe-category"
      >
        { meal.strCategory }
      </p>
    </div>
  );
}

RenderFoodDetails.propTypes = {
  copyLink: PropTypes.func.isRequired,
};

export default RenderFoodDetails;
