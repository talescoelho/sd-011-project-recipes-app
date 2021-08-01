import React, { useState, useEffect } from 'react';
import './css/filterMenu.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FilterMenu = ({
  dispatch,
  requestMenu,
  categoryNames,
  filterByCategory,
}) => {
  const [filterAll, setFilterAll] = useState(true);
  const [lastClickTarget, setLastClickTarget] = useState('');

  useEffect(() => {
    if (filterAll) {
      dispatch(requestMenu());
      setFilterAll(true);
    }
  }, [filterAll, dispatch, requestMenu]);

  const changeFilterToAll = () => {
    setFilterAll(true);
    setLastClickTarget('');
    document.querySelector('.filter-selected').className = '';
    document.querySelector('#All-category-filter').className = 'filter-selected';
  };

  const checkHasClicked = (id, categoryName) => {
    if (id === lastClickTarget) {
      changeFilterToAll();
    } else {
      dispatch(filterByCategory(categoryName));
    }
  };

  const changeFilterByCategoryName = (target, categoryName) => {
    setFilterAll(false);
    setLastClickTarget(target.id);
    document.querySelector('.filter-selected').className = '';
    target.className = 'filter-selected';
    checkHasClicked(target.id, categoryName);
  };

  return (
    <nav className="nav-filters">
      <button
        className="filter-selected"
        data-testid="All-category-filter"
        id="All-category-filter"
        onClick={ () => changeFilterToAll() }
        readOnly
        type="button"
      >
        All
      </button>
      {
        categoryNames.map((categoryName, index) => (
          <button
            className=""
            data-testid={ `${categoryName}-category-filter` }
            id={ `${categoryName}-filter` }
            key={ index }
            type="button"
            onClick={
              ({ target }) => changeFilterByCategoryName(target, categoryName)
            }
          >
            { categoryName }
          </button>
        ))
      }
    </nav>
  );
};

FilterMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  requestMenu: PropTypes.func.isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterByCategory: PropTypes.func.isRequired,
};

export default connect()(FilterMenu);
