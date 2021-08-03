import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FiltersDoneAndFavorites from '../components/FiltersDoneAndFavorites';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Header from '../components/Header';

export default class ReceitasFavoritas extends Component {
  constructor() {
    super();
    this.state = {
      itemsToRender: [],
      itemsToRenderBD: [],
      shareButton: false,
    };
    this.setItemsToRenderFiltered = this.setItemsToRenderFiltered.bind(this);
  }

  componentDidMount() {
    this.setItemsToRender();
  }

  setItemsToRender() {
    this.setState({
      itemsToRender: JSON.parse(localStorage.getItem('favoriteRecipes')),
      itemsToRenderBD: JSON.parse(localStorage.getItem('favoriteRecipes')),
    });
  }

  setItemsToRenderFiltered(comidaOrBebida) {
    const { itemsToRenderBD } = this.state;
    if (comidaOrBebida === 'comida' || comidaOrBebida === 'bebida') {
      const filterdPerType = itemsToRenderBD.filter(
        (recipe) => recipe.type === comidaOrBebida,
      );
      this.setState({
        itemsToRender: filterdPerType,
      });
    } else {
      this.setState({
        itemsToRender: JSON.parse(localStorage.getItem('favoriteRecipes')),
        itemsToRenderBD: JSON.parse(localStorage.getItem('favoriteRecipes')),
      });
    }
  }

  removeFavorite(id) {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const removedFavorite = favoriteItems.filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(removedFavorite));
    this.setState({
      itemsToRender: removedFavorite,
    });
  }

  redirectToRecipeDetails(id, foodOrDrink) {
    const { history } = this.props;
    history.push(`/${foodOrDrink}/${id}`);
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
    return itemsToRender.map((item, index) => {
      if (item.type === 'comida') {
        return (
          <div key={ item.id }>
            <div
              onClick={ () => this.redirectToRecipeDetails(item.id, 'comidas') }
              onKeyDown={ () => this.redirectToRecipeDetails(item.id, 'comidas') }
              role="button"
              tabIndex="0"
            >
              <h3 data-testid={ `${index}-horizontal-name` }>{item.name}</h3>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ item.image }
                alt="imagem comida"
                style={ { width: '50px' } }
              />
            </div>
            <p data-testid={ `${index}-horizontal-top-text` }>
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
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                alt="share"
              />
            </button>
            <button onClick={ () => this.removeFavorite(item.id) } type="button">
              <img
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
                alt="White Heart"
              />
            </button>
            {shareButton ? <span style={ { color: 'red' } }>Link copiado!</span> : null}
          </div>);
      }
      return (
        <div key={ item.id }>
          <div
            onClick={ () => this.redirectToRecipeDetails(item.id, 'bebidas') }
            onKeyDown={ () => this.redirectToRecipeDetails(item.id, 'bebidas') }
            role="button"
            tabIndex="0"
          >
            <h3 data-testid={ `${index}-horizontal-name` }>{item.name}</h3>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ item.image }
              alt="imagem bebida"
              style={ { width: '50px' } }
            />
          </div>
          <p data-testid={ `${index}-horizontal-top-text` }>{ item.alcoholicOrNot }</p>
          <button onClick={ () => this.shareLinkClick(item.id, 'bebidas') } type="button">
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="share"
            />
          </button>
          <button onClick={ () => this.removeFavorite(item.id) } type="button">
            <img
              data-testid={ `${index}-horizontal-favorite-btn` }
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
        <FiltersDoneAndFavorites filterPerType={ this.setItemsToRenderFiltered } />
        { this.renderItems() }
      </div>
    );
  }
}

ReceitasFavoritas.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
