import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/API';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
// import '../styles/RecipesProgress.css';

function RecipeMealProgress() {
  const [recipeProgress, setRecipeProgress] = useState({});
  // const [mealRecipesId, setMealRecipesId] = useState()
  const [isLoaded, setIsloaded] = useState(false);
  const [isButton, setIsButton] = useState(true);

  const [favorited, setFavorited] = useState();

  const history = useHistory();
  const { pathname } = history.location;
  const recipesSelectedId = pathname.split('/')[2];

  useEffect(() => {
    const getApiDetailsRecipesFood = async () => {
      const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipesSelectedId}`;
      const requestFood = await api.fetchAPI(URL);
      const responseFood = await requestFood.meals;
      setRecipeProgress(responseFood[0]);
      console.log(responseFood);
    };
    getApiDetailsRecipesFood();
  }, [setRecipeProgress, recipesSelectedId]);

  // useEffect(() => {
  //   const getRecipes = JSON.parse(localStorage.getItem('recipesProgress'));
  //   const recipe = getRecipes.filter((item) => item.idMeal === recipesSelectedId);
  //   setRecipeProgress(recipe);
  //   setIsloaded(true);
  // }, [setRecipeProgress, recipesSelectedId]);

  useEffect(() => {
    if (!localStorage.favoriteRecipes) localStorage.favoriteRecipes = JSON.stringify([]);
    const favoriteStorage = JSON.parse(localStorage.favoriteRecipes).filter(
      (recipe) => recipe.id === recipesSelectedId,
    );
    if (favoriteStorage.length >= 1) {
      setFavorited(blackHeartIcon);
    } else {
      setFavorited(whiteHeartIcon);
    }
  }, [recipesSelectedId]);

  const handleFavoriteClick = () => {
    if (favorited === whiteHeartIcon) {
      setFavorited(blackHeartIcon);
      const favoriteStorage = JSON.parse(localStorage.favoriteRecipes);
      const newFavoriteStorage = favoriteStorage.concat({
        id: recipeProgress.idMeal,
        type: 'comida',
        area: recipeProgress.strArea,
        category: recipeProgress.strCategory,
        alcoholicOrNot: '',
        name: recipeProgress.strMeal,
        image: recipeProgress.strMealThumb,
      });
      localStorage.favoriteRecipes = JSON.stringify(newFavoriteStorage);
    } else {
      setFavorited(whiteHeartIcon);
      const favoriteStorage = JSON.parse(localStorage.favoriteRecipes);
      const newFavoriteStorage = favoriteStorage.filter(
        (recipe) => recipe.id !== recipesSelectedId,
      );
      localStorage.favoriteRecipes = JSON.stringify(newFavoriteStorage);
    }
  };

  const handleClickRecipesProgress = () => {
    const inProgress = JSON.parse(localStorage.getItem('recipeInProgress'));
    const used = inProgress.meals[recipesSelectedId];
    const allUsedIngredients = Object.keys(recipeProgress).filter(
      (item) => item.includes('strIngredient')
      && recipeProgress[item] !== ''
      && recipeProgress[item] !== null,
    );
    if (used.length === allUsedIngredients.length) setIsButton(false);
  };

  const loading = <p>Loading...</p>;

  // function returnIngredients() {
  //   if (recipeProgress) {
  //     const ingredients = (recipeProgress.length === 0) ? ''
  //       : Object.keys(recipeProgress)
  //         .filter((item) => item.includes('strIngredient'))
  //         .map((itens) => recipeProgress[itens])
  //         .filter((itensFiltereds) => itensFiltereds);
  //     // const returnIngredients = mealRecipes.filter((itens) => itens.includes())
  //     return ingredients;
  //   }
  // }

  // function returnIngredients() {
  //   const ingredients = Object.entries(recipeProgress)
  //     .filter((item) => item.includes('strIngredient'))
  //     .filter((itensFiltereds) => itensFiltereds[1] !== '')
  //     .map((itens) => itens[1]);
  //     console.log(ingredients);
  //   // const returnIngredients = mealRecipes.filter((itens) => itens.includes())
  //   return ingredients;
  // }

  // function returnIngredients() {
  //   return Object.keys(recipeProgress)
  //     .filter((item) => item.includes('strIngredient'))
  //     .map((items) => items);
  // }

  const checkBox = handleClickRecipesProgress();

  function handleChangeCheck({ target }) {
    target.parentElement.classList.toggle('risk');
  }

  return (
    <div>
      { isLoaded
        ? (
          <div>
            <h2 data-testid="recipe-title">{recipeProgress.strMeal}</h2>
            <img
              src={ recipeProgress.strMealThumb }
              data-testid="recipe-photo"
              className="recipes-img"
              alt={ recipeProgress.strMeal }
            />
            <button data-testid="share-btn" type="button">
              <img src={ shareIcon } alt="share icon" />
            </button>
            <button data-testid="favorite-btn" type="button" onClick={ handleFavoriteClick }>
              <img src={ favorited } alt="favorite icon" />
            </button>
            <p data-testid="recipe-category">{recipeProgress.strCategory}</p>
            <h3>Ingredients</h3>
            {checkBox.map((itens, key) => (
              <label
                htmlFor={ key }
                key={ key }
              >
                <input
                  type="checkbox"
                  id={ key }
                  onClick={ (e) => handleChangeCheck(e) }
                />
                {itens}
              </label>))}

            <p data-testid="instructions">{recipeProgress.strInstructions}</p>
            <Link to="/receitas-feitas">
              <button
                type="button"
                data-testid="finish-recipe-btn"
                disabled={ isButton }
              >
                Finalizar Receita
              </button>
            </Link>
          </div>) : (
          loading
        )}
    </div>
  );
}

RecipeMealProgress.propTypes = {
  propsDrink: PropTypes.shape({
    recipesDetails: PropTypes.objectOf(PropTypes.string),
    // handleClickCopy: PropTypes.func,
    // handleClickFavorites: PropTypes.func,
  }).isRequired,
};

export default RecipeMealProgress;
