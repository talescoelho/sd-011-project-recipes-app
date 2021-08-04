import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CheckboxDrink({ ingredients, measures, pathname }) {
  const [allCheckboxMarkup, setAllCheckboxMarkup] = useState(false);
  const [allCheckbox, setAllCheckbox] = useState([]);

  function handleCheckbox() {
    setAllCheckbox([...allCheckbox, true]);

    if (allCheckbox.length + 1 === ingredients.length) {
      console.log('a');
      setAllCheckboxMarkup(!allCheckboxMarkup);
    } else {
      setAllCheckboxMarkup(false);
    }
  }

  return (
    <div>
      {ingredients.map((ingredientDrink, index) => (
        <div key={ index } data-testid={ `${index}-ingredient-step` }>
          <input
            type="checkbox"
            id={ ingredients[index] }
            onChange={ handleCheckbox }
          />
          <label htmlFor={ ingredients[index] }>
            {ingredientDrink}
            {' '}
            <strong>{measures[index]}</strong>
          </label>
        </div>
      ))}
      <Link to={ `${pathname}/in-progress` }>
        <button
          disabled={ !allCheckboxMarkup }
          className="start-recipe"
          type="button"
          data-testid="finish-recipe-btn"
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
}

export default CheckboxDrink;

CheckboxDrink.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  measures: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
}.isRequired;
