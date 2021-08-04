import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFoodCategory, fetchFoodList } from '../redux/actions/foodActions';
import { FoodCards, FoodCategories, Header, Footer } from '../components';

class Foods extends Component {
  componentDidMount() {
    const { actionFetchFoodList, actionFetchCategories } = this.props;
    actionFetchFoodList('');
    actionFetchCategories('list');
  }

  render() {
    return (
      <div>
        <Header />
        <FoodCategories />
        <FoodCards />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchFoodList: state.foodReducer.foodCardsList,
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchFoodList: (name) => dispatch(fetchFoodList(name)),
  actionFetchCategories: (category) => dispatch(fetchFoodCategory(category)),
});

Foods.propTypes = {
  actionFetchFoodList: PropTypes.func,
  actionFetchCategories: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
