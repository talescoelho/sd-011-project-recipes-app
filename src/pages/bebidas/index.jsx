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

  renderFilters() {
    let { allCategories } = this.props;
    allCategories = allCategories.slice(0, FIVE);

    return allCategories.map((item, index) => (
      <button
        className="filter-btn"
        type="button"
        data-testid={ `${item.strCategory}-category-filter` }
        key={ index }
      >
        {item.strCategory}
      </button>
    ));
  }

  renderDrinks() {
    let { allRecipes } = this.props;
    allRecipes = allRecipes.slice(0, TWELVE);
    if (allRecipes.length === 1) {
      return (
        <Redirect to={ `/bebidas/${allRecipes[0].idDrink}` } />
      );
    }
    return allRecipes.map((item, index) => (
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
      <div>
        <Header title="Bebidas" mode="bebidas" hasSearchBar />
        <div className="filter-list">
          {this.renderFilters()}
        </div>
        <div className="card-list">
          {this.renderDrinks()}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allRecipes: state.recipes.allRecipes,
  allCategories: state.recipes.allCategories,
});

const mapDispatchToProps = (dispatch) => ({
  generalRecipesDrink: () => dispatch(actions.generalRecipesDrink()),
  categoriesDrink: () => dispatch(actions.categoriesDrink()),
});

Bebidas.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  generalRecipesDrink: PropTypes.func.isRequired,
  categoriesDrink: PropTypes.func.isRequired,
  allCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bebidas);
