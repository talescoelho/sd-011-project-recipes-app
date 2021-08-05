import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FiltersDoneAndFavorites from '../components/FiltersDoneAndFavorites';
import shareIcon from '../images/shareIcon.svg';

class ReceitasFeitas extends Component {
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
    if (JSON.parse(localStorage.getItem('doneRecipes')) !== null) {
      this.setState({
        itemsToRender: JSON.parse(localStorage.getItem('doneRecipes')),
        itemsToRenderBD: JSON.parse(localStorage.getItem('doneRecipes')),
      });
    }
  }

  setItemsToRenderFiltered(comidaOrBebida) {
    if (localStorage.getItem('doneRecipes') !== null) {
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
          itemsToRender: JSON.parse(localStorage.getItem('doneRecipes')),
          itemsToRenderBD: JSON.parse(localStorage.getItem('doneRecipes')),
        });
      }
    }
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
          <div key={ index }>
            <div
              onClick={ () => this.redirectToRecipeDetails(item.id, 'comidas') }
              onKeyDown={ () => this.redirectToRecipeDetails(item.id, 'comidas') }
              role="button"
              tabIndex="0"
            >
              <p data-testid={ `${index}-horizontal-name` }>{item.name}</p>
              <img
                src={ item.image }
                alt="recipe representation"
                data-testid={ `${index}-horizontal-image` }
                style={ { width: '50px' } }
              />
            </div>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {item.area}
              {' '}
              -
              {' '}
              {item.category}
            </p>
            <p data-testid={ `${index}-horizontal-done-date` }>{item.doneDate}</p>
            {
              item.tags.map(
                (tag, index2) => {
                  const finalIndex = 2;
                  if (index2 < finalIndex) {
                    return (
                      <p
                        key={ index2 }
                        data-testid={ `${index}-${tag}-horizontal-tag` }
                      >
                        {tag}
                      </p>);
                  }
                  return console.log('teste');
                },

              )
            }
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
            {shareButton ? <span style={ { color: 'red' } }>Link copiado!</span> : null}
          </div>
        );
      }
      return (
        <div key={ index }>
          <div
            onClick={ () => this.redirectToRecipeDetails(item.id, 'bebidas') }
            onKeyDown={ () => this.redirectToRecipeDetails(item.id, 'bebidas') }
            role="button"
            tabIndex="0"
          >
            <p data-testid={ `${index}-horizontal-name` }>{item.name}</p>
            <img
              src={ item.image }
              alt="recipe representation"
              data-testid={ `${index}-horizontal-image` }
              style={ { width: '50px' } }
            />

          </div>
          <p data-testid={ `${index}-horizontal-top-text` }>{item.alcoholicOrNot}</p>
          <p data-testid={ `${index}-horizontal-done-date` }>{item.doneDate}</p>

          <button
            onClick={ () => this.shareLinkClick(item.id, 'bebidas') }
            type="button"
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="share"
            />
          </button>
          {shareButton ? <span style={ { color: 'red' } }>Link copiado!</span> : null}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Header title="Receitas Feitas" />
        <FiltersDoneAndFavorites filterPerType={ this.setItemsToRenderFiltered } />
        { this.renderItems() }
      </div>
    );
  }
}

ReceitasFeitas.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default ReceitasFeitas;
