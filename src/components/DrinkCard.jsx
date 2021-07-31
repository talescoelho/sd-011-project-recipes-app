import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DrinkCard.css';

export default function DrinkCard({ recipe, i }) {
  return (
    <div className="drink-card" data-testid={ `${i}-recipe-card` }>
      <img
        src={ recipe.strDrinkThumb }
        alt={ recipe.strDrink }
        data-testid={ `${i}-card-img` }
      />
      <p data-testid={ `${i}-card-name` }>{ recipe.strDrink }</p>
    </div>
  );
}

DrinkCard.propTypes = {
  recipe: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
  i: PropTypes.number.isRequired,
};
