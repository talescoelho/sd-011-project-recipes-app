import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Share from '../images/shareIcon.svg';
import handleShareBtn from '../helpers/handleShareBtn';

import '../styles/DetailsRecipe.css';
import ButtonStartRecipe from './ButtonStartRecipe';
import ButtonFavoriteRecipe from './ButtonFavoriteRecipe';

function DetailsRecipe(props) {
  // comentario
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
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const getFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    if (getFavorite && getFavorite.some((recipe) => recipe.id === id)) {
      setFavorite(true);
    }
  }, [id]);

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
      <ButtonFavoriteRecipe
        setFavorite={ setFavorite }
        favorite={ favorite }
        recipes={ recipeData }
      />
      <iframe
        width="560"
        height="315"
        src={ `https://www.youtube.com/embed/${finalUrl}` }
        title="YouTube video player"
        frameBorder="0"
        data-testid="video"
        allowFullScreen
      />
      <ButtonStartRecipe id={ id } />
    </div>
  );
}

export default DetailsRecipe;

DetailsRecipe.propTypes = {
  recipeData: PropTypes.objectOf(String),
}.isRequired;
