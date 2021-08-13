import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Share from '../images/shareIcon.svg';
import handleShareBtn from '../helpers/handleShareBtn';
import LinkCopy from './LinkCopy';

import '../styles/DetailsRecipe.css';
import ButtonStartRecipe from './ButtonStartRecipe';
import ButtonFavoriteRecipe from './ButtonFavoriteRecipe';
import Recommendations from './Recommendations';

function DetailsRecipe(props) {
  const { recipeData } = props;
  const {
    ingredients,
    ingredientsQuantity,
    imgUrl,
    instructions,
    title,
    category,
    strAlcoholic,
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

  const videoParameter = -11;
  const finalUrl = video && video.slice(videoParameter);

  const [linkCopy, setLinkCopy] = useState(false);

  const handleLinkMessage = () => {
    setLinkCopy(true);
  };

  return (
    <div>
      <h1 data-testid="recipe-title">{ title }</h1>
      <img
        src={ imgUrl }
        alt={ title }
        className="recipe-img"
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-category">{ !strAlcoholic ? category : strAlcoholic}</p>
      <Ingredients
        ingredients={ ingredients }
        ingredientsQuantity={ ingredientsQuantity }
      />
      <p data-testid="instructions">{ instructions }</p>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => { handleShareBtn(); handleLinkMessage(); } }
      >
        <img src={ Share } alt="share button" />
      </button>
      { linkCopy && <LinkCopy /> }
      <ButtonFavoriteRecipe
        setFavorite={ setFavorite }
        favorite={ favorite }
        recipes={ recipeData }
      />
      { video && <iframe
        width="260"
        height="315"
        src={ `https://www.youtube.com/embed/${finalUrl}` }
        title="YouTube video player"
        frameBorder="0"
        data-testid="video"
        allowFullScreen
      /> }
      <Recommendations />
      <ButtonStartRecipe
        id={ id }
        recipeData={ recipeData }
      />
    </div>
  );
}

export default DetailsRecipe;

DetailsRecipe.propTypes = {
  recipeData: PropTypes.objectOf(String),
}.isRequired;
