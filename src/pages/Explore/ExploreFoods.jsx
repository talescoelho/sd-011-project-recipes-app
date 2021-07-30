import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function ExploreFoods({ match }) {
  return (
    <>
      <Header title="Explorar Comidas" match={ match } />
      <div>
        Explore
      </div>
      <Footer />
    </>
  );
}

ExploreFoods.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ExploreFoods;
