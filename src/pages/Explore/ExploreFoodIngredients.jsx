import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function ExploreFoodIngredients({ match }) {
  return (
    <>
      <Header title="Explorar Ingredientes" match={ match } />
      <div />
      <Footer />
    </>
  );
}

ExploreFoodIngredients.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ExploreFoodIngredients;
