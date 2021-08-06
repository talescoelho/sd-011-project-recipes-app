import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import HeaderWithoutSearch from '../Components/HeaderWithoutSearch';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default class FavoriteRecipes extends Component {
  constructor() {
    super();
    this.state = {
      myFavoriteRecipes: JSON.parse(localStorage.getItem('favoriteRecipes')),
    };
  }

  render() {
    const { myFavoriteRecipes } = this.state;
    const lastIndexOfHrefLocattion = 5;
    const hrefLocationSplit = window.location.href.split('/');
    const hrefLocation = hrefLocationSplit
      .filter((_, index) => index !== lastIndexOfHrefLocattion);
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
              { recipe.area !== ''
                ? `${recipe.area} - ${recipe.category}` : `${recipe.alcoholicOrNot}`}
            </h6>
            <h4 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h4>
            <CopyToClipboard text={ hrefLocation.join('/') }>
              <button
                style={ { color: 'white',
                  backgroundColor: 'rgb(151, 0, 0)',
                  width: '100%' } }
                type="button"
                data-testid="share-btn"
              >
                <img
                  src={ shareIcon }
                  alt="share"
                  data-testid={ `${index}-horizontal-share-btn` }
                />
              </button>
            </CopyToClipboard>
            <img
              src={ blackHeartIcon }
              alt="share"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </div>))}
      </div>
    );
  }
}
