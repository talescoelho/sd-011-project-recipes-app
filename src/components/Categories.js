import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFoodListByCategory, updateCategory, fetchFoodList } from '../redux/actions';

class Categories extends Component {
  constructor() {
    super();
    this.filterByAll = this.filterByAll.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
  }

  filterByAll() {
    const { actionFetchFoodList, actionUpdateCategory } = this.props;
    actionUpdateCategory('All');
    actionFetchFoodList('');
  }

  filterByCategory(category) {
    const { actionFetchFoodByCategory, selectedCategory } = this.props;
    if (category === selectedCategory) {
      this.filterByAll();
    } else {
      actionFetchFoodByCategory(category);
    }
  }

  render() {
    const { foodCategories } = this.props;
    return (
      <div>
        <button
          type="button"
          name="category"
          data-testid="All-category-filter"
          onClick={ this.filterByAll }
        >
          All
        </button>
        { foodCategories.map((item) => (
          <button
            type="button"
            name="category"
            key={ item.strCategory }
            data-testid={ `${item.strCategory}-category-filter` }
            onClick={ () => this.filterByCategory(item.strCategory) }
          >
            { item.strCategory }
          </button>
        )) }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodCategories: state.foodReducers.foodCategoriesList,
  selectedCategory: state.foodReducers.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchFoodByCategory: (category) => dispatch(fetchFoodListByCategory(category)),
  actionFetchFoodList: (name) => dispatch(fetchFoodList(name)),
  actionUpdateCategory: (category) => dispatch(updateCategory(category)),
});

Categories.propTypes = {
  actionFetchFoodList: PropTypes.func,
  actionFetchFoodByCategory: PropTypes.func,
  actionUpdateCategory: PropTypes.func,
  foodCategories: PropTypes.array,
  selectedCategory: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
