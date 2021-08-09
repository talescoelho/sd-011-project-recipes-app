import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFoodCategory, fetchFoodList } from '../redux/actions/foodActions';
import { FoodCard, FoodCategories, Header, Footer } from '../components';

class Foods extends Component {
  componentDidMount() {
    const { actionFetchFoodList, actionFetchCategories } = this.props;
    actionFetchFoodList('');
    actionFetchCategories('list');
  }

  render() {
    const { foodCardsList } = this.props;
    return (
      <div>
        <Header title="Comidas" search />
        <FoodCategories />
        <ul>
          { foodCardsList.map((item, index) => (
            <FoodCard key={ item.idMeal } food={ item } index={ index } />)) }
        </ul>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodCardsList: state.foodReducer.foodCardsList,
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
