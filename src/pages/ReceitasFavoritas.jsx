import React, { Component } from 'react';
import FiltersDoneAndFavorites from '../components/FiltersDoneAndFavorites';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Header from '../components/Header';

export default class ReceitasFavoritas extends Component {
  constructor() {
    super();
    this.state = {
      itemsToRender: [],
    };
  }

  componentDidMount() {
    this.teste();
  }

  teste() {
    this.setState({
      itemsToRender: JSON.parse(localStorage.getItem('favoriteRecipes')),
    });
  }

  renderItems() {
    const { itemsToRender } = this.state;
    return itemsToRender.map((item) => {
      if (item.type === 'comida') {
        return (
          <div key={ item.id }>
            <h3 data-testid="0-horizontal-name">{item.name}</h3>
            <img
              data-testid="0-horizontal-image"
              src={ item.image }
              alt="imagem comida"
              style={ { width: '50px' } }
            />
            <p data-testid="0-horizontal-top-text">
              { item.area }
              {' '}
              -
              {' '}
              { item.category }
            </p>
            <button type="button">
              <img data-testid="0-horizontal-share-btn" src={ shareIcon } alt="share" />
            </button>
            <button type="button">
              <img
                data-testid="0-horizontal-favorite-btn"
                src={ blackHeartIcon }
                alt="White Heart"
              />
            </button>
          </div>);
      }
      return (
        <div key={ item.id }>
          <h3 data-testid="1-horizontal-name">{item.name}</h3>
          <img
            data-testid="1-horizontal-image"
            src={ item.image }
            alt="imagem bebida"
            style={ { width: '50px' } }
          />
          <p data-testid="1-horizontal-top-text">{ item.alcoholicOrNot }</p>
          <button type="button">
            <img data-testid="1-horizontal-share-btn" src={ shareIcon } alt="share" />
          </button>
          <button type="button">
            <img
              data-testid="1-horizontal-favorite-btn"
              src={ blackHeartIcon }
              alt="White Heart"
            />
          </button>
        </div>);
    });
  }

  render() {
    return (
      <div>
        <Header title="Receitas Favoritas" />
        <FiltersDoneAndFavorites />
        { this.renderItems() }
      </div>
    );
  }
}
