import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function ExploreFoodsArea({ match }) {
  return (
    <>
      <Header title="Explorar Origem" glass="true" match={ match } />
      <div>
        Explore Foods Area
      </div>
      <Footer />
    </>
  );
}

ExploreFoodsArea.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ExploreFoodsArea;
