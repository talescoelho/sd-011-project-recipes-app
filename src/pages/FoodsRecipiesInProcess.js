import React, { useEffect, useState } from 'react';
import FetchApi from '../services/ApiFetch';
import shareIcon from '../images/shareIcon.svg';

export default function FoodsRecipiesInProcess(props) {
  const [progressRecipes, setProgressRecipes] = useState([]);
  const { match: { params: { id } } } = props;

  useEffect(() => {
    async function fetchApi() {
      const results = await FetchApi('themealdb', null, null, ['details', id]);
      setProgressRecipes(results);
    }
    fetchApi();
  }, []);

  return (
    <div>
      { progressRecipes.length > 0
        ? progressRecipes.map((recipes, index) => (
          <div key={ index }>
            <h1 data-testid="recipe-title">{ recipes.strMeal }</h1>
            <img src={ recipes.strMealThumb } alt={ recipes.strMeal } />
            <button data-testid="share-btn" type="button">
              <img src={ shareIcon } alt={ shareIcon } />
              Compartilhar
            </button>
            <button data-testid="favorite-btn" type="button">Favoritar</button>
            <p data-testid="recipe-category">{ recipes.strCategory }</p>
            <p data-testid={ `${index}-ingredient-step` }> oo </p>
            <p data-testid="instructions">
              { recipes.strInstructions }
            </p>
            <button data-testid="finish-recipe-btn" type="button">Finalizar</button>
          </div>
        ))
        : 'Loading...'}
    </div>
  );
}
