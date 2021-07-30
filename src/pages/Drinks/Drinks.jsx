import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function Drinks({ match }) {
  return (
    <>
      <Header title="Bebidas" glass="true" match={ match } />
      <div>Drinks</div>
      <Footer />
    </>
  );
}

Drinks.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Drinks;
