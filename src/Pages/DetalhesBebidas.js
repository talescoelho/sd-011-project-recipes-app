import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RenderRecomendations from '../components/RenderRecomendations';
import {
  getRecipes,
  setInput } from '../redux/slices/fetchReceitas';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';
import nonFavoriteIcon from '../images/whiteHeartIcon.svg';
import '../Footer.css';

const copy = require('clipboard-copy');

const getIngredients2 = (obj, type) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const indexes = keys.reduce(((arr, key, index) => {
    if (key.includes(type)) return [...arr, index];
    return arr;
  }), []);
  const response = [];
  indexes.forEach((ind, index) => {
    if (!['', ' ', null].includes(values[ind])) {
      const tag = (
        <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
          { values[ind] }
        </li>
      );
      response.push(tag);
    }
  });
  return response;
};

const deleteFavorite = (idRecipe) => {
  const arrayStoraged = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const arrayToStorage = arrayStoraged.filter(({ id }) => id !== idRecipe);
  localStorage.setItem('favoriteRecipes', JSON.stringify(arrayToStorage));
};

const setFavorite = (recipe) => {
  const { strDrinkThumb, strDrink, idDrink, strCategory, strAlcoholic } = recipe;

  const objToStorage = {
    id: idDrink,
    type: 'bebida',
    area: '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic,
    name: strDrink,
    image: strDrinkThumb,
  };
  const arrayStoraged = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const arrayToStorage = [...arrayStoraged, objToStorage];
  localStorage.setItem('favoriteRecipes', JSON.stringify(arrayToStorage));
};

const verifyFavorite = (idRecipe) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  console.log('Veify:', favorites.some(({ id }) => id === idRecipe));
  return favorites.some(({ id }) => id === idRecipe);
};

function DetalhesBebidas() {
  const { data, loading } = useSelector((state) => state.fetchReceitas);
  const [recipeType, setRecipeType] = useState('');
  const [recipe, setRecipe] = useState({});
  const [copyOk, setCopyOk] = useState(false);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    const { pathname } = window.location;
    const recipeURL = pathname.split('/')[1];
    const recipeId = pathname.split('/')[2];
    const action = recipeURL === 'comidas'
      ? 'foodDetails'
      : 'drinkDetails';
    dispatch(setInput(recipeId));
    dispatch(getRecipes(action));
    setRecipeType(recipeURL);
    dispatch(getRecipes('foods'));
    setIsFavorite(verifyFavorite(recipeId));
  }, [dispatch]);

  useEffect(() => {
    if (recipeType !== '' && (Object.keys(data).length > 0)) {
      const recipeObj = recipeType === 'comidas'
        ? data.meals[0]
        : data.drinks[0];
      setRecipe(recipeObj);
    }
  }, [recipeType, data]);

  if (Object.keys(recipe).length === 0 || loading) {
    return <p>Loading..</p>;
  }

  const guide = () => {
    if (isFavorite) {
      deleteFavorite(recipe.idDrink);
      setIsFavorite(false);
    } else {
      setFavorite(recipe);
      setIsFavorite(true);
    }
  };

  return (
    <div>
      <img
        src={ recipe.strDrinkThumb }
        alt={ recipe.strDrink }
        data-testid="recipe-photo"
        width="25px"
      />
      <h1 data-testid="recipe-title">{ recipe.strDrink }</h1>
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
      <h5 data-testid="recipe-category">{ recipe.strAlcoholic }</h5>
      <ol>
        { getIngredients2(recipe, 'strIngredient') }
      </ol>
      <ol>
        { getIngredients2(recipe, 'strMeasure') }
      </ol>
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      <iframe
        width="200"
        height="150"
        title={ recipe.strMeal }
        src={ recipe.strYoutube }
        data-testid="video"
      />
      <Link to={ `/bebidas/${recipe.idDrink}/in-progress` }>
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
      <RenderRecomendations typeReco="comidas" />
    </div>
  );
}

// Arrumar dinâmica do botão

export default DetalhesBebidas;
