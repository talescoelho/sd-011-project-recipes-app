import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Share from '../images/shareIcon.svg';
import WhiteHeart from '../images/whiteHeartIcon.svg';
import BlackHeart from '../images/blackHeartIcon.svg';

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
  } = recipeData;

  const [disabled, setDisabled] = useState(false);
  const [btnName, setBtnName] = useState('Iniciar Receita');

  const handleButtonStartRecipe = (recipeId) => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgress = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes && doneRecipes === recipeId) {
      setDisabled(true);
    }
    if (inProgress && inProgress === recipeId) {
      setDisabled(false);
      setBtnName('Continuar Receita');
    }
  };
  useEffect(() => {
    handleButtonStartRecipe('52977');
  }, []);

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

  const handleShareBtn = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    return alert('Link copiado!');
  };

  const handleFavoriteBtn = () => {
    
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
      <button type="button" data-testid="favorite-btn">Favoritar</button>
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
