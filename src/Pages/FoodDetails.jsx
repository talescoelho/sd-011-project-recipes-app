import React, { Component } from 'react';
import { connect } from 'react-redux';

class FoodDetails extends Component {
  render() {
    // const { location: { state } } = this.props;
    console.log(state);

    return (
      <div>
        Gambiarra
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodAPIResponse: state.recipeReducer.foodRecipes,
});

export default connect(mapStateToProps)(FoodDetails);
