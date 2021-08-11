import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { searchRandomDrink } from '../services/RequestDrinks';

function ExploreDrink() {
  const history = useHistory();
  async function handleSurprise() {
    const request = await searchRandomDrink();
    history.push(`/bebidas/${request.idDrink}`);
  }
  return (
    <div>
      <Header title="Explorar Bebidas" search={ false } />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          Por Ingredientes
        </button>
      </Link>
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ () => handleSurprise() }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

ExploreDrink.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default ExploreDrink;
