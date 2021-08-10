import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function DrinksRecipeInProgress({ match: { params: { id } } }) {
  const [drinkInProgress, setDrinkInProgress] = useState('');
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getDrinkDetails = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      const { drinks } = data;
      setDrinkInProgress(drinks[0]);
      setIsLoading(false);
    };
    getDrinkDetails();
  }, []);

  function createIngredArray() {
    const ingredArray = Object.entries(drinkInProgress)
      .filter((key) => key[0].includes('strIngredient'));
    const ingredList = [];
    ingredArray.forEach((item) => ingredList.push(item[1]));
    console.log(drinkInProgress);
    console.log(ingredList);
    const finalList = ingredList.map((ingredient, index) => {
      if (ingredient) {
        return (
          <li key={ index } data-testid={ `${index}-ingredient-step` }>
            {ingredient}
            <input type="checkbox" />
          </li>
        );
      }
      return null;
    });
    return (
      <ul>{ finalList }</ul>
    );
  }

  function renderCardRecipe({ strDrinkThumb, strDrink, strCategory, strInstructions }) {
    return (
      <div>
        <img
          src={ strDrinkThumb }
          alt={ strDrink }
          width="360px"
          height="300px"
          data-testid="recipe-photo"
        />
        <h3 data-testid="recipe-title">{ strDrink }</h3>
        {' '}
        <br />
        <button type="button" data-testid="share-btn">Compartilhar</button>
        {' '}
        <br />
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        {' '}
        <br />
        <p data-testid="recipe-category">{ strCategory }</p>
        <span>
          { createIngredArray() }
        </span>
        <p data-testid="instructions">{ strInstructions }</p>
        <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
      </div>
    );
  }

  return (
    <div>
      <span>
        { loading ? <p>Carregando...</p> : renderCardRecipe(drinkInProgress)}
      </span>
    </div>
  );
}

DrinksRecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DrinksRecipeInProgress;
