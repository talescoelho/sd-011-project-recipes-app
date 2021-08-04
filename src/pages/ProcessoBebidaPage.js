import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

export default function ProcessoBebidaPage(props) {
  const [drinkInProgress, setDrinkID] = useState();
  const [savedRecipe, setSavedRecipe] = useState();

  const marked = {
    textDecoration: 'line-through',
  };

  const unmarked = {
    textDecoration: 'none',
  };

  function localStorageState(func) {
    if (localStorage.inProgressRecipes) {
      const jsonObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
      func(jsonObj);
    }
  }

  function fetchDrink() {
    const { params } = props.match;
    const { id } = params;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((result) => setDrinkID(result));
  }

  function inProgressLocalStorage() {
    const { params } = props.match;
    const { id } = params;
    const inProgressObj = {
      cocktails: {
        [id]: [],
      },
      meals: {
        id: [],
      },
    };
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!getStorage) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressObj));
    }
  }

  useEffect(() => {
    fetchDrink();
    inProgressLocalStorage();
    localStorageState(setSavedRecipe);
  }, []);

  const ingredientLimit = 15;
  const ingredientKeys = drinkInProgress && (
    Object.keys(drinkInProgress.drinks[0]).filter((key) => key.includes('ngredient')));
  const measureKeys = drinkInProgress && (
    Object.keys(drinkInProgress.drinks[0]).filter((key) => key.includes('easure')));
  const ingredientMap = ingredientKeys && ingredientKeys
    .map(((ingre, index) => `${drinkInProgress.drinks[0][ingre]}-${drinkInProgress.drinks[0][measureKeys[index]]}`)).slice(0, ingredientLimit);
  const ingredientFilter = ingredientMap && ingredientMap
    .filter((value) => value !== 'null-null' && value !== '-');
  const { match } = props;
  const { params } = match;
  const { id } = params;
  function markIngredients({ target }) {
    const { checked } = target;
    const localObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const ifObj = {
      cocktails: {
        [id]: [...localObj.cocktails[id], target.value],
      },
      meals: {
        id: [],
      },
    };
    const elseObj = {
      cocktails: {
        [id]: [...localObj.cocktails[id].filter((val) => val !== target.value)],
      },
      meals: {
        id: [],
      },
    };
    if (checked) {
      target.parentNode.style.textDecoration = 'line-through';
      localStorage.setItem('inProgressRecipes', JSON.stringify(ifObj));
    } else {
      target.parentNode.style.textDecoration = 'none';
      localStorage.setItem('inProgressRecipes', JSON.stringify(elseObj));
    }
  }

  return (
    <div>
      {drinkInProgress && (
        <div>
          <img
            data-testid="recipe-photo"
            width="300"
            src={ drinkInProgress.drinks[0].strDrinkThumb }
            alt={ drinkInProgress.drinks[0].strDrink }
          />
          <h3 data-testid="recipe-title">{drinkInProgress.drinks[0].strDrink}</h3>
          <button type="button" data-testid="share-btn">compartilhar</button>
          <button type="button" data-testid="favorite-btn">favoritar</button>
          <p data-testid="recipe-category">{drinkInProgress.drinks[0].strCategory}</p>
          {ingredientFilter && ingredientFilter.map((ing, index) => (
            <label
              key={ index }
              htmlFor={ ing }
              data-testid={ `${index}-ingredient-step` }
              style={ savedRecipe && (
                savedRecipe.cocktails[id].includes(ing) ? marked : unmarked) }
            >
              {ing}
              <input
                onClick={ markIngredients }
                type="checkbox"
                name={ ing }
                key={ index }
                value={ ing }
                defaultChecked={ savedRecipe && savedRecipe.cocktails[id].includes(ing) }
              />
            </label>))}
          <p data-testid="instructions">{drinkInProgress.drinks[0].strInstructions}</p>
          <button data-testid="finish-recipe-btn" type="button">Finalizar receita</button>
        </div>)}
    </div>
  );
}

ProcessoBebidaPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
