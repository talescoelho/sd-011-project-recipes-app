import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Explorar({ title }) {
  return (
    <div>
      <Header title={ title } />
      <Link to="/explorar/comidas">
        <button
          data-testid="explore-food"
          type="button"
        >
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          data-testid="explore-drinks"
          type="button"
        >
          Explorar Bebidas
        </button>
      </Link>
    </div>
  );
}

export default Explorar;

Explorar.propTypes = {
  title: PropTypes.string.isRequired,
};
