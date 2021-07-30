import React from 'react';
import PropTypes from 'prop-types';

export default function MealsCards({ meals }) {
  const cardLimit = 12;
  return (
    <div>
      {
        meals.map(({ idMeal, strMeal, strMealThumb }, index) => (
          index < cardLimit
            ? (
              <div key={ idMeal } data-testid={ `${index}-recipe-card` }>
                <img src={ strMealThumb } alt="" data-testid={ `${index}-card-img` } />
                <p data-testid={ `${index}-card-name` }>{strMeal}</p>
              </div>)
            : null
        ))
      }
    </div>
  );
}

MealsCards.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
