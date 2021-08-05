import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFoodID, fetchDrinkRecomendations } from '../redux/actions/foodActions';
import { DrinkCards, FoodDetailsCard } from '../components';
import StartRecipe from '../components/StartRecipe';

class FoodDetails extends Component {
  componentDidMount() {
    const { match: { params: { id } }, fetchFoodByID, fetchDrink } = this.props;
    fetchFoodByID(id);
    fetchDrink('');
  }

  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <FoodDetailsCard />
        <DrinkCards recomendation />
        <StartRecipe id={ id } />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchFoodByID: (id) => dispatch(fetchFoodID(id)),
  fetchDrink: (name) => dispatch(fetchDrinkRecomendations(name)),
});

FoodDetails.propTypes = {
  fetchFoodByID: PropTypes.func,
  fetchDrink: PropTypes.func,
  match: PropTypes.object,
}.isRequire;

export default connect(null, mapDispatchToProps)(FoodDetails);
