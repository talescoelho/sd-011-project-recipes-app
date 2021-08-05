import React from 'react';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';
import CategoryText from './CategoryText';

function DrinksRecipeCard() {
  return (
    <div>
      <img data-testid="recipe-photo" alt="Taste recipe done" />
      <h2 data-testid="recipe-title">
        Título
      </h2>
      <CategoryText />
      <ShareButton />
      <FavoriteButton />
      <p data-testid={ `${index}-ingredient-name-and-measure` }>
        Rascunho dos ingredientes
      </p>
      <p data-testid="instructions">
        Rascunho das instruções
      </p>
      <div data-testid={ `${index}-recomendation-card` }>
        Bebidas recomendadas
      </div>
      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    </div>
  );
}

export default DrinksRecipeCard;
