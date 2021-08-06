import React, { Component } from 'react';
import HeaderWithoutSearch from '../Components/HeaderWithoutSearch';

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
        {myFavoriteRecipes.map((recipe, index) => (
          <div key={ index }>
            <img
              alt="imagem"
              src={ recipe.image }
              width="150px"
              data-testid={ `${index}-horizontal-image` }
            />
            <h6
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${recipe.area} - ${recipe.type}`}
            </h6>
            <h4 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h4>
          </div>))}
      </div>
    );
  }
}
