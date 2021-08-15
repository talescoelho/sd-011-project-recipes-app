import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

// Adicionar biblioteca de compartilhar e imagem de coração para o favoritar.
function MealRecipeCard({ data }) {
  return (
    <div>

      <img
        height="200px"
        width="200px"
        data-testid="recipe-photo"
        alt="Foto da receita"
        src={ data.image }
      />

      <br />

      <span data-testid="recipe-title">
        {`${data.name} `}
      </span>

      <p data-testid="recipe-category">
        {(data.alcoholicOrNot) ? data.alcoholicOrNot : data.category}
      </p>

      <ShareButton test="share-btn" URL={ `/${data.type}s/${data.id}` } />
      <FavoriteButton test="favorite-btn" data={ data } />
    </div>
  );
}

export default MealRecipeCard;

MealRecipeCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
