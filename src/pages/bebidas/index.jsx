import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const TWELVE = 12;

class Bebidas extends Component {
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
        data-testid={ `${index}-recipe-card` }
        key={ item.idDrink }
      >
        <img
          alt="drink"
          src={ item.strDrinkThumb }
          data-testid={ `${index}-card-img` }
        />
        <span
          data-testid={ `${index}-card-name` }
        >
          {item.strDrink}
        </span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Header title="Bebidas" mode="bebidas" hasSearchBar />
        Main Bebidas
        {this.renderDrinks()}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allRecipes: state.recipes.allRecipes,
});

Bebidas.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Bebidas);
