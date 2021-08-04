import React from 'react';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';
import CategoryText from './CategoryText';

function MealRecipeCard() {
  return (
    <div>
      <img data-testid="recipe-photo" alt="Taste recipe done" />
      <h2 data-testid="recipe-title">
        Título
      </h2>
      <CategoryText />
      <ShareButton />
      <FavoriteButton />
      <p data-testid={ `${0}-ingredient-name-and-measure` }>
        Rascunho dos ingredientes
      </p>
      <p data-testid="instructions">
        Rascunho das instruções
      </p>
      <div data-testid="video">
        Videozinho (apenas para comidas)
      </div>
      <div data-testid={ `${0}-recomendation-card` }>
        Comidas recomendadas
      </div>
      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    </div>
  );
}

export default MealRecipeCard;

// A foto deve possuir o atributo data-testid="recipe-photo";
// O título deve possuir o atributo data-testid="recipe-title";
// O botão de compartilhar deve possuir o atributo data-testid="share-btn";
// O botão de favoritar deve possuir o atributo data-testid="favorite-btn";
// O texto da categoria deve possuir o atributo data-testid="recipe-category";
// Os ingredientes devem possuir o atributo data-testid="${index}-ingredient-name-and-measure";
// O texto de instruções deve possuir o atributo data-testid="instructions";
// O vídeo, presente somente na tela de comidas, deve possuir o atributo data-testid="video";
// O card de receitas recomendadas deve possuir o atributo data-testid="${index}-recomendation-card";
// O botão de iniciar receita deve possuir o atributo data-testid="start-recipe-btn";
