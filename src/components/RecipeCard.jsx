import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';

// Adicionar biblioteca de compartilhar e imagem de coração para o favoritar.
function MealRecipeCard({ title, img, category }) {
  return (
    <div>
      <img data-testid="recipe-photo" alt="Taste recipe done" src={ img } />
      <h2 data-testid="recipe-title">
        {title}
      </h2>
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
};
