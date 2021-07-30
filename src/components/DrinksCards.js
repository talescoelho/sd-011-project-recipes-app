import React from 'react';
import PropTypes from 'prop-types';

export default function DrinksCards({ drinks }) {
  const cardLimit = 12;
  return (
    <div>
      {
        drinks.map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          index < cardLimit
            ? (
              <div key={ idDrink } data-testid={ `${index}-recipe-card` }>
                <img src={ strDrinkThumb } alt="" data-testid={ `${index}-card-img` } />
                <p data-testid={ `${index}-card-name` }>{strDrink}</p>
              </div>)
            : null
        ))
      }
    </div>
  );
}

DrinksCards.propTypes = {
  drinks: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
