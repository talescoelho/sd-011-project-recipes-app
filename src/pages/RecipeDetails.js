import React, { useState, useEffect } from 'react';
import '../components/css/RecipeDetails.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function RecipeDetails(props) {
  const { match: { params: { id } } } = props;
  const { match: { url } } = props;

  const [searchIdURL, setSearchIdURL] = useState('');
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    if (url.includes('comidas')) setSearchIdURL('https://www.themealdb.com/api/json/v1/1/lookup.php?i=');
    if (url.includes('bebidas')) setSearchIdURL('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=');
  }, [url]);

  useEffect(() => {
    fetch(`${searchIdURL}${id}`)
      .then((response) => response.json())
      .then((result) => setRecipe(result));
  }, [id, searchIdURL]);

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (recipe) {
      const recipeKeys = Object.keys(recipe.meals[0]);

      const ingredientsKeys = [];
      recipeKeys.forEach((key) => {
        if (key.includes('strIngredient')) ingredientsKeys.push(key);
      });

      const recipeIngredints = [];
      ingredientsKeys.forEach((ingredient) => {
        recipeIngredints.push(recipe.meals[0][ingredient]);
      });

      const filteredIngredints = recipeIngredints.filter((ingredient) => ingredient);
      setIngredients(filteredIngredints);
    }
  }, [recipe]);

  console.log(recipe);

  return (
    <>
      {!recipe ? <div>Carregando...</div>
        : (
          <div className="supply-card">

            <img
              data-testid="recipe-photo"
              src={ recipe.meals[0].strMealThumb }
              alt={ recipe.meals[0].strMeal }
            />
            <h1 data-testid="recipe-title">{ recipe.meals[0].strMeal }</h1>
            <button type="button" data-testid="share-btn">
              <img src={ shareIcon } alt="shareIcon" />
            </button>
            <button type="button" data-testid="favorite-btn">
              <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
            </button>
            <h2 data-testid="recipe-category">
              {recipe.meals[0].strCategory}
            </h2>
            <h2>Ingredientes</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                  {ingredient}
                </li>
              ))}
            </ul>
            <h2>Intruções</h2>
            <p data-testid="instructions">
              {recipe.meals[0].strInstructions}
            </p>
            <iframe
              title={ recipe.meals[0].strMeal }
              src="https://www.youtube.com/embed/mulqW-J3Yy4"
            />
          </div>
        )}
      <div />
    </>
  );
}

export default RecipeDetails;
