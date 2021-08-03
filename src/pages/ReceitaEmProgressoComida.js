import React, { Component } from 'react';
import * as api from '../services/API';

class ReceitaEmProgressoComida extends Component {
  constructor() {
    super();
    this.state = {
      meals: [],

    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const getAPI = await api.fetchMealDetails();
    this.setState({
      meals: getAPI,
    });
  }

  render() {
    const { meals } = this.state;
    const { strMealThumb, strMeal, strInstructions, strCategory } = meals;
    return (
      <main>
        <img src={ strMealThumb } data-testid="recipe-photo" alt="imagem-da-receita" />
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <h2 data-testid="recipe-category">{ strCategory }</h2>
        <p data-testid="instructions">{strInstructions}</p>
        <button type="button" data-testid="finish-recipe-btn">Finalizar receita</button>
      </main>
    );
  }
}

export default ReceitaEmProgressoComida;
