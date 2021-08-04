import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function IngredientList({ ingredients }) {
  const renderListInProgress = () => (
    <div>
      <hh2>Ingredients</hh2>
      <ul>
        {ingredients.map((item, index) => (
          <div key={ index }>
            <input type="checkbox" name="" id="" />
            <li data-testid={ `${index}-ingredient-name-and-measure` }>
              {item}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );

  const renderListToDetails = () => (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const location = useLocation();
  if (!location.pathname.includes('in-progress')) return renderListToDetails();
  if (location.pathname.includes('in-progress')) return renderListInProgress();
}

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  details: PropTypes.bool.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default IngredientList;
