import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductsDisplay from '../components/ProductsDisplay';

function Foods({ location }) {
  const { state } = location;
  return (
    <main>
      <Header title="Comidas" />
      <ProductsDisplay state={ state } />
      <Footer />
    </main>
  );
}

Foods.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
};

export default Foods;
