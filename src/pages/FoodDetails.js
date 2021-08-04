import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodID, fetchDrinkRecomendations } from '../redux/actions/foodActions';
import { DrinkCards, FoodDetailsCard } from '../components';

class FoodDetails extends Component {
  componentDidMount() {
    const { match: { params: { id } }, fetchFoodByID, fetchDrink } = this.props;
    fetchFoodByID(id);
    fetchDrink('');
  }

  render() {
    return (
      <div>
        <FoodDetailsCard />
        <DrinkCards recomendation />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchFoodByID: (id) => dispatch(fetchFoodID(id)),
  fetchDrink: (name) => dispatch(fetchDrinkRecomendations(name)),
});

export default connect(null, mapDispatchToProps)(FoodDetails);
