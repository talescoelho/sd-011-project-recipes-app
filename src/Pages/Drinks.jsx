import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderDrink from '../Components/HeaderDrink';
import RecipesList from '../Components/RecipesList';
import FooterMenu from '../Components/FooterMenu';
import { fetchReceiveRecipes } from '../Actions/drink';

class Drinks extends Component {
  componentDidMount() {
    const { fetchRecipes } = this.props;
    fetchRecipes();
  }

  render() {
    const { drinkAPIResponse: { drinks } } = this.props;
    const { history: { location: { pathname } } } = this.props;
    return (
      <div>
        <HeaderDrink title="Bebidas" />
        { drinks.length === 1
          ? <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />
          : <RecipesList pathName={ pathname } />}
        <FooterMenu />
      </div>
    );
  }
}

Drinks.propTypes = {
  drinkAPIResponse: PropTypes.shape({
    drinks: PropTypes.arrayOf(),
  }),
  fetchRecipes: PropTypes.func.isRequired,
}.isRequired;

const mapStateToProps = (state) => ({
  drinkAPIResponse: state.recipeReducer.drinksRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchReceiveRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
