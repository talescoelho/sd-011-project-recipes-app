import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecomendationRecipesCards from '../components/RecomendationRecipesCards';
import '../components/css/RecipeDetails.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function RecipeDetails(props) {
  const { match: { params: { id } } } = props;
  const { match: { url } } = props;

  const [searchIdURL, setSearchIdURL] = useState('');
  const [recipe, setRecipe] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    if (url.includes('comidas')) {
      setSearchIdURL('https://www.themealdb.com/api/json/v1/1/lookup.php?i=');
      setType('meals');
    }
    if (url.includes('bebidas')) {
      setSearchIdURL('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=');
      setType('drinks');
    }
    fetch(`${searchIdURL}${id}`)
      .then((response) => response.json())
      .then((result) => setRecipe(result));
  }, [url, id, searchIdURL]);

  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    if (recipe) {
      const recipeKeys = Object.keys(recipe[type][0]);

      const ingredientsKeys = [];
      const measureKeys = [];
      recipeKeys.forEach((key) => {
        if (key.includes('strIngredient')) ingredientsKeys.push(key);
        if (key.includes('strMeasure')) measureKeys.push(key);
      });

      const recipeIngredints = [];
      ingredientsKeys.forEach((ingredient) => {
        recipeIngredints.push(recipe[type][0][ingredient]);
      });

      const recipeMeasure = [];
      measureKeys.forEach((measure) => {
        recipeMeasure.push(recipe[type][0][measure]);
      });

      const filteredIngredints = recipeIngredints.filter((ingredient) => ingredient);
      setIngredients(filteredIngredints);

      const filteredMeasures = recipeMeasure.filter((measure) => measure);
      setMeasures(filteredMeasures);
    }
  }, [recipe, type]);

  function getCorrectYoutubeURL(urlLink) {
    console.log(urlLink);
    const youtubeVideoId = urlLink.split('?v=', 2)[1];
    console.log(youtubeVideoId);
    const IFrameYtLink = `https://www.youtube.com/embed/${youtubeVideoId}`;

    return IFrameYtLink;
  }

  function renderMealDetails() {
    return (
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
        <h3 data-testid="recipe-category">
          {recipe.meals[0].strCategory}
        </h3>
        <h2>Ingredientes</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {ingredient}
              {' '}
              <strong>{measures[index]}</strong>
            </li>
          ))}
        </ul>
        <h2>Intruções</h2>
        <p data-testid="instructions">
          {recipe.meals[0].strInstructions}
        </p>
        <iframe
          data-testid="video"
          title={ recipe.meals[0].strMeal }
          src={ getCorrectYoutubeURL(recipe.meals[0].strYoutube) }
        />
        <h2>Recomendações</h2>
        <div>
          <RecomendationRecipesCards identifier="comidas" />
        </div>
        <button
          className="start-recipe"
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>
      </div>
    );
  }

  function renderDrinkDetails() {
    return (
      <div className="supply-card">

        <img
          data-testid="recipe-photo"
          src={ recipe.drinks[0].strDrinkThumb }
          alt={ recipe.drinks[0].strDrink }
        />
        <h1 data-testid="recipe-title">{ recipe.drinks[0].strDrink }</h1>
        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="shareIcon" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
        </button>
        <h3 data-testid="recipe-category">
          {recipe.drinks[0].strCategory}
        </h3>
        <h2>Ingredientes</h2>
        <ul>
          {ingredients.map((ingredientDrink, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {ingredientDrink}
              {' '}
              <strong>{measures[index]}</strong>
            </li>
          ))}
        </ul>
        <h2>Intruções</h2>
        <p data-testid="instructions">
          {recipe.drinks[0].strInstructions}
        </p>
        <h2>Recomendações</h2>
        <div>
          <RecomendationRecipesCards identifier="bebidas" />
        </div>
        <button
          className="start-recipe"
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>
      </div>
    );
  }

  function chooseMealOrDrinkDetail() {
    if (url.includes('comidas')) return renderMealDetails();
    if (url.includes('bebidas')) return renderDrinkDetails();
  }

  return (
    <>
      {recipe && chooseMealOrDrinkDetail() }
      <div />
    </>
  );
}

export default RecipeDetails;

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
