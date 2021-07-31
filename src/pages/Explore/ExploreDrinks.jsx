import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function ExploreDrinks({ match }) {
  return (
    <>
      <Header title="Explorar Bebidas" match={ match } />
      <div>
        Drinks
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
