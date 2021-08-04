import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodID } from '../redux/actions/foodActions';
import { FoodDetailsCard } from '../components/';

class FoodDetails extends Component {
  componentDidMount() {
  const { match: { params: {id} }, fetchFoodByID } = this.props;
  fetchFoodByID(id);
  }

  render() {
    return (
      <div>
       <FoodDetailsCard />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchFoodByID: (id) => dispatch(fetchFoodID(id)),
})

export default connect (null, mapDispatchToProps)(FoodDetails);
