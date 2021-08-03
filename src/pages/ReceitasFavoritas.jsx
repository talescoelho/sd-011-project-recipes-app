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
      // shareButton: false,
    };
  }

  componentDidMount() {
    this.setItemsToRender();
  }

  setItemsToRender() {
    this.setState({
      itemsToRender: JSON.parse(localStorage.getItem('favoriteRecipes')),
    });
  }

  shareLinkClick(id, foodOrDrink) {
    const magicNumber = 2000;
    navigator.clipboard.writeText(`${window.location.origin}/${foodOrDrink}/${id}`);
    this.setState({ shareButton: true });
    setTimeout(() => this.setState({
      shareButton: false,
    }), magicNumber);
  }

  renderItems() {
    const { itemsToRender, shareButton } = this.state;
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
            <button
              onClick={ () => this.shareLinkClick(item.id, 'comidas') }
              type="button"
            >
              <img data-testid="0-horizontal-share-btn" src={ shareIcon } alt="share" />
            </button>
            <button type="button">
              <img
                data-testid="0-horizontal-favorite-btn"
                src={ blackHeartIcon }
                alt="White Heart"
              />
            </button>
            {shareButton ? <span style={ { color: 'red' } }>Link copiado!</span> : null}
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
          <button onClick={ () => this.shareLinkClick(item.id, 'bebidas') } type="button">
            <img data-testid="1-horizontal-share-btn" src={ shareIcon } alt="share" />
          </button>
          <button type="button">
            <img
              data-testid="1-horizontal-favorite-btn"
              src={ blackHeartIcon }
              alt="White Heart"
            />
          </button>
          {shareButton ? <span style={ { color: 'red' } }>Link copiado!</span> : null}
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
