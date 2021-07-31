import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderDrink from '../Components/HeaderDrink';
import RecipesList from '../Components/RecipesList';
import FooterMenu from '../Components/FooterMenu';

class Drinks extends Component {
  render() {
    const { drinkAPIResponse: { drinks } } = this.props;
    return (
      <div>
        <HeaderDrink title="Bebidas" />
        { drinks.length === 1
          ? <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />
          : <RecipesList />}
        <FooterMenu />
      </div>
    );
  }
}

Drinks.propTypes = {
  drinkAPIResponse: PropTypes.shape({
    drinks: PropTypes.arrayOf(),
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  drinkAPIResponse: state.recipeReducer.drinksRecipes,
});

export default connect(mapStateToProps)(Drinks);
