import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

export default function ProcessoBebidaPage(props) {
  const [drinkInProgress, setDrinkID] = useState();

  function fetchDrink() {
    const { params } = props.match;
    const { id } = params;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((result) => setDrinkID(result));
  }
  useEffect(() => {
    fetchDrink();
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
  console.log(ingredientFilter);

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
            <label key={ index } htmlFor={ ing }>
              {ing}
              <input
                type="checkbox"
                name={ ing }
                key={ index }
                value={ ing }
                data-testid={ `${index}-ingredient-step` }
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
