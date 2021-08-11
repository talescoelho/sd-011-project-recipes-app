import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import handleClickFavoriteRecipe from '../helpers/handleClickFavoriteRecipe';
import handleClickDoneRecipe from '../helpers/handleClickDoneRecipe';
import '../styles/recipesInProgress.css';
import '../App.css';

function RecipeInProgress({
  typeURL,
  ingQuant,
  checkIng,
  urlId,
  arrayCheckedIngredients,
}) {
  const [copied, setCopied] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const ingredients = [];

  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    const favoriteRecipes = localStorage.getItem('favoriteRecipes');
    if (favoriteRecipes) {
      const favoriteRecipesArray = JSON.parse(favoriteRecipes);
      if (favoriteRecipesArray.some((recipe) => recipe.id === urlId)) {
        setIsFavorite(true);
      }
    }
  }, [urlId]);

  const dateSlice = 10;
  const date = new Date().toJSON().slice(0, dateSlice).replace(/-/g, '/');

  const capitalizeLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const lastLetterInd = -1;
  const key = Object.keys(typeURL); // meals ou drinks

  const newType = capitalizeLetter(key[0]).slice(0, lastLetterInd); // Meal ou Drink
  const recipe = typeURL[key[0]]; // retorno da api

  useEffect(() => {
    if (ingredients.length > 0) {
      if (arrayCheckedIngredients.length === ingredients.length) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [arrayCheckedIngredients.length, ingredients.length]);

  const copyLink = () => {
    const end = 12;
    const three = 3000;
    const url = window.location.href;
    navigator.clipboard.writeText(url.slice(0, url.length - end));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, three);
  };

  return recipe.map((recipeType, index) => {
    const maxIngredient = parseFloat(ingQuant);

    for (let i = 1; i <= maxIngredient; i += 1) {
      if (recipeType[`strIngredient${i}`] !== null
        && recipeType[`strIngredient${i}`].length > 0) {
        ingredients.push(i);
      }
    }

    return (
      <div key={ index } className="body-b">
        <img
          src={ recipeType[`str${newType}Thumb`] }
          alt={ recipeType[`str${newType}`] }
          data-testid="recipe-photo"
          className="w-100"
        />
        <div className="d-flex a-i-center j-c-spBetween ml-1">
          <h1 data-testid="recipe-title">{recipeType[`str${newType}`]}</h1>
          {copied ? <p>Link copiado!</p> : (
            <button
              type="button"
              data-testid="share-btn"
              onClick={ copyLink }
              src={ shareIcon }
              className="btn-icon"
            >
              <img src={ shareIcon } alt="compartilhar" />
            </button>
          )}
          { isFavorite ? (
            <button
              type="button"
              data-testid="favorite-btn"
              onClick={ () => handleClickFavoriteRecipe(urlId,
                recipeType, setIsFavorite, isFavorite) }
              src={ blackHeartIcon }
              className="favorite btn-icon"
            >
              <img src={ blackHeartIcon } alt="" />
            </button>)
            : (
              <button
                type="button"
                data-testid="favorite-btn"
                onClick={ () => handleClickFavoriteRecipe(urlId,
                  recipeType, setIsFavorite, isFavorite) }
                src={ whiteHeartIcon }
                className="favorite btn-icon"
              >
                <img src={ whiteHeartIcon } alt="" />
              </button>) }
        </div>
        <p data-testid="recipe-category" className="ml-1">{recipeType.strCategory}</p>
        <ul className="bg-gray m-1 b-shadow b-radius">
          {ingredients.map((n, i) => (
            arrayCheckedIngredients.includes(n) ? (
              <li
                key={ i }
                data-testid={ `${i}-ingredient-step` }
                className="checkedIngredient"
              >
                <input
                  type="checkbox"
                  id={ n }
                  checked
                  onClick={ (e) => checkIng(e) }
                />
                { recipeType[`strMeasure${n}`]
                  ? `${recipeType[`strIngredient${n}`]} - ${recipeType[`strMeasure${n}`]}`
                  : recipeType[`strIngredient${n}`] }
              </li>
            ) : (
              <li
                key={ i }
                data-testid={ `${i}-ingredient-step` }
              >
                <input
                  type="checkbox"
                  id={ n }
                  onClick={ (e) => checkIng(e) }
                />
                { recipeType[`strMeasure${n}`]
                  ? `${recipeType[`strIngredient${n}`]} - ${recipeType[`strMeasure${n}`]}`
                  : recipeType[`strIngredient${n}`] }
              </li>)
          ))}
        </ul>
        <p
          data-testid="instructions"
          className="bg-gray m-1 p-1 b-shadow b-radius"
        >
          {recipeType.strInstructions}
        </p>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="finish-recipe-btn"
            id="finish-btn"
            disabled={ disabled }
            onClick={ () => handleClickDoneRecipe(urlId, recipeType, date) }
          >
            Finalizar
          </button>
        </Link>
      </div>
    );
  });
}

export default RecipeInProgress;
