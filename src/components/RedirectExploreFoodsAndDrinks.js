import React from 'react';
import { Link } from 'react-router-dom';

function RedirectExploreFoodsAndDrinks() {
  return (
    <navbar className="explore-main-buttons-container">
      <Link className="btn-link" to="/explorar/comidas">
        <button
          type="button"
          data-testid="explore-food"
        >
          Explorar Comidas
        </button>
      </Link>
      <Link className="btn-link" to="/explorar/bebidas">
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explorar Bebidas
        </button>
      </Link>
    </navbar>
  );
}

export default RedirectExploreFoodsAndDrinks;
