import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDoneRecipe } from '../redux/actions';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function RecipeInProgress({ typeURL, ingQuant, checkIng, array, favorite }) {
  // eslint-disable-next-line global-require
  const copy = require('clipboard-copy');
  const [copied, setCopied] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const ingredients = [];

  const dateSlice = 10;
  const utc = new Date().toJSON().slice(0, dateSlice).replace(/-/g, '/');

  const capitalizeLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const lastLetterInd = -1;
  const key = Object.keys(typeURL);
  const newType = capitalizeLetter(key[0]).slice(0, lastLetterInd);
  const recipe = typeURL[key[0]];

  useEffect(() => {
    if (ingredients.length > 0) {
      if (array.length === ingredients.length) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [array.length, ingredients.length]);

  const copyLink = () => {
    const end = 12;
    const url = window.location.href;
    copy(url.slice(0, url.length - end));
    setCopied(true);
  };

  return recipe.map((recipeType, index) => {
    const maxIngredient = parseFloat(ingQuant);

    for (let i = 1; i <= maxIngredient; i += 1) {
      if (recipeType[`strIngredient${i}`] !== null
        && recipeType[`strIngredient${i}`].length > 0) {
        ingredients.push(recipeType[`strIngredient${i}`]);
      }
    }

    return (
      <div key={ index }>
        <img
          src={ recipeType[`str${newType}Thumb`] }
          alt={ recipeType[`str${newType}`] }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{recipeType[`str${newType}`]}</h1>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ copyLink }
          src={ shareIcon }
        >
          <img src={ shareIcon } alt="compartilhar" />
        </button>
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={ favorite }
          src={ blackHeartIcon }
          className="favorite"
        >
          <img src={ blackHeartIcon } alt="favoritar" className="favorite" />
        </button>
        {copied ? <p>Link copiado!</p> : null}
        <p data-testid="recipe-category">{recipeType.strCategory}</p>
        <ul>
          {ingredients.map((ingredient, i) => (
            <li key={ i } data-testid={ `${i}-ingredient-step` } className="ingredients">
              <input
                type="checkbox"
                id={ i }
                onClick={ (e) => checkIng(e) }
              />
              {ingredient}
            </li>
          ))}
        </ul>
        <p data-testid="instructions">{recipeType.strInstructions}</p>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="finish-recipe-btn"
            id="finish-btn"
            disabled={ disabled }
            onClick={ () => { dispatch(addDoneRecipe(recipeType, utc)); } }
          >
            Finalizar
          </button>
        </Link>
      </div>
    );
  });
}

export default RecipeInProgress;
