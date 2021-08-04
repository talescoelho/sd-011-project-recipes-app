import React from 'react';
import '../styles/TypeOfRecipesConcludeds.css';
import PropTypes from 'prop-types';

function TypeOfRecipesConcludeds({ filterByCategory }) {
  const handleChangeFilter = (value) => {
    filterByCategory(value);
  };

  return (
    <div className="TypeOfRecipesConcludedsContainer">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        value="All"
        onClick={ ({ target }) => handleChangeFilter(target.value) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ ({ target }) => handleChangeFilter(target.value) }
        value="Foods"
      >
        Foods
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ ({ target }) => handleChangeFilter(target.value) }
        value="Drinks"
      >
        Drinks
      </button>
    </div>
  );
}

TypeOfRecipesConcludeds.propTypes = {
  filterByCategory: PropTypes.func.isRequired,
};

export default TypeOfRecipesConcludeds;
