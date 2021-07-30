import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderFood from '../Components/HeaderFood';

class Food extends Component {
  render() {
    const { foodAPIResponse: { meals } } = this.props;
    console.log(meals);
    return (
      <div>
        <HeaderFood title="Comidas" />
        { meals.length === 1
          ? <Redirect to={ `/comidas/${meals[0].idMeal}` } />
          : <p>Renderiza</p>}
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
});

export default connect(mapStateToProps)(Food);
