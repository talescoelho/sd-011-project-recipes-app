import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FilterByCategoryName = ({
  dispatch,
  requestMealsMenu,
  categoryNames,
  filterByCategory,
}) => (
  <label htmlFor="filters">
    <label htmlFor="all-filters">
      All
      <input
        id="all-filter"
        name="filters"
        type="radio"
        onClick={ () => dispatch(requestMealsMenu()) }
      />
    </label>
    {
      categoryNames.map((categoryName, index) => (
        <label key={ index } htmlFor={ `${categoryName}-filter` }>
          { categoryName }
          <input
            data-testid={ `${categoryName}-category-filter` }
            id={ `${categoryName}-filter` }
            name="filters"
            type="radio"
            onClick={ () => dispatch(filterByCategory(categoryName)) }
          />
        </label>
      ))
    }
  </label>
);

FilterByCategoryName.propTypes = {
  dispatch: PropTypes.func.isRequired,
  requestMealsMenu: PropTypes.func.isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterByCategory: PropTypes.func.isRequired,
};

export default connect()(FilterByCategoryName);
