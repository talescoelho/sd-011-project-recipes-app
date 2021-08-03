import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Share from '../images/shareIcon.svg';
import WhiteHeart from '../images/whiteHeartIcon.svg';
import BlackHeart from '../images/blackHeartIcon.svg';
import handleShareBtn from '../helpers/handleShareBtn';

import '../styles/DetailsRecipe.css';

function DetailsRecipe(props) {
  const { recipeData } = props;
  const {
    ingredients,
    ingredientsQuantity,
    imgUrl,
    instructions,
    title,
    category,
    video,
    id,
    strAlcoholic,
  } = recipeData;

  const [disabled, setDisabled] = useState(false);
  const [btnName, setBtnName] = useState('Iniciar Receita');
  const [favorite, setFavorite] = useState(false);

  const handleButtonStartRecipe = (recipeId) => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgress = JSON.parse(localStorage.getItem('inProgress'));
    if (doneRecipes && doneRecipes === recipeId) {
      setDisabled(true);
    }
    if (inProgress && inProgress === recipeId) {
      setDisabled(false);
      setBtnName('Continuar Receita');
    }
  };

  useEffect(() => {
    handleButtonStartRecipe(id);
    const getFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    if (getFavorite && getFavorite.some((recipe) => recipe.id === id)) {
      setFavorite(true);
    }
  }, [id]);

  const history = useHistory();
  const location = useLocation();

  const handleStartClickBtn = () => {
    if (location.pathname.includes('comidas')) {
      history.push(`/comidas/${id}/in-progress`);
    }
    if (location.pathname.includes('bebidas')) {
      history.push(`/bebidas/${id}/in-progress`);
    }
  };

  const createFavoriteObject = () => {
    let favoriteRecipeObj = {};
    if (location.pathname.includes('comidas')) {
      favoriteRecipeObj = {
        id,
        type: 'comida',
        area: '',
        category,
        alcoholicOrNot: '',
        name: title,
        image: imgUrl,
      };
    }
    if (location.pathname.includes('bebidas')) {
      favoriteRecipeObj = {
        id,
        type: 'bebida',
        area: '',
        category,
        alcoholicOrNot: strAlcoholic,
        name: title,
        image: imgUrl,
      };
    }
    return favoriteRecipeObj;
  };

  const favoriteRecipe = createFavoriteObject();

  const handleFavoriteBtn = () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    const parsedLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favorite) {
      setFavorite(true);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...parsedLocalStorage,
        favoriteRecipe]));
    }
    if (favorite) {
      setFavorite(false);
      const favoriteRecipeArr = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const removeRecipe = favoriteRecipeArr.filter((recipe) => recipe.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify([removeRecipe]));
    }
  };

  if (!video) return null;
  const videoParameter = -11;
  const finalUrl = video.slice(videoParameter);

  return (
    <div>
      <h1 data-testid="recipe-title">{ title }</h1>
      <img src={ imgUrl } alt={ title } data-testid="recipe-photo" />
      <p data-testid="recipe-category">{ category }</p>
      <Ingredients
        ingredients={ ingredients }
        ingredientsQuantity={ ingredientsQuantity }
      />
      <p data-testid="instructions">{ instructions }</p>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => { handleShareBtn(); } }
      >
        <img src={ Share } alt="share button" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => { handleFavoriteBtn(); } }
      >
        { favorite ? <img
          src={ BlackHeart }
          alt="favorite"
        /> : <img src={ WhiteHeart } alt="Nonfavorite" /> }
      </button>
      <iframe
        width="560"
        height="315"
        src={ `https://www.youtube.com/embed/${finalUrl}` }
        title="YouTube video player"
        frameBorder="0"
        data-testid="video"
        allowFullScreen
      />
      <button
        type="button"
        className="details-btn"
        disabled={ disabled }
        onClick={ () => { handleStartClickBtn(); } }
      >
        { btnName }
      </button>
    </div>
  );
}

export default DetailsRecipe;

DetailsRecipe.propTypes = {
  recipeData: PropTypes.objectOf(String),
}.isRequired;
