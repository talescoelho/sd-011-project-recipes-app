import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as actions from '../../actions';

const TWELVE = 12;
const FIVE = 5;

class Bebidas extends Component {
  componentDidMount() {
    const { generalRecipesDrink, categoriesDrink } = this.props;
    generalRecipesDrink();
    categoriesDrink();
  }

  handleOnClickFilter(element) {
    const { filteredDrinks } = this.props;
    filteredDrinks(element.target.value);
  }

  renderFilters() {
    let { allCategories } = this.props;
    allCategories = allCategories.slice(0, FIVE);

    return allCategories.map((item, index) => (
      <button
        className="filter-btn"
        type="button"
        data-testid={ `${item.strCategory}-category-filter` }
        key={ index }
        value={ item.strCategory }
        onClick={ (target) => this.handleOnClickFilter(target) }
      >
        {item.strCategory}
      </button>
    ));
  }

  renderDrinks() {
    const { allRecipes, isFiltered } = this.props;
    const allRecipesSlice = allRecipes.slice(0, TWELVE);
    if (allRecipesSlice.length === 1 && !isFiltered) {
      return (
        <Redirect to={ `/bebidas/${allRecipesSlice[0].idDrink}` } />
      );
    }
    return allRecipesSlice.map((item, index) => (
      <div
        className="card-item"
        data-testid={ `${index}-recipe-card` }
        key={ item.idDrink }
      >
        <img
          className="img-card"
          alt="drinks"
          src={ item.strDrinkThumb }
          data-testid={ `${index}-card-img` }
        />
        <div>
          <span
            data-testid={ `${index}-card-name` }
          >
            {item.strDrink}
          </span>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <>
        <Header title="Bebidas" mode="bebidas" hasSearchBar />
        <div className="container-main">
          <div className="filter-list">
            {this.renderFilters()}
          </div>
          <div className="card-list">
            {this.renderDrinks()}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  allRecipes: state.recipes.allRecipes,
  allCategories: state.recipes.allCategories,
  isFiltered: state.recipes.isFiltered,
});

const mapDispatchToProps = (dispatch) => ({
  generalRecipesDrink: () => dispatch(actions.generalRecipesDrink()),
  categoriesDrink: () => dispatch(actions.categoriesDrink()),
  filteredDrinks: (filter) => dispatch(actions.filteredDrinks(filter)),
});

Bebidas.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  generalRecipesDrink: PropTypes.func.isRequired,
  categoriesDrink: PropTypes.func.isRequired,
  allCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredDrinks: PropTypes.func.isRequired,
  isFiltered: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bebidas);
