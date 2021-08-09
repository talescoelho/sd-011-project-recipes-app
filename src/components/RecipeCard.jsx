import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';

// Adicionar biblioteca de compartilhar e imagem de coração para o favoritar.
function MealRecipeCard({ title, img, category, index }) {
  return (
    <div data-testid={ `${index}-recomendation-card` }>
      <img data-testid="recipe-photo" alt="Foto da receita" src={ img } />
      <br />

      <span data-testid="recipe-title">
        {`${title} `}
      </span>
      <button type="button" data-testid="share-btn">
        botão share
      </button>
      <button type="button" data-testid="favorite-btn">
        botão favorite s2
      </button>

      <p data-testid="recipe-category">
        {category}
      </p>
      <FavoriteButton />
    </div>
  );
}

export default MealRecipeCard;

MealRecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
