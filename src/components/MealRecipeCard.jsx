import React from 'react';

function MealRecipeCard() {
  return (
    <div>
      <img data-testid="recipe-photo" alt="Taste recipe done" />
      <h2 data-testid="recipe-title">
        Título da receita
      </h2>
      <p data-testid="recipe-category"> Rascunho da categoria - under title</p>

      <button type="button" data-testid="share-btn">
        Rascunho do botão share
      </button>
      <button type="button" data-testid="favorite-btn">
        Rascunho do botão favorite s2
      </button>
    </div>
  );
}

export default MealRecipeCard;
