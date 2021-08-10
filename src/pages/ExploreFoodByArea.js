import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodCard from '../components/FoodCard';
import { fetchFoodAreaSuccess, fetchFoodList } from '../redux/actions/foodActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ExploreFoodByArea extends Component {
  componentDidMount() {
    const { fetchFoodArea, actionFetchFoodList } = this.props;
    fetchFoodArea();
    actionFetchFoodList('');
  }

  render() {
    const { foodArea, foodCardsList } = this.props;
    return (
      <div>
        <Header title="Explorar Origem" search />
        <select data-testid="explore-by-area-dropdown">
          { foodArea && foodArea.map((item, index) => (
            <option key={ index } data-testid={ `${item.strArea}-option` }>
              { item.strArea }
            </option>
          )) }
          <option data-testid="All-option">All</option>
        </select>
        <ul>
          { foodCardsList && foodCardsList.map((item, index) => (
            <FoodCard key={ item.idMeal } food={ item } index={ index } />)) }
        </ul>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodArea: state.foodReducer.foodArea,
  foodCardsList: state.foodReducer.foodCardsList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFoodArea: () => dispatch(fetchFoodAreaSuccess()),
  actionFetchFoodList: (name) => dispatch(fetchFoodList(name)),
});

ExploreFoodByArea.propTypes = {
  foodArea: PropTypes.arrayOf(PropTypes.object),
  fetchFoodArea: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFoodByArea);
