import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { fetchDrinkListByCategory, updateCategory, fetchDrinkList,
} from '../redux/actions/drinkActions';

class DrinkCategories extends Component {
  constructor() {
    super();
    this.filterByAll = this.filterByAll.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
  }

  filterByAll() {
    const { actionFetchDrinkList, actionUpdateCategory } = this.props;
    actionUpdateCategory('All');
    actionFetchDrinkList('');
  }

  filterByCategory(category) {
    const { actionFetchDrinkByCategory, selectedCategory } = this.props;
    if (category === selectedCategory) {
      this.filterByAll();
    } else {
      actionFetchDrinkByCategory(category);
    }
  }

  render() {
    const { drinkCategories } = this.props;
    return (
      <div className="category-div">
        <Button
          size="sm"
          variant="outline-dark"
          className="category-drink-buttons"
          type="button"
          name="category"
          data-testid="All-category-filter"
          onClick={ this.filterByAll }
        >
          All
        </Button>
        { drinkCategories.map((item) => (
          <Button
            size="sm"
            variant="outline-dark"
            className="category-drink-buttons"
            type="button"
            name="category"
            key={ item.strCategory }
            data-testid={ `${item.strCategory}-category-filter` }
            onClick={ () => this.filterByCategory(item.strCategory) }
          >
            { item.strCategory }
          </Button>
        )) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkCategories: state.drinkReducer.drinkCategoriesList,
  selectedCategory: state.drinkReducer.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchDrinkByCategory: (category) => dispatch(fetchDrinkListByCategory(category)),
  actionFetchDrinkList: (name) => dispatch(fetchDrinkList(name)),
  actionUpdateCategory: (category) => dispatch(updateCategory(category)),
});

DrinkCategories.propTypes = {
  actionFetchDrinkList: PropTypes.func,
  actionFetchDrinkByCategory: PropTypes.func,
  actionUpdateCategory: PropTypes.func,
  drinkCategories: PropTypes.array,
  selectedCategory: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCategories);
