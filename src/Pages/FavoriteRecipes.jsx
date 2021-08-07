import React, { Component } from 'react';
import HeaderWithoutSearch from '../Components/HeaderWithoutSearch';
import CardsFavoriteRecipes from '../Components/CardsFavoriteRecipes';

export default class FavoriteRecipes extends Component {
  constructor() {
    super();
    this.state = {
      myFavoriteRecipes: JSON.parse(localStorage.getItem('favoriteRecipes')),
    };
  }

  render() {
    const { myFavoriteRecipes } = this.state;
    return (
      <div>
        <header style={ ({ backgroundColor: 'gray' }) }>
          <HeaderWithoutSearch title="Receitas Favoritas" />
        </header>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
        <CardsFavoriteRecipes favorites={ myFavoriteRecipes } />
      </div>
    );
  }
}
