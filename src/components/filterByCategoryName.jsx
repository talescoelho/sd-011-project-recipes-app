import React from 'react';
import PropTypes from 'prop-types';

const FilterByCategoryName = ({ categoryNames }) => (
  <label htmlFor="filters">
    <label htmlFor="all-filters">
      All
      <input
        id="all-filter"
        name="filters"
        type="radio"
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
          />
        </label>
      ))
    }
  </label>
);

FilterByCategoryName.propTypes = {
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterByCategoryName;
