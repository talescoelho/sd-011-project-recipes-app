import React from 'react';

export default function DetailsDrinks() {
  const mockData = {
    url: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
    title: 'title',
    category: 'category',
    ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3'],
    instructions: 'instructions',
    video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    recomendedRevenueCard: ['revenue recomended 1',
      'revenue recomended 2', 'revenue recomended 3'],
  };

  return (
    <main>
      <img
        data-testid="recipe-photo"
        src={ mockData.url }
        alt="flor amarela"
        width="100px"
        height="100px"
      />
      <h1 data-testid="recipe-title">{ mockData.title }</h1>
      <button data-testid="share-btn" type="button">share</button>
      <button data-testid="favorite-btn" type="button">favorite</button>
      <h4 data-testid="recipe-category">{ mockData.category }</h4>
      { mockData.ingredients.map((ingredient, index) => (
        <span
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          { ingredient }
        </span>
      )) }
      <span data-testid="instructions">{ mockData.instructions }</span>
      <iframe
        title="moto"
        data-testid="video"
        src={ mockData.video }
        width="420"
        height="345"
      />
      {mockData.recomendedRevenueCard.map((revenue, index) => (
        <span
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          { revenue }
        </span>
      ))}
      <button data-testid="start-recipe-btn" type="button">Start</button>
    </main>
  );
}
