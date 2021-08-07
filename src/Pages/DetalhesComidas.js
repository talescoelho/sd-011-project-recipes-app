import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RenderRecomendations from '../components/RenderRecomendations';
import {
  getRecipes,
} from '../redux/slices/fetchReceitas';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';
import nonFavoriteIcon from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function DetalhesComidas() {
  const [recipe, setRecipe] = useState({});
  const dispatch = useDispatch();
  const [copyOk, setCopyOk] = useState(false);
  const [isFavorite, setIsFavorite] = useState();

  const fetchUrl = (url) => {
    fetch(url)
      .then((data) => data.json())
      .then((recipeData) => setRecipe(recipeData.meals[0]));
  };

  const verifyFavorite = (idRecipe) => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    console.log('Veify:', favorites.some(({ id }) => id === idRecipe));
    setIsFavorite(favorites.some(({ id }) => id === idRecipe));
  };

  useEffect(() => {
    const { pathname } = window.location;
    const recipeID = pathname.split('/')[2];
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`;
    fetchUrl(URL);
    dispatch(getRecipes('drinks'));
    verifyFavorite(recipeID);
  }, []);

  const getIngredients = (array, startIng, endIng, empty) => {
    const newArray = array.slice(startIng, endIng).filter((ing) => ing !== empty);
    return newArray.map((ingredient, index) => (
      <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
        { ingredient }
      </li>
    ));
  };

  const setFavorite = () => {
    const { strMealThumb, strMeal, idMeal, strArea, strCategory } = recipe; // strAlcoholic, type
    const objToStorage = {
      id: idMeal,
      type: 'comida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
    const arrayStoraged = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const arrayToStorage = [...arrayStoraged, objToStorage];
    localStorage.setItem('favoriteRecipes', JSON.stringify(arrayToStorage));
    setIsFavorite(true);
  };

  const deleteFavorite = (idRecipe) => {
    const arrayStoraged = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const arrayToStorage = arrayStoraged.filter(({ id }) => id !== idRecipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(arrayToStorage));
    setIsFavorite(false);
  };

  const guide = () => {
    if (isFavorite) deleteFavorite(recipe.idMeal);
    else setFavorite();
  };

  const nine = 9;
  const twentyeigth = 28;
  const twentynine = 29;
  const fourtynine = 49;

  return Object.keys(recipe).length === 0 ? (<p>Loading..</p>) : (
    <div>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        data-testid="recipe-photo"
        width="30px"
      />
      <h3 data-testid="recipe-title">{ recipe.strMeal }</h3>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => {
          copy(window.location);
          setCopyOk(true);
        } }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      { copyOk && <p>Link copiado!</p> }
      <button
        type="button"
        onClick={ guide }
      >
        <img
          src={ isFavorite ? favoriteIcon : nonFavoriteIcon }
          data-testid="favorite-btn"
          alt="share"
        />
      </button>
      <h5 data-testid="recipe-category">{ recipe.strCategory }</h5>
      <ol>
        { getIngredients(Object.values(recipe), nine, twentyeigth, '') }
      </ol>
      <ol>
        { getIngredients(Object.values(recipe), twentynine, fourtynine, ' ') }
      </ol>
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      <iframe
        width="200"
        height="150"
        title={ recipe.strMeal }
        src={ recipe.strYoutube }
        data-testid="video"
      />
      <Link to={ `/comidas/${recipe.idMeal}/in-progress` }>
        <button
          type="button"
          data-testid="start-recipe-btn"
          style={ {
            position: 'fixed',
            bottom: '0',
          } }
        >
          Continuar Receita
        </button>
      </Link>
      <RenderRecomendations typeReco="bebidas" />
    </div>
  );
}

// Arrumar dinâmica do botão

export default DetalhesComidas;
