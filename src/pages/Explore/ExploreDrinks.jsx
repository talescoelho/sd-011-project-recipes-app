import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function ExploreDrinks({ match }) {
  return (
    <>
      <Header title="Explorar Bebidas" match={ match } />
      <div>
        <Link to="bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </div>
      <Footer />
    </>
  );
}

ExploreDrinks.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ExploreDrinks;
