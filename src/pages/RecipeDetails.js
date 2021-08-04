import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import RecomendationRecipesCards from '../components/RecomendationRecipesCards';
import '../components/css/RecipeDetails.css';
import shareIcon from '../images/shareIcon.svg';
import FavoriteButton from '../components/FavoriteButton';

function RecipeDetails({ match, location }) {
  // const { match: { params: { id } } } = props;
  // const { match: { url } } = props;

  // const [searchIdURL, setSearchIdURL] = useState('');
  const [recipe, setRecipe] = useState({
    drinks: [{}],
    meals: [{}],
  });
  // const [type, setType] = useState('');

  const { params, path, url } = match;
  const { id } = params;
  const typeDrinkorMeal = path.split('/')[1];
  const mealsOrDrinks = typeDrinkorMeal === 'comidas' ? 'meals' : 'drinks';
  const searchIdURL = typeDrinkorMeal === 'comidas' ? 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' : 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  useEffect(() => {
    // if (url.includes('comidas')) {
    //   setSearchIdURL('https://www.themealdb.com/api/json/v1/1/lookup.php?i=');
    //   setType('meals');
    // }
    // if (url.includes('bebidas')) {
    //   setSearchIdURL('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=');
    //   setType('drinks');
    // }
    fetch(`${searchIdURL}${id}`)
      .then((response) => response.json())
      .then((result) => setRecipe(result));
  }, [url, id, searchIdURL]);

  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    if (recipe && recipe[mealsOrDrinks]) {
      console.log(recipe[mealsOrDrinks]);
      const recipeKeys = Object.keys(recipe[mealsOrDrinks][0]);

      const ingredientsKeys = [];
      const measureKeys = [];
      recipeKeys.forEach((key) => {
        if (key.includes('strIngredient')) ingredientsKeys.push(key);
        if (key.includes('strMeasure')) measureKeys.push(key);
      });

      const recipeIngredints = [];
      ingredientsKeys.forEach((ingredient) => {
        recipeIngredints.push(recipe[mealsOrDrinks][0][ingredient]);
      });

      const recipeMeasure = [];
      measureKeys.forEach((measure) => {
        recipeMeasure.push(recipe[mealsOrDrinks][0][measure]);
      });

      const filteredIngredints = recipeIngredints.filter((ingredient) => ingredient);
      setIngredients(filteredIngredints);

      const filteredMeasures = recipeMeasure.filter((measure) => measure);
      setMeasures(filteredMeasures);
    }
  }, [recipe, mealsOrDrinks]);

  function getCorrectYoutubeURL(urlLink) {
    if (urlLink) {
      const youtubeVideoId = urlLink.split('?v=', 2)[1];
      const IFrameYtLink = `https://www.youtube.com/embed/${youtubeVideoId}`;

      return IFrameYtLink;
    }
  }

  const { pathname } = location;

  function renderMealDetails() {
    if (recipe.meals) {
      return (
        <div className="supply-card">
          <img
            data-testid="recipe-photo"
            src={ recipe.meals[0].strMealThumb }
            alt={ recipe.meals[0].strMeal }
          />
          <h1 data-testid="recipe-title">{ recipe.meals[0].strMeal }</h1>
          <button
            onClick={ () => copy(`http://localhost:3000${pathname}`) }
            type="button"
            data-testid="share-btn"
          >
            <img src={ shareIcon } alt="shareIcon" />
          </button>
          <FavoriteButton />
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
          <Link to={ `${pathname}/in-progress` }>
            <button
              className="start-recipe"
              type="button"
              data-testid="start-recipe-btn"
            >
              Continuar Receita
            </button>
          </Link>
          <div>Link copiado!</div>
        </div>
      );
    }
  }

  function renderDrinkDetails() {
    if (recipe.drinks) {
      return (
        <div className="supply-card">
          <img
            data-testid="recipe-photo"
            src={ recipe.drinks[0].strDrinkThumb }
            alt={ recipe.drinks[0].strDrink }
          />
          <h1 data-testid="recipe-title">{ recipe.drinks[0].strDrink }</h1>
          <button
            onClick={ () => copy(pathname) }
            type="button"
            data-testid="share-btn"
          >
            <img src={ shareIcon } alt="shareIcon" />
          </button>
          <FavoriteButton />
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
          <Link to={ `${pathname}/in-progress` }>
            <button
              className="start-recipe"
              type="button"
              data-testid="start-recipe-btn"
            >
              Continuar Receita
            </button>
          </Link>
        </div>
      );
    }
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
