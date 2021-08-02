import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderFood from '../Components/HeaderFood';
import RecipesList from '../Components/RecipesList';
import FooterMenu from '../Components/FooterMenu';
import { fetchReceiveRecipes } from '../Actions/food';

class Food extends Component {
  componentDidMount() {
    const { fetchRecipes } = this.props;
    fetchRecipes();
  }

  render() {
    const { history: { location: { pathname } } } = this.props;
    const { foodAPIResponse: { meals } } = this.props;
    return (
      <div>
        <HeaderFood title="Comidas" />
        { meals.length === 1
          ? <Redirect to={ `/comidas/${meals[0].idMeal}` } />
          : <RecipesList pathName={ pathname } />}
        <FooterMenu />
      </div>
    );
  }
}

Food.propTypes = {
  foodAPIResponse: PropTypes.shape({
    meals: PropTypes.arrayOf(),
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  foodAPIResponse: state.recipeReducer.foodRecipes,
  fetchRecipes: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchReceiveRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Food);
