import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

export default function ProcessoComidaPage(props) {
  const [foodInProgress, setFoodIP] = useState();
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

  function fetchFood() {
    const { params } = props.match;
    const { id } = params;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((result) => setFoodIP(result));
  }

  function inProgressLocalStorage() {
    const { params } = props.match;
    const { id } = params;
    const inProgressObj = {
      cocktails: {
        id: [],
      },
      meals: {
        [id]: [],
      },
    };
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!getStorage) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressObj));
    }
  }

  useEffect(() => {
    fetchFood();
    inProgressLocalStorage();
    localStorageState(setSavedRecipe);
  }, []);

  const ingredientLimit = 15;
  const ingredientKeys = foodInProgress && (
    Object.keys(foodInProgress.meals[0]).filter((key) => key.includes('ngredient')));
  const measureKeys = foodInProgress && (
    Object.keys(foodInProgress.meals[0]).filter((key) => key.includes('easure')));
  const ingredientMap = ingredientKeys && ingredientKeys
    .map(((ingre, index) => (
      `${foodInProgress.meals[0][ingre]}-${foodInProgress.meals[0][measureKeys[index]]}`)
    )).slice(0, ingredientLimit);
  const ingredientFilter = ingredientMap && ingredientMap
    .filter((value) => value !== '-');
  const { match } = props;
  const { params } = match;
  const { id } = params;
  function markIngredients({ target }) {
    const { checked } = target;
    const localObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const ifObj = {
      cocktails: {
        id: [],
      },
      meals: {
        [id]: [...localObj.meals[id], target.value],
      },
    };
    const elseObj = {
      cocktails: {
        id: [],
      },
      meals: {
        [id]: [...localObj.meals[id].filter((val) => val !== target.value)],
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
      {foodInProgress && (
        <div>
          <img
            data-testid="recipe-photo"
            width="300"
            src={ foodInProgress.meals[0].strMealThumb }
            alt={ foodInProgress.meals[0].strMeal }
          />
          <h3 data-testid="recipe-title">{foodInProgress.meals[0].strMeal}</h3>
          <button type="button" data-testid="share-btn">compartilhar</button>
          <button type="button" data-testid="favorite-btn">favoritar</button>
          <p data-testid="recipe-category">{foodInProgress.meals[0].strCategory}</p>
          {ingredientFilter && ingredientFilter.map((ing, index) => (
            <label
              key={ index }
              htmlFor={ ing }
              data-testid={ `${index}-ingredient-step` }
              style={ savedRecipe && (
                savedRecipe.meals[id].includes(ing) ? marked : unmarked) }
            >
              {ing}
              <input
                onClick={ markIngredients }
                type="checkbox"
                name={ ing }
                key={ index }
                value={ ing }
                defaultChecked={ savedRecipe && savedRecipe.meals[id].includes(ing) }
              />
            </label>))}
          <p data-testid="instructions">{foodInProgress.meals[0].strInstructions}</p>
          <button data-testid="finish-recipe-btn" type="button">Finalizar receita</button>
        </div>)}
    </div>
  );
}

ProcessoComidaPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
