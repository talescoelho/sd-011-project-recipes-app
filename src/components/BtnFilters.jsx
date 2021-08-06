import React from 'react';
import '../styles/DoneRecipes.css';

function BtnFilters() {
  return (
    <div className="buttonfilter-container">
      <button
        className="btn-filter"
        data-testid="filter-by-all-btn"
        type="button"
      >
        All
      </button>
      <button
        className="btn-filter"
        data-testid="filter-by-food-btn"
        type="button"
      >
        Food
      </button>
      <button
        className="btn-filter"
        data-testid="filter-by-drink-btn"
        type="button"
      >
        Drink
      </button>
    </div>
  );
}

export default BtnFilters;
