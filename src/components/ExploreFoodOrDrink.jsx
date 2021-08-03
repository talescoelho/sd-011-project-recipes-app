import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ExploreFoodOrDrink({ foodOrDrink }) {
  return (
    <div>
      <Link
        to={ foodOrDrink === 'Comidas' ? '/explorar/comidas/ingredientes'
          : '/explorar/bebidas/ingredientes' }
      >
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      {foodOrDrink === 'Comidas' && (
        <button type="button" data-testid="explore-by-area">Por Local de Origem</button>)}
      <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
    </div>
  );
}

export default ExploreFoodOrDrink;

ExploreFoodOrDrink.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};
