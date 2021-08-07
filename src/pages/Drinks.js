import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductsDisplay from '../components/ProductsDisplay';

export default function Drinks({ location }) {
  const { state } = location;
  return (
    <main>
      <Header title="Bebidas" />
      <ProductsDisplay state={ state } />
      <Footer />
    </main>
  );
}

Drinks.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
};
