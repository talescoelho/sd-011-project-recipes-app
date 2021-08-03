import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FoodDetails extends Component {
  render() {
    const { location: { state } } = this.props;

    return (
      <div>
        {state.strMeal}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodAPIResponse: state.recipeReducer.foodRecipes,
});

FoodDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(),
  }),
}.isRequired;

export default connect(mapStateToProps)(FoodDetails);
