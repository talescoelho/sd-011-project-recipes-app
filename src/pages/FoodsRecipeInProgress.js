import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FoodsRecipeInProgress({ match: { params: { id } } }) {
  const [mealInProgress, setMealInProgress] = useState('');
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getMealDetails = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      const { meals } = data;
      setMealInProgress(meals[0]);
      setIsLoading(false);
    };
    getMealDetails();
  }, []);

  function createIngredArray() {
    const ingredArray = Object.entries(mealInProgress)
      .filter((key) => key[0].includes('strIngredient'));
    const ingredList = [];
    ingredArray.forEach((item) => ingredList.push(item[1]));
    console.log(mealInProgress);
    console.log(ingredList);
    const finalList = ingredList.map((ingredient, index) => {
      if (ingredient) {
        return (
          <li key={ index } data-testid={ `${index}-ingredient-step` }>{ingredient}</li>
        );
      }
      return null;
    });
    return (
      <ul>{ finalList }</ul>
    );
  }

  function renderCardRecipe({ strMealThumb, strMeal, strCategory, strInstructions }) {
    return (
      <div>
        <img
          src={ strMealThumb }
          alt={ strMeal }
          width="360px"
          height="300px"
          data-testid="recipe-photo"
        />
        <h3 data-testid="recipe-title">{ strMeal }</h3>
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
      <span>{ loading ? <p>Carregando...</p> : renderCardRecipe(mealInProgress) }</span>
    </div>
  );
}

FoodsRecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FoodsRecipeInProgress;
