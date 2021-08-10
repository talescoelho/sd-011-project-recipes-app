import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as api from '../services/API';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../styles/RecipesProgress.css';

function RecipeMealProgress() {
  const [recipeProgress, setRecipeProgress] = useState({});
  const [isLoaded, setIsloaded] = useState(false);

  const history = useHistory();
  const { pathname } = history.location;
  const recipesSelectedId = pathname.split('/')[2];

  useEffect(() => {
    const getApiDetailsRecipesFood = async () => {
      const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipesSelectedId}`;
      const requestFood = await api.fetchAPI(URL);
      const responseFood = await requestFood.meals;
      setRecipeProgress(responseFood[0]);
      setIsloaded(true);
    };
    getApiDetailsRecipesFood();
  }, [setRecipeProgress, recipesSelectedId]);

  const loading = <p>Loading...</p>;

  function returnIngredients() {
    return Object.keys(recipeProgress)
      .filter((item) => item.includes('strIngredient'))
      .map((items) => items);
  }

  const checkBox = returnIngredients();

  function handleChangeCheck({ target }) {
    target.parentElement.classList.toggle('risk');
  }

  return (
    <div>
      <h1>Detalhes de Comida</h1>
      { isLoaded
        ? (
          <div>
            <h2 data-testid="recipe-title">{recipeProgress.strMeal}</h2>
            <img
              src={ recipeProgress.strMealThumb }
              data-testid="recipe-photo"
              alt={ recipeProgress.strMeal }
            />
            <button data-testid="share-btn" type="button">
              <img src={ shareIcon } alt="share icon" />
            </button>
            <button data-testid="favorite-btn" type="button">
              <img src={ whiteHeartIcon } alt="favorite icon" />
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

export default RecipeMealProgress;
