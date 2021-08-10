import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header } from '../components';
import DrinkFavoriteButton from '../components/DrinkFavoriteButton';
import DrinkShareButton from '../components/DrinkShareButton';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';
import { saveFavoritesRedux } from '../redux/actions/foodActions';

class FavoriteRecipes extends Component {
  constructor() {
    super();
    this.state = {
      filter: '',
    };
  }

  componentDidMount() {
    const { updateFavorites } = this.props;
    const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    updateFavorites(localFavorites);
  }

  FilterList(filter) {
    this.setState({
      filter,
    });
  }

  render() {
    const { favoriteRecipes } = this.props;
    const { filter } = this.state;
    return (
      <div>
        <Header title="Receitas Favoritas" search={ false } />
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => this.FilterList('') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => this.FilterList('comida') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => this.FilterList('bebida') }
        >
          Drink
        </button>
        {favoriteRecipes && favoriteRecipes.filter((item) => item.type.includes(filter))
          .map((item, index) => {
            if (item.type === 'comida') {
              return (
                <li key={ item.id }>
                  <Link to={ `/comidas/${item.id}` }>
                    <img
                      src={ item.image }
                      alt="foto da receita"
                      data-testid={ `${index}-horizontal-image` }
                      height="200px"
                      width="200px"
                    />
                    <p data-testid={ `${index}-horizontal-top-text` }>
                      { `${item.area} - ${item.category}` }
                    </p>
                    <p data-testid={ `${index}-horizontal-name` }>
                      { item.name }
                    </p>
                  </Link>
                  <ShareButton test={ `${index}-horizontal-share-btn` } id={ item.id } />
                  <FavoriteButton
                    test={ `${index}-horizontal-favorite-btn` }
                    id={ item.id }
                  />
                </li>
              );
            }

            return (
              <li key={ item.id }>
                <Link to={ `/bebidas/${item.id}` }>
                  <img
                    src={ item.image }
                    alt="foto da receita"
                    data-testid={ `${index}-horizontal-image` }
                    height="200px"
                    width="200px"
                  />
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    { item.alcoholicOrNot }
                  </p>
                  <p data-testid={ `${index}-horizontal-name` }>
                    { item.name }
                  </p>
                </Link>
                <DrinkShareButton
                  test={ `${index}-horizontal-share-btn` }
                  id={ item.id }
                />
                <DrinkFavoriteButton
                  test={ `${index}-horizontal-favorite-btn` }
                  id={ item.id }
                />
              </li>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteRecipes: state.foodReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  updateFavorites: (list) => dispatch(saveFavoritesRedux(list)),
});

FavoriteRecipes.propTypes = {
  favoriteRecipes: PropTypes.array,
  updateFavorites: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteRecipes);
