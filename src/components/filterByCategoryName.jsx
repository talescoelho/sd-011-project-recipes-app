import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FilterByCategoryName = ({
  dispatch,
  requestMealsMenu,
  categoryNames,
  filterByCategory,
}) => {
  const [checked, setChecked] = useState(true);
  const [lastClick, setLastClicked] = useState('');

  useEffect(() => {
    if (checked) {
      dispatch(requestMealsMenu());
      setChecked(true);
    }
  }, [checked, dispatch, requestMealsMenu]);

  const checkHasClicked = ({ target: { id } }) => {
    if (id === lastClick) {
      setChecked(true);
    }
  };

  const requestFilterMenuByCategory = (id, categoryName) => {
    setChecked(false);
    setLastClicked(id);
    dispatch(filterByCategory(categoryName));
  };

  return (
    <label htmlFor="filters">
      <label htmlFor="all-filters">
        All
        <input
          checked={ checked }
          data-testid="All-category-filter"
          id="all-filter"
          name="filters"
          onClick={ () => setChecked(true) }
          readOnly
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
              onClick={ checkHasClicked }
              onChange={
                ({ target: { id } }) => requestFilterMenuByCategory(id, categoryName)
              }
            />
          </label>
        ))
      }
    </label>
  );
};

FilterByCategoryName.propTypes = {
  dispatch: PropTypes.func.isRequired,
  requestMealsMenu: PropTypes.func.isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterByCategory: PropTypes.func.isRequired,
};

export default connect()(FilterByCategoryName);
