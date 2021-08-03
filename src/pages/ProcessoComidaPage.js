import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

export default function ProcessoComidaPage(props) {
  const [foodInProgress, setFoodIP] = useState();

  function fetchFood() {
    const { params } = props.match;
    const { id } = params;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((result) => setFoodIP(result));
  }
  useEffect(() => {
    fetchFood();
  }, []);

  const ingredientLimit = 15;
  const ingredientKeys = foodInProgress && (
    Object.keys(foodInProgress.meals[0]).filter((key) => key.includes('ngredient')));
  const measureKeys = foodInProgress && (
    Object.keys(foodInProgress.meals[0]).filter((key) => key.includes('easure')));
  const ingredientMap = ingredientKeys && ingredientKeys
    .map(((ingre, index) => `${foodInProgress.meals[0][ingre]}-${foodInProgress.meals[0][measureKeys[index]]}`)).slice(0, ingredientLimit);
  const ingredientFilter = ingredientMap && ingredientMap
    .filter((value) => value !== '-');
  console.log(ingredientFilter);

  function markIngredients({ target }) {
    const { checked } = target;
    if (checked) {
      target.parentNode.style.textDecoration = 'line-through';
    } else {
      target.parentNode.style.textDecoration = 'none';
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
            <label key={ index } htmlFor={ ing } data-testid={ `${index}-ingredient-step` }>
              {ing}
              <input
                onClick={ markIngredients }
                type="checkbox"
                name={ ing }
                key={ index }
                value={ ing }
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
