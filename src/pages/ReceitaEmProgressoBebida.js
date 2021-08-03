import React, { Component } from 'react';

class ReceitaEmProgressoBebida extends Component {
  render() {
    return (
      <main>
        <img data-testid="recipe-photo" alt="imagem-da-receita" />
        <h1 data-testid="recipe-title">title</h1>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <p data-testid="recipe-category">categoria</p>
        <span data-testid="instructions">Instruções</span>
        <button type="button" data-testid="finish-recipe-btn">Finalizar receita</button>
      </main>
    );
  }
}

export default ReceitaEmProgressoBebida;
