import React from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';

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
  } = recipeData;

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
      <button type="button" data-testid="share-btn">Compartilhar</button>
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

    </div>
  );
}

export default DetailsRecipe;

DetailsRecipe.propTypes = {
  recipeData: PropTypes.objectOf(String),
}.isRequired;
