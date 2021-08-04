import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function ExploreDrinksIngredients({ match }) {
  return (
    <>
      <Header title="Explorar Ingredientes" match={ match } />
      <div>
        Bebidas Ingredientes
      </div>
      <Footer />
    </>
  );
}

ExploreDrinksIngredients.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ExploreDrinksIngredients;
