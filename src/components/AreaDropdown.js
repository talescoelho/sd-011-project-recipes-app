import React from 'react';
import PropTypes from 'prop-types';

export default function AreaDropdown({ dropdown, getMealsByArea }) {
  return (
    <label htmlFor="meal-area">
      <strong>Area:</strong>
      <select
        onChange={ getMealsByArea }
        data-testid="explore-by-area-dropdown"
        id="meal-area"
      >
        <option data-testid="All-option" value="All">All</option>
        {
          dropdown && dropdown.map(({ strArea }, key) => (
            <option
              data-testid={ `${strArea}-option` }
              value={ strArea }
              key={ key }
            >
              { strArea }
            </option>
          ))
        }
      </select>
    </label>
  );
}

AreaDropdown.propTypes = {
  dropdown: PropTypes.arrayOf([]).isRequired,
  getMealsByArea: PropTypes.func.isRequired,
};
